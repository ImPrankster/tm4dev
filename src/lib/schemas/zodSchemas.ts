import { z } from "zod";

export const TaskDescriptionSchema = z.object({
  tags: z.string().array().optional(),
  description: z.string().optional(),
});

export type TaskDescription = z.infer<typeof TaskDescriptionSchema>;
