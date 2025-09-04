import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Calendar, ChevronDown, Zap, Globe, Search, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { alexAPI, quickResponses } from '../lib/alexApi';

interface Message {
  id: string;
  type: 'bot' | 'user' | 'options';
  content: string;
  options?: string[];
  timestamp: Date;
}

const AlexChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [leadData, setLeadData] = useState({
    name: '',
    business: '',
    hasWebsite: null,
    urgency: null,
    budget: null,
    qualified: false
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open after 5 seconds if not interacted
  useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        initializeChat();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const initializeChat = () => {
    if (messages.length === 0) {
      const greeting = {
        id: Date.now().toString(),
        type: 'bot' as const,
        content: "Alright mate! I'm Alex from Built Proper. 👋 Seen you checking out our work - proper impressive that you're up at this hour grinding! What brings you here?",
        timestamp: new Date()
      };
      
      const options = {
        id: (Date.now() + 1).toString(),
        type: 'options' as const,
        content: '',
        options: [
          '🚀 Need a new website',
          '😤 Current site isn\'t working',
          '🔍 Shopping around for agencies',
          '💬 Just browsing'
        ],
        timestamp: new Date()
      };
      
      setMessages([greeting, options]);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
    initializeChat();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const addBotMessage = (content: string, options?: string[]) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      if (options) {
        const optionsMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'options',
          content: '',
          options,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, optionsMessage]);
      }
      
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionClick = async (option: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: option,
      timestamp: new Date()
    };
    setMessages(prev => prev.filter(m => m.type !== 'options').concat(userMessage));
    setIsTyping(true);

    // For quick options, use predefined responses for speed
    // For complex queries, use AI
    if (option.includes('Need a new website')) {
      setLeadData(prev => ({ ...prev, hasWebsite: false }));
      addBotMessage(
        "Perfect! Love working with businesses ready to level up. What trade are you in?",
        ['🔨 Construction/Building', '🔧 Plumbing', '⚡ Electrical', '🎨 Decorating', '🏠 Other trade']
      );
    } else if (option.includes('isn\'t working')) {
      setLeadData(prev => ({ ...prev, hasWebsite: true }));
      addBotMessage(
        "Ah, the classic WordPress nightmare? Or something else? What's the main issue?",
        ['📉 No leads coming in', '🐌 Site is too slow', '📱 Looks rubbish on mobile', '🔍 Can\'t find us on Google']
      );
    } else if (option.includes('Shopping around')) {
      addBotMessage(
        "Smart move doing your research! What's most important to you in a web agency?",
        ['💰 Best value for money', '🏆 Proven results', '🤖 Latest technology', '🤝 Ongoing support']
      );
    } else if (option.includes('Just browsing')) {
      addBotMessage(
        "No worries! While you're here, fancy seeing what we did for Hallmark Driveways? Transformed their whole business - £2M pipeline now! Want the case study?",
        ['📊 Yes, show me the results', '💬 Tell me more about your services', '👋 I\'ll come back later']
      );
    }
    
    // Continue qualification based on responses
    else if (option.includes('Construction') || option.includes('Plumbing') || option.includes('Electrical')) {
      setLeadData(prev => ({ ...prev, business: option }));
      addBotMessage(
        "Brilliant! We've built sites for loads of " + option.toLowerCase().replace('🔨 ', '').replace('🔧 ', '').replace('⚡ ', '') + " businesses. How quickly do you need this sorted?",
        ['🚨 ASAP - losing money daily', '📅 Next few weeks', '🤔 Just planning ahead']
      );
    }
    
    // Urgency qualification
    else if (option.includes('ASAP')) {
      setLeadData(prev => ({ ...prev, urgency: 'high', qualified: true }));
      addBotMessage(
        "Right, let's get this sorted! I can see you're serious about growing. We can have your new site live in 7 days. Want to lock in a quick 15-minute call with our team?",
        ['📞 Yes, book me in', '📧 Send me info first', '💭 Need to think about it']
      );
    }
    
    // Booking flow
    else if (option.includes('book me in')) {
      addBotMessage(
        "Perfect! What's your name and best number? I'll get someone to call you within the hour (yes, even at this time - we don't mess about!)."
      );
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Check if it's contact details
    const phoneRegex = /\d{10,11}/;
    const emailRegex = /\S+@\S+\.\S+/;
    
    if (phoneRegex.test(messageToSend) || emailRegex.test(messageToSend)) {
      setLeadData(prev => ({ 
        ...prev, 
        contact: messageToSend,
        qualified: true 
      }));
      
      addBotMessage(
        "Brilliant! Got your details. Someone from our team will be in touch within the hour. In the meantime, check out our case studies - proper impressive results! 🚀"
      );
      
      // Send to CRM
      console.log('Lead captured:', { ...leadData, contact: messageToSend });
      
      // Send notification (in production, this would be a webhook)
      try {
        await fetch('/api/notify-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...leadData, contact: messageToSend })
        });
      } catch (error) {
        console.error('Failed to notify:', error);
      }
    } else {
      // Use AI for dynamic response
      try {
        const response = await alexAPI.getResponse(messageToSend, leadData);
        
        // Update lead data if qualified
        if (response.qualified) {
          setLeadData(prev => ({ 
            ...prev, 
            qualified: true,
            qualificationScore: response.leadScore 
          }));
        }
        
        setIsTyping(false);
        addBotMessage(response.message, response.options);
        
        // If should book call, add booking link
        if (response.shouldBookCall) {
          setTimeout(() => {
            addBotMessage(
              "Here's my calendar - pick a time that works for you: https://cal.com/builtproper/discovery",
              ['📅 Book now', '💭 I\'ll think about it']
            );
          }, 2000);
        }
      } catch (error) {
        console.error('Error getting AI response:', error);
        setIsTyping(false);
        // Fallback response
        addBotMessage(
          "Good question! Let me help you with that. What specifically would you like to know?",
          ['💰 Pricing', '⏱️ Timeline', '🛠️ Our process', '📊 See examples']
        );
      }
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full p-4 shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
          >
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-orange-500"></span>
                </div>
                <div>
                  <h3 className="text-white font-bold">Alex from Built Proper</h3>
                  <p className="text-white/80 text-xs">Available 24/7 • Responds instantly</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions Bar */}
            <div className="bg-slate-800/50 p-3 border-b border-slate-700 flex gap-2">
              <button aria-label="Get quick quote" className="flex items-center gap-1 bg-slate-700/50 hover:bg-slate-700 px-3 py-1.5 rounded-full text-xs text-gray-300 transition-colors">
                <Zap className="w-3 h-3" />
                Quick Quote
              </button>
              <button aria-label="Book a call" className="flex items-center gap-1 bg-slate-700/50 hover:bg-slate-700 px-3 py-1.5 rounded-full text-xs text-gray-300 transition-colors">
                <Calendar className="w-3 h-3" />
                Book Call
              </button>
              <button aria-label="See our work" className="flex items-center gap-1 bg-slate-700/50 hover:bg-slate-700 px-3 py-1.5 rounded-full text-xs text-gray-300 transition-colors">
                <Globe className="w-3 h-3" />
                Our Work
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.type === 'bot' && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                        <p className="text-gray-300 text-sm">{message.content}</p>
                      </div>
                    </div>
                  )}
                  
                  {message.type === 'user' && (
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                        <p className="text-white text-sm">{message.content}</p>
                      </div>
                    </div>
                  )}
                  
                  {message.type === 'options' && message.options && (
                    <div className="flex flex-wrap gap-2 ml-11">
                      {message.options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleOptionClick(option)}
                          className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-orange-500/50 text-gray-300 text-sm px-3 py-2 rounded-full transition-all duration-200"
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-800 text-white placeholder-gray-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  aria-label="Send message"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full p-2 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-600 text-center mt-2">
                Powered by Built Proper AI • No bots, just Alex
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlexChat;
