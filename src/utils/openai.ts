import OpenAI from 'openai';

export const createOpenAIClient = (apiKey: string) => {
  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  });
};

export const generateResponse = async (openai: OpenAI, prompt: string) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4o',
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating OpenAI response:', error);
    throw error;
  }
};