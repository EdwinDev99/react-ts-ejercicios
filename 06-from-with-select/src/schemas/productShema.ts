import { z } from "zod";

export const productTypeOptions = [
  "Familiar",
  "Trabajo",
  "Amigo",
  "Otro",
] as const; // colocamos as const para que sea read only es un pcoco contradictorio pero asi es para que ts sepa que no se puede mutasr con push slice etc

export const productShema = z.object({
  product: z
    .string()
    .min(1, { message: "Campo requerido" })
    .min(3, { message: "mas de tres carateres" }),
  contry: z
    .string()
    .min(1, { message: "Campo requerido" })
    .min(3, { message: "mas de tres carateres" }),
  category: z.enum(productTypeOptions),
});

export type Product = z.infer<typeof productShema> & { id: string };
