import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Leaf } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const suggestedQuestions = [
  "What herbs help with stress relief?",
  "How can I improve my digestion naturally?",
  "Best remedies for better sleep?",
  "What is Triphala used for?",
];

export function AyurChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Namaste! 🙏 I'm your Ayurvedic wellness assistant. I can help you learn about traditional remedies, medicinal plants, and holistic health practices. How may I guide you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response with typing indicator
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("stress") || lowerQuery.includes("anxiety")) {
      return "For stress relief, Ayurveda recommends herbs like Ashwagandha and Brahmi. Ashwagandha helps reduce cortisol levels and promotes calmness, while Brahmi enhances mental clarity. You can also practice Pranayama (breathing exercises) and meditation. Would you like specific preparation methods?";
    } else if (lowerQuery.includes("sleep") || lowerQuery.includes("insomnia")) {
      return "To improve sleep quality, try Ashwagandha milk before bed - mix ½ teaspoon of Ashwagandha powder in warm milk with a pinch of nutmeg. Also consider establishing a regular sleep routine, avoiding screens before bed, and practicing calming yoga poses like Viparita Karani (legs up the wall).";
    } else if (lowerQuery.includes("digestion") || lowerQuery.includes("stomach")) {
      return "For digestive health, Ayurveda recommends Triphala, a blend of three fruits that gently cleanses and supports gut health. Ginger tea is excellent for improving digestion and reducing bloating. Also, try eating mindfully, having your largest meal at midday, and avoiding cold drinks with meals.";
    } else if (lowerQuery.includes("triphala")) {
      return "Triphala is a revered Ayurvedic formula combining Amalaki (Amla), Bibhitaki, and Haritaki. It supports digestive health, detoxification, and regularity. Take ½ to 1 teaspoon with warm water before bed or upon waking. It's gentle yet effective for long-term wellness.";
    } else if (lowerQuery.includes("immunity") || lowerQuery.includes("immune")) {
      return "To boost immunity, incorporate Tulsi (Holy Basil), Amla, and Turmeric into your daily routine. Try starting your day with Tulsi tea and Golden Milk (turmeric milk) before bed. These powerful herbs enhance your body's natural defense mechanisms. Also maintain good sleep, manage stress, and eat seasonal foods.";
    } else {
      return "That's a great question about Ayurvedic wellness. In a fully developed system, I would provide detailed, personalized recommendations based on your constitution (Prakriti) and current state (Vikriti). For now, I recommend consulting our Medicinal Dictionary for specific herb information, or ask me about common concerns like stress, sleep, digestion, or immunity.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", { 
      hour: "numeric", 
      minute: "2-digit",
      hour12: true 
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-3xl text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
              Ayur Chatbot
            </h2>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Online and ready to assist
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Container */}
        <div className="lg:col-span-2">
          <div 
            className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden flex flex-col"
            style={{ height: "650px" }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 px-6 py-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Ayurvedic Assistant</h3>
                  <p className="text-xs text-primary-foreground/80">Powered by ancient wisdom</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-background to-muted/20">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  } animate-in fade-in slide-in-from-bottom-2 duration-300`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                      message.sender === "bot"
                        ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                        : "bg-gradient-to-br from-accent to-secondary text-accent-foreground"
                    }`}
                  >
                    {message.sender === "bot" ? (
                      <Leaf className="w-5 h-5" />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </div>

                  <div className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"} max-w-[75%]`}>
                    {/* Message Bubble */}
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-sm ${
                        message.sender === "bot"
                          ? "bg-white border border-border text-foreground rounded-tl-none"
                          : "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-tr-none"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    
                    {/* Timestamp */}
                    <span className="text-xs text-muted-foreground mt-1 px-1">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div className="bg-white border border-border rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border bg-card p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Ayurvedic remedies, herbs, wellness..."
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="px-5 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Quick Actions & Info */}
        <div className="space-y-6">
          {/* Suggested Questions */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 
              className="text-lg mb-4 text-foreground flex items-center gap-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
              Quick Questions
            </h3>
            <div className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(question)}
                  className="w-full text-left px-4 py-3 bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 rounded-xl transition-all text-sm text-foreground"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-6">
            <h3 
              className="text-lg mb-4 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What I Can Help With
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-foreground">Herbal remedy recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-foreground">Dosha-based wellness guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-foreground">Lifestyle and dietary tips</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-foreground">Traditional preparation methods</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-foreground">Common health concern solutions</span>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong className="block mb-1">Important Notice</strong>
              This chatbot provides educational information only. Always consult qualified healthcare practitioners before starting any treatment or making health decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
