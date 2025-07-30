import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Campo obligatorio" })
    .min(3, { message: "Tiene que ser mas de 3 caracteres" }),
  description: z
    .string()
    .min(1, { message: "Campo obliga torio" })
    .min(3, { message: "Tiene que ser mas de 3 caracteres" }),
});

export type Task = z.infer<typeof taskSchema> & { id: string };
