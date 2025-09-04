// Alex AI Agent Configuration
// This would connect to your LangGraph setup

interface LeadData {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  hasWebsite: boolean | null;
  websiteUrl?: string;
  urgency: 'high' | 'medium' | 'low' | null;
  budget: 'premium' | 'standard' | 'budget' | null;
  painPoints: string[];
  qualificationScore: number;
  qualified: boolean;
  source: string;
  timestamp: Date;
}

interface ConversationContext {
  messages: any[];
  leadData: LeadData;
  stage: 'greeting' | 'discovery' | 'qualification' | 'booking' | 'nurture';
  intent: string | null;
}

export class AlexAgent {
  private context: ConversationContext;
  private anthropicApiKey = import.meta.env.VITE_ANTHROPIC_API_KEY || '';
  private model = 'claude-sonnet-4-20250514';

  constructor() {
    this.context = {
      messages: [],
      leadData: {
        hasWebsite: null,
        urgency: null,
        budget: null,
        painPoints: [],
        qualificationScore: 0,
        qualified: false,
        source: 'chat',
        timestamp: new Date()
      },
      stage: 'greeting',
      intent: null
    };
  }

  // Qualification scoring logic
  private calculateQualificationScore(leadData: LeadData): number {
    let score = 0;
    
    // Urgency scoring (0-30 points)
    if (leadData.urgency === 'high') score += 30;
    else if (leadData.urgency === 'medium') score += 20;
    else if (leadData.urgency === 'low') score += 10;
    
    // Budget scoring (0-25 points)
    if (leadData.budget === 'premium') score += 25;
    else if (leadData.budget === 'standard') score += 15;
    else if (leadData.budget === 'budget') score += 5;
    
    // Pain points scoring (0-25 points)
    const criticalPainPoints = ['no leads', 'losing money', 'competitors winning', 'wordpress broken'];
    const matchedPainPoints = leadData.painPoints.filter(p => 
      criticalPainPoints.some(cp => p.toLowerCase().includes(cp))
    );
    score += Math.min(matchedPainPoints.length * 10, 25);
    
    // Contact info scoring (0-20 points)
    if (leadData.email) score += 10;
    if (leadData.phone) score += 10;
    
    return score;
  }

  // Determine next best action based on context
  private determineNextAction(): { message: string; options?: string[]; shouldBookCall?: boolean } {
    const score = this.calculateQualificationScore(this.context.leadData);
    
    // High-intent lead (score > 60)
    if (score > 60) {
      return {
        message: "You're exactly the type of business we love working with! Based on what you've told me, we can definitely help. Let's get you sorted with a quick 15-minute strategy call.",
        options: ['📞 Book call now', '📧 Send info first', '💭 I need to think'],
        shouldBookCall: true
      };
    }
    
    // Medium-intent lead (score 30-60)
    if (score > 30) {
      return {
        message: "I can see you're serious about growing your business. Let me show you exactly how we've helped similar trades dominate their local market.",
        options: ['📊 Show me case studies', '💰 What\'s the investment?', '🤔 How does it work?']
      };
    }
    
    // Low-intent lead (score < 30)
    return {
      message: "No worries! While you're here, worth checking out what we did for Hallmark Driveways - proper game changer for them.",
      options: ['👀 Show me', '👋 I\'ll come back later']
    };
  }

  // Process user message and generate response
  public async processMessage(userMessage: string): Promise<{
    response: string;
    options?: string[];
    leadData: LeadData;
    shouldBookCall?: boolean;
  }> {
    // Update context with user message
    this.context.messages.push({ role: 'user', content: userMessage });
    
    // Extract entities from message (simplified - in production use NLP)
    this.extractEntities(userMessage);
    
    // Determine stage and response
    const nextAction = this.determineNextAction();
    
    // Update qualification score
    this.context.leadData.qualificationScore = this.calculateQualificationScore(this.context.leadData);
    this.context.leadData.qualified = this.context.leadData.qualificationScore > 50;
    
    return {
      response: nextAction.message,
      options: nextAction.options,
      leadData: this.context.leadData,
      shouldBookCall: nextAction.shouldBookCall
    };
  }

