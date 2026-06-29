import { prisma } from "@/lib/prisma";
import { groq } from "@/lib/groq";
import { SYSTEM_PROMPT } from "@/prompts/systemPrompt";

export async function generateAppSpec(prompt: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const content = response.choices[0].message.content!;

  const appSpec = JSON.parse(content);

  await prisma.app.create({
    data: {
      title: appSpec.title,
      prompt,
      appSpec,
    },
  });

  return appSpec;
}