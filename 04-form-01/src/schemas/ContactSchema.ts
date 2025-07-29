import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Campo requerido" })
    .min(3, { message: "campo minimo de longitud 3" }),
  lastname: z
    .string()
    .min(1, { message: "Campo requerido" })
    .min(3, { message: "campo minimo de longitud 3" }),
  email: z
    .string()
    .min(1, { message: "El email es requerido" })
    .email({ message: "Formato de email inválido" }),
});

export type contactForm = z.infer<typeof contactSchema>;
