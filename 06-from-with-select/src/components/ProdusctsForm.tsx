import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import { productShema, type Product } from "../schemas/productShema";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: (product: Product) => void;
};

function ProdusctsForm({ onSubmit }: Props) {
  const methos = useForm<Product>({
    resolver: zodResolver(productShema),
  });
  return (
    <FormProvider {...methos}>
      <form onSubmit={methos.handleSubmit(onSubmit)}>
        <Input name="product">Product</Input>
        <Input name="contry">Contry</Input>
        <div>
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select mb-5"
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
          </select>
        </div>

        <Button>Enviar</Button>
      </form>
    </FormProvider>
  );
}

export default ProdusctsForm;
