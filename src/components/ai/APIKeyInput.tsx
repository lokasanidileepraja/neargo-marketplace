import { Input } from "@/components/ui/input";

interface APIKeyInputProps {
  apiKey: string;
  onChange: (value: string) => void;
}

export function APIKeyInput({ apiKey, onChange }: APIKeyInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="api-key" className="text-sm font-medium text-gray-700">
        OpenAI API Key
      </label>
      <Input
        id="api-key"
        type="password"
        placeholder="Enter your OpenAI API key"
        value={apiKey}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
      <p className="text-xs text-gray-500">
        Your API key is stored locally and never sent to our servers.
      </p>
    </div>
  );
}