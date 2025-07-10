import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY, // Required: your OpenRouter API key
  baseURL: "https://openrouter.ai/api/v1" // Required: so it doesn't hit OpenAI directly
});

const askAI = async (question) => {
  try {
    const response = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "user",
          content: question
        }
      ]
    });

    let data= response.choices[0].message.content;
    return data;
  } catch (error) {
    console.error("OpenRouter error:", error);
    return `Error: ${error.message}`;
  }
};

export default askAI;
