import { z } from "zod";

export const productShema = z.object({
  product: z
    .string()
    .min(1, { message: "Campo requerido" })
    .min(3, { message: "mas de tres carateres" }),
  contry: z
    .string()
    .min(1, { message: "Campo requerido" })
    .min(3, { message: "mas de tres carateres" }),
});

export type Product = z.infer<typeof productShema> & { id: string };
