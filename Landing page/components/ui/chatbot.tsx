import { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { Button } from './button';
import { Card } from './card';
import { ScrollArea } from './scroll-area';
import { Input } from './input';
import { generateAyurvedicResponse } from '@/utils/gemini-config';
import { Loader2, Send, X } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

export function AyurvedaChatbot({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'bot',
      content: 'Namaste! I\'m your Ayurvedic assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus input when chat opens
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    try {
      setIsLoading(true);
      console.log('Sending message:', trimmedInput); // Debug log
      
      // Add user message immediately
      const userMessage: ChatMessage = { 
        role: 'user', 
        content: trimmedInput 
      };
      setMessages(prev => [...prev, userMessage]);
      setInput(''); // Clear input right away for better UX

      // Call the Gemini API with user's input
      const response = await generateAyurvedicResponse(trimmedInput);
      console.log('Received response:', response); // Debug log

      if (response) {
        // Add bot response
        setMessages(prev => [...prev, {
          role: 'bot',
          content: response
        }]);
      } else {
        throw new Error('No response from API');
      }

    } catch (error) {
      console.error('Chat Error:', error);
      // Show error message to user
      setMessages(prev => [...prev, {
        role: 'bot',
        content: 'I apologize, but I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <Card className="w-96 h-[600px] p-4 flex flex-col shadow-xl rounded-xl border-2 border-green-100 bg-gradient-to-b from-green-50/50 to-white">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-green-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <h3 className="font-semibold text-lg text-green-800">Ayurveda Assistant</h3>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="hover:bg-red-100 hover:text-red-600 rounded-full h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <ScrollArea 
          className="flex-1 pr-4 overflow-y-auto" 
          ref={scrollAreaRef}
        >
          <div className="space-y-4 pb-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-green-600 text-white rounded-tr-none'
                      : 'bg-green-50 text-green-900 rounded-tl-none border border-green-100'
                  } shadow-sm`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-green-50 p-3 rounded-2xl rounded-tl-none border border-green-100">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex gap-2 mt-4 pt-2 border-t border-green-100">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Ayurveda..."
            disabled={isLoading}
            className="flex-1 rounded-full bg-green-50/50 border-green-200 focus:border-green-300 focus:ring-green-200"
          />
          <Button 
            onClick={handleSend} 
            disabled={isLoading || !input.trim()}
            className="rounded-full px-3 w-10 h-10 bg-green-600 hover:bg-green-700"
            size="icon"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}