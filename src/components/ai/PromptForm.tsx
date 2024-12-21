import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PromptFormProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function PromptForm({ prompt, onPromptChange, onSubmit, isLoading }: PromptFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <Input
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Enter your prompt..."
        className="flex-1"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Send'}
      </Button>
    </form>
  );
}