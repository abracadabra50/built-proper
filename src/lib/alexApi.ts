// Alex AI API Integration with Anthropic Claude
import { alexAgent } from './alexAgent';

const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY || '';
const MODEL = 'claude-sonnet-4-20250514';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface AlexResponse {
  message: string;
  options?: string[];
  shouldBookCall?: boolean;
  leadScore?: number;
  qualified?: boolean;
}

// System prompt for Alex
const ALEX_SYSTEM_PROMPT = `You are Alex, an AI sales agent for Built Proper, a premium web development agency for UK tradesmen.

Your personality:
- Friendly, casual, but professional ("Alright mate", "Proper impressive", etc.)
- Direct and no-nonsense - tradesmen appreciate straight talk
- Confident about our services without being pushy
- Use UK English and tradesman-friendly language

Your goal:
- Qualify leads by understanding their business, urgency, and budget
- Book calls with high-intent leads (those who need websites urgently, have budget, are losing money)
- Educate medium-intent leads about our unique value (custom-built, no WordPress, AI features)
- Nurture low-intent leads without being pushy

Key information about Built Proper:
- We build 100% custom websites (no WordPress, no templates)
- Prices: £2,997 (Starter), £4,997 (Growth), £7,997 (Domination)
- We include AI chat, lead automation, and custom systems
- 7-day turnaround for most sites
- We've helped Hallmark Driveways reach £2M pipeline
- We specialise in builders, plumbers, electricians, all UK trades

Qualification criteria:
- HIGH INTENT: Urgent need + has budget + experiencing pain (losing leads/money)
- MEDIUM INTENT: Interested but shopping around or planning ahead
- LOW INTENT: Just browsing or very early stage

Always aim to:
1. Understand their current situation (have website? what's not working?)
2. Identify pain points (no leads, slow site, WordPress issues)
3. Gauge urgency (ASAP vs planning)
4. Qualify budget (our minimum is £3k)
5. Book a call if qualified, or nurture if not ready

Provide responses with suggested quick reply options that move the conversation forward.`;

export class AlexAPI {
  private conversationHistory: ChatMessage[] = [];
  private leadContext: any = {};

  constructor() {
    this.conversationHistory.push({
      role: 'system',
      content: ALEX_SYSTEM_PROMPT
    });
  }

  async getResponse(userMessage: string, context?: any): Promise<AlexResponse> {
    try {
      // Add user message to history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      // Update lead context
      if (context) {
        this.leadContext = { ...this.leadContext, ...context };
      }

      // Call Anthropic API
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 500,
          temperature: 0.7,
          messages: this.conversationHistory,
          system: ALEX_SYSTEM_PROMPT
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.content[0].text;

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
      });

      // Parse response for options and actions
      const parsed = this.parseResponse(assistantMessage);
      
      // Use the agent to calculate lead score
      const agentAnalysis = await alexAgent.processMessage(userMessage);

      return {
        message: parsed.message,
        options: parsed.options,
        shouldBookCall: agentAnalysis.shouldBookCall,
        leadScore: agentAnalysis.leadData.qualificationScore,
        qualified: agentAnalysis.leadData.qualified
      };

    } catch (error) {
      console.error('Error calling Anthropic API:', error);
      
      // Fallback to local agent
      const fallbackResponse = await alexAgent.processMessage(userMessage);
      return {
        message: fallbackResponse.response,
        options: fallbackResponse.options,
        shouldBookCall: fallbackResponse.shouldBookCall,
        leadScore: fallbackResponse.leadData.qualificationScore,
        qualified: fallbackResponse.leadData.qualified
      };
    }
  }

  private parseResponse(response: string): { message: string; options?: string[] } {
    // Look for options in the response (formatted as [Option 1] [Option 2] etc)
    const optionMatches = response.match(/\[([^\]]+)\]/g);
    
    if (optionMatches && optionMatches.length > 0) {
      const options = optionMatches.map(match => match.replace(/[\[\]]/g, ''));
      const message = response.replace(/\[[^\]]+\]/g, '').trim();
      return { message, options };
    }

    // Look for bullet points that could be options
    const lines = response.split('\n');
    const bulletPoints = lines.filter(line => line.trim().startsWith('•') || line.trim().startsWith('-'));
    
    if (bulletPoints.length >= 2 && bulletPoints.length <= 4) {
      const options = bulletPoints.map(point => 
        point.replace(/^[\s•-]+/, '').trim()
      );
      const message = lines.filter(line => 
        !line.trim().startsWith('•') && !line.trim().startsWith('-')
      ).join('\n').trim();
      return { message, options };
    }

    return { message: response };
  }

  // Get conversation summary for CRM
  getConversationSummary(): { 
    messages: ChatMessage[]; 
    leadContext: any; 
    timestamp: Date 
  } {
    return {
      messages: this.conversationHistory,
      leadContext: this.leadContext,
      timestamp: new Date()
    };
  }

  // Reset conversation
  reset(): void {
    this.conversationHistory = [{
      role: 'system',
      content: ALEX_SYSTEM_PROMPT
    }];
    this.leadContext = {};
  }
}

// Export singleton instance
export const alexAPI = new AlexAPI();

// Helper function for quick responses (no API call)
export const quickResponses = {
  greeting: () => ({
    message: "Alright mate! I'm Alex from Built Proper. 👋 Seen you checking out our work - what brings you here?",
    options: [
      '🚀 Need a new website',
      '😤 Current site isn\'t working',
      '🔍 Shopping around',
      '💬 Just browsing'
    ]
  }),
  
  highIntent: () => ({
    message: "Perfect! You're exactly who we love working with. Based on what you've told me, we can definitely help. Let's get you sorted with a quick 15-minute strategy call.",
    options: [
      '📞 Book call now',
      '📧 Send info first',
      '💭 I need to think'
    ],
    shouldBookCall: true
  }),
  
  caseStudy: () => ({
    message: "Check this out - we helped Hallmark Driveways go from struggling to a £2M pipeline. All custom-built, no WordPress rubbish. Want to see how we did it?",
    options: [
      '📊 Show me the case study',
      '💰 What\'s the investment?',
      '🤔 How long does it take?'
    ]
  }),
  
  pricing: () => ({
    message: "Our custom sites start at £2,997 for a Starter package. Most trades go for our £4,997 Growth package which includes AI chat and lead automation. For the full works with custom systems, it's £7,997. All one-time payments, no monthly fees.",
    options: [
      '📞 Let\'s discuss my needs',
      '📊 Show me examples',
      '💭 I\'ll think about it'
    ]
  })
};
