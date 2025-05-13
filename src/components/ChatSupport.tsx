
import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  sender: "user" | "support";
  time: string;
}

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Paras Enterprises. How can I assist you today?",
      sender: "support",
      time: "Just now"
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user" as const,
      time: "Just now"
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage("");
    
    // Simulate support response after a delay
    setTimeout(() => {
      const supportMessage = {
        id: messages.length + 2,
        text: "Thank you for your message. One of our luxury furniture specialists will be with you shortly.",
        sender: "support" as const,
        time: "Just now"
      };
      
      setMessages(prev => [...prev, supportMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg transition-all duration-300 transform",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100",
          "bg-gold text-navy hover:bg-gold-light"
        )}
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat window */}
      <div 
        className={cn(
          "fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-xl w-80 sm:w-96 transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
          "flex flex-col overflow-hidden"
        )}
        style={{ height: "400px" }}
      >
        {/* Header */}
        <div className="bg-navy p-4 text-white flex justify-between items-center">
          <div>
            <h3 className="font-serif font-bold">Paras Support</h3>
            <p className="text-xs text-white/70">We typically reply within minutes</p>
          </div>
          <button 
            onClick={toggleChat}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "mb-4 max-w-[80%]",
                message.sender === "user" ? "ml-auto" : ""
              )}
            >
              <div 
                className={cn(
                  "rounded-lg p-3",
                  message.sender === "user" 
                    ? "bg-navy text-white" 
                    : "bg-white text-navy border border-gray-200"
                )}
              >
                {message.text}
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right">{message.time}</p>
            </div>
          ))}
        </div>
        
        {/* Input */}
        <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white">
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-sm focus:outline-none focus:ring-1 focus:ring-navy focus:border-navy"
            />
            <Button 
              type="submit" 
              className="bg-gold hover:bg-gold-light text-navy rounded-r-sm"
            >
              <Send size={18} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatSupport;
