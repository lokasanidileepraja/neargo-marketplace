import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { createOpenAIClient, generateResponse } from '@/utils/openai';
import { APIKeyInput } from './ai/APIKeyInput';
import { PromptForm } from './ai/PromptForm';
import { ResponseDisplay } from './ai/ResponseDisplay';

const API_KEY_STORAGE_KEY = 'openai-api-key';

export default function AIChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Load API key from localStorage on component mount
    const savedApiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);
    localStorage.setItem(API_KEY_STORAGE_KEY, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const openai = createOpenAIClient(apiKey);
      const result = await generateResponse(openai, prompt);
      setResponse(result || 'No response generated');
      setPrompt(''); // Clear prompt after successful response
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate response",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <APIKeyInput 
        apiKey={apiKey} 
        onChange={handleApiKeyChange}
      />
      <PromptForm
        prompt={prompt}
        onPromptChange={setPrompt}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <ResponseDisplay response={response} />
    </div>
  );
}