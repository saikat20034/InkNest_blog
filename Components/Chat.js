// components/OpenRouterChat.js
'use client';

import { useState, useRef, useEffect } from 'react';

export default function OpenRouterChat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hello! I'm your AI assistant powered by DeepSeek through OpenRouter.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Call OpenRouter API
      const response = await fetch(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
              process.env.NEXT_PUBLIC_OPENROUTER_API_KEY ||
              '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'
            }`,
            'HTTP-Referer': window.location.href, // Optional for rankings
            'X-Title': document.title || 'My Next.js Blog', // Optional for rankings
          },
          body: JSON.stringify({
            model: 'deepseek/deepseek-chat-v3-0324:free',
            messages: [...messages, userMessage],
            temperature: 0.7,
            max_tokens: 1024,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
      }

      const data = await response.json();
      if (data.choices?.[0]?.message) {
        setMessages(prev => [...prev, data.choices[0].message]);
      }
    } catch (err) {
      console.error('OpenRouter API error:', err);
      setError(err.message);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl p-4 mx-auto bg-white border rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          AI Chat Assistant
        </h2>
        <span className="px-2 py-1 ml-2 text-xs text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-200">
          Powered by OpenRouter
        </span>
      </div>

      {/* Messages container */}
      <div className="p-2 mb-4 overflow-y-auto rounded h-96 bg-gray-50 dark:bg-gray-700">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 p-3 rounded-lg max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-blue-100 dark:bg-blue-900 ml-auto'
                : 'bg-gray-200 dark:bg-gray-600 mr-auto'
            }`}
          >
            <p className="text-gray-800 dark:text-gray-100">{msg.content}</p>
          </div>
        ))}
        {isLoading && (
          <div className="mr-auto bg-gray-200 dark:bg-gray-600 p-3 rounded-lg max-w-[80%]">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          </div>
        )}
        {error && (
          <div className="p-2 mt-2 text-sm text-red-600 dark:text-red-400">
            Error: {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button
          type="submit"
          className="p-2 text-white bg-purple-500 rounded hover:bg-purple-600 disabled:bg-purple-300 dark:disabled:bg-purple-800"
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? 'Thinking...' : 'Send'}
        </button>
      </form>

      {/* Service notice */}
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        <p>Using DeepSeek Chat v3 (free) via OpenRouter API</p>
        <p>Model: deepseek/deepseek-chat-v3-0324:free</p>
      </div>
    </div>
  );
}
