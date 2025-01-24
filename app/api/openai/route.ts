import { OpenAI } from "openai";

if (!process.env.OPENAI_API_KEY) throw new Error("Missing OpenAI API key");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500,
      temperature: 0.7
    });

    return new Response(JSON.stringify({
      choices: [{
        message: {
          content: completion.choices[0].message.content
        }
      }]
    }));
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ error: "An unknown error occurred" }), { status: 500 });
  }
}