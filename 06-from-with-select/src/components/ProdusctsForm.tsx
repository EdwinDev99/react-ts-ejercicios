import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import {
  productShema,
  productTypeOptions,
  type Product,
} from "../schemas/productShema";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

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

        <Select
          name="category"
          defaultMessage="--Selecciona tipo--"
          options={productTypeOptions}
          label="Category"
        />
        <Button type="submit">Enviar</Button>
        <Button type="button" onClick={() => methos.reset()}>
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
}

export default ProdusctsForm;
