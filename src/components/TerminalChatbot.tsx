import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Terminal, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const TerminalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to my portfolio terminal! Type "help" for available commands, or ask me anything about my experience.',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = [
    "Tell me about your AI/ML experience",
    "What projects have you worked on?",
    "Which tech stack do you prefer?",
    "How many coding problems have you solved?",
    "What's your experience with React?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('help')) {
      return `Available commands:
• experience - My work experience
• skills - Technical skills
• projects - Notable projects  
• education - Academic background
• contact - Get in touch
• resume - Download my resume

Or just ask me anything about my background!`;
    }
    
    if (input.includes('ai') || input.includes('ml') || input.includes('machine learning')) {
      return `I have extensive AI/ML experience! Currently working as an AI Software Engineer at KPMG, where I developed a multilingual File, Text, and Folder Translator Agent integrated with Azure Translation services. 

I've built ESG Workforce Wellbeing Agents using RoBERTa for sentiment analysis, CNN models for emotion detection, and LLM-based recommendation engines. Proficient in TensorFlow, Keras, NLP, and neural networks.`;
    }
    
    if (input.includes('react') || input.includes('frontend')) {
      return `I'm skilled in modern frontend development! My stack includes:
• React.js with hooks and context
• JavaScript (ES6+), TypeScript
• CSS3, Tailwind CSS, Material UI
• HTML5, Bootstrap

I've built projects like CompEgg - a competitive programming dashboard aggregating data from multiple platforms with D3.js visualizations and Firebase auth.`;
    }
    
    if (input.includes('project')) {
      return `Here are my key projects:

🤖 **AI-Powered ESG Workforce Wellbeing Agent**
- Real-time burnout detection using email sentiment analysis
- Multimodal AI combining NLP, CV, and sensor data
- Custom wellness recommendations via LLM

💻 **CompEgg - Competitive Programming Dashboard**  
- Aggregates data from Leetcode, GFG, Codechef, Codeforces
- D3.js heatmap visualizations
- Google OAuth & Firebase integration

🔧 **Microservices Resilience Platform**
- Circuit breaker patterns with Prometheus monitoring
- Grafana dashboards for full-stack observability`;
    }
    
    if (input.includes('skill') || input.includes('tech')) {
      return `My technical arsenal includes:

**Languages:** Python, JavaScript, C++, Go, SQL
**Frontend:** React.js, HTML5, CSS3, Tailwind CSS
**Backend:** Node.js, Express.js, FastAPI, REST APIs
**AI/ML:** TensorFlow, Keras, Scikit-learn, NLP, Neural Networks
**Databases:** MongoDB, PostgreSQL, MySQL
**Tools:** Docker, Kubernetes, Git, Azure, AWS
**Monitoring:** Prometheus, Grafana, Winston

I've solved 1000+ coding problems and maintain a 1550+ rating on LeetCode!`;
    }
    
    if (input.includes('experience') || input.includes('work')) {
      return `Currently working as an **Analyst – AI Software Engineer** at KPMG Global Services (Feb 2025-Present):

• Developing multilingual translation agents for PDFs, CSVs, images at scale
• Orchestrating ML pipelines with Azure Translation services  
• Leveraging NVIDIA CUDA Toolkit for 3x faster deep learning processing
• Managing enterprise GitHub workflows and SSH configurations

I'm passionate about building AI solutions that solve real-world problems!`;
    }
    
    if (input.includes('education') || input.includes('study')) {
      return `🎓 **B.Tech in Engineering Physics** (2021-2025)
Delhi Technological University (DTU)
CGPA: 8.53 (Ranked 3rd in branch for 5th semester)

Strong foundation in physics, mathematics, and programming. This unique background gives me a different perspective on problem-solving in tech!`;
    }
    
    if (input.includes('coding') || input.includes('leetcode') || input.includes('problem')) {
      return `I'm a passionate competitive programmer! 📊

• **1000+** problems solved across platforms
• **1550+** rating on LeetCode live contests
• Active on GFG, Codechef, Codeforces
• Strong in Data Structures & Algorithms

I believe consistent practice in DSA is crucial for becoming a better developer!`;
    }
    
    if (input.includes('contact') || input.includes('reach') || input.includes('hire')) {
      return `Let's connect! 🤝

📧 Email: gayatrik22803@gmail.com
📱 Phone: +91 7385130244
💼 LinkedIn: [Connect with me](https://www.linkedin.com/in/gayatri22/)
🔗 GitHub: [Check out my code](https://github.com/gayatrik26)
⚡ Portfolio: You're already here!

I'm always open to discussing new opportunities, collaborations, or just chatting about tech!`;
    }
    
    if (input.includes('resume') || input.includes('cv')) {
      return `📄 Ready to download my resume? It includes detailed information about my experience at KPMG, all my projects, technical skills, and achievements.

[Download Resume] - Click the contact section below to get the latest version!`;
    }
    
    // Default responses for unmatched queries
    const defaultResponses = [
      "That's an interesting question! Could you be more specific? Try asking about my experience, projects, skills, or education.",
      "I'd love to help with that! You can ask me about my AI/ML work, coding projects, or technical background.",
      "Great question! Feel free to ask about my experience at KPMG, my projects, or any specific technologies you're curious about.",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(messageText),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-accent shadow-glow z-50 hover:scale-110 transition-all duration-300"
          size="lg"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] terminal-window z-50 flex flex-col animate-slide-up">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot close"></div>
            <div className="terminal-dot minimize"></div>
            <div className="terminal-dot maximize"></div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-foreground">gayatri@portfolio:~$</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="ml-auto text-muted-foreground hover:text-foreground"
            >
              ✕
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg font-mono text-sm ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground border border-terminal-border'
                  }`}
                >
                  <pre className="whitespace-pre-wrap font-mono text-xs">
                    {message.isUser ? `> ${message.text}` : message.text}
                  </pre>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground p-3 rounded-lg border border-terminal-border">
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-sm">typing</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="p-2 border-t border-terminal-border">
            <div className="flex flex-wrap gap-1 mb-2">
              {suggestedQuestions.slice(0, 3).map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSend(question)}
                  className="text-xs font-mono border-terminal-border hover:bg-muted"
                >
                  {question.slice(0, 25)}...
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-terminal-border">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary font-mono text-sm">$</span>
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="font-mono text-sm pl-8 bg-terminal-bg border-terminal-border focus:border-primary"
                />
              </div>
              <Button onClick={() => handleSend()} size="sm" className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default TerminalChatbot;