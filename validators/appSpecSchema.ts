import { z } from "zod";

export const ComponentSchema = z.object({
  type: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
});

export const PageSchema = z.object({
  name: z.string(),
  route: z.string(),
  components: z.array(ComponentSchema),
});

export const AppSpecSchema = z.object({
  title: z.string(),
  description: z.string(),
  pages: z.array(PageSchema),
});

export type AppSpec = z.infer<typeof AppSpecSchema>;