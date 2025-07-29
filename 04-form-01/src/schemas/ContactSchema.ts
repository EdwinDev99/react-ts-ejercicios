import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Campo requerido")
    .min(3, "campo minimo de longitud 3"),
  lastname: z
    .string()
    .min(1, "Campo requerido")
    .min(3, "campo minimo de longitud 3"),
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Formato de email inválido"),
});

export type contactForm = z.infer<typeof contactSchema>;
export type contactWithId = contactForm & { id: string }; // solo para guardar en Firestore, etc.