  // Extract entities from user message
  private extractEntities(message: string): void {
    const lower = message.toLowerCase();
    
    // Check for urgency indicators
    if (lower.includes('asap') || lower.includes('urgent') || lower.includes('losing money')) {
      this.context.leadData.urgency = 'high';
    } else if (lower.includes('soon') || lower.includes('next month')) {
      this.context.leadData.urgency = 'medium';
    } else if (lower.includes('planning') || lower.includes('future')) {
      this.context.leadData.urgency = 'low';
    }
    
    // Check for pain points
    const painPointKeywords = {
      'no leads': 'Lead generation problem',
      'slow site': 'Performance issues',
      'wordpress': 'Platform limitations',
      'not ranking': 'SEO problems',
      'looks dated': 'Design issues',
      'competitors': 'Losing to competition'
    };
    
    Object.entries(painPointKeywords).forEach(([keyword, painPoint]) => {
      if (lower.includes(keyword)) {
        this.context.leadData.painPoints.push(painPoint);
      }
    });
    
    // Extract contact info
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const phoneRegex = /\b(?:0|\+44)?(?:\d\s?){10,11}\b/;
    
    const emailMatch = message.match(emailRegex);
    if (emailMatch) {
      this.context.leadData.email = emailMatch[0];
    }
    
    const phoneMatch = message.match(phoneRegex);
    if (phoneMatch) {
      this.context.leadData.phone = phoneMatch[0];
    }
  }

  // Send lead data to CRM/backend
  public async syncLeadToCRM(): Promise<void> {
    // In production, this would send to your CRM
    console.log('Syncing lead to CRM:', this.context.leadData);
    
    // Example: Send to webhook
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.context.leadData)
      });
    } catch (error) {
      console.error('Failed to sync lead:', error);
    }
  }

  // Generate calendar booking link
  public generateBookingLink(): string {
    // In production, integrate with Cal.com or Calendly API
    const params = new URLSearchParams({
      name: this.context.leadData.name || '',
      email: this.context.leadData.email || '',
      notes: `Qualification Score: ${this.context.leadData.qualificationScore}\nPain Points: ${this.context.leadData.painPoints.join(', ')}`
    });
    
    return `https://cal.com/builtproper/discovery?${params.toString()}`;
  }
}

// Conversation templates for different scenarios
export const conversationTemplates = {
  greetings: [
    "Alright mate! I'm Alex from Built Proper. 👋 Seen you checking out our work - what brings you here?",
    "Evening! I'm Alex from Built Proper. Working late too, eh? What can I help you with?",
    "Hey there! Alex from Built Proper here. Looking for a proper website that actually works?"
  ],
  
  qualifyingQuestions: {
    business: "What trade are you in? Always good to know who we're working with!",
    website: "Have you got a website already, or starting from scratch?",
    urgency: "How quickly do you need this sorted? Just planning ahead or need something ASAP?",
    budget: "Rough idea of budget? Our sites start at £3k but most trades go for our £5k package.",
    painPoints: "What's the biggest problem you're trying to solve right now?"
  },
  
  objectionHandlers: {
    tooExpensive: "I get it - it's an investment. But think about it this way: one good job from the website pays for itself. Our average client sees 5x ROI in the first year.",
    needToThink: "Absolutely, it's a big decision! While you're thinking, check out what we did for Hallmark Driveways - might give you some ideas.",
    shoppingAround: "Smart move! Just remember - we're the only agency that doesn't use WordPress. Everything's custom-coded from scratch.",
    notReady: "No rush at all! But just so you know, every day without a proper website is money left on the table. When you're ready, I'll be here!"
  },
  
  closingLines: {
    highIntent: "Right, let's get this sorted! 15-minute call tomorrow to discuss your project?",
    mediumIntent: "How about I send over some examples of sites we've built for trades like yours?",
    lowIntent: "No worries! Save our site and come back when you're ready to dominate online."
  }
};

// Export singleton instance
export const alexAgent = new AlexAgent();
