import { useForm } from "react-hook-form";
import Button from "./Button";
import { contactSchema, type contactForm } from "../../schemas/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onFormSubmit: (contact: contactForm) => void;
};

function FormContact({ onFormSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactForm>({
    resolver: zodResolver(contactSchema),
  });

  // const onSubmit = (data: contactForm) => {
  //   console.log("Formulario enviado:", data);
  // };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          className="form-control"
          id="name"
        />
        {errors?.name?.message && (
          <p className="text-danger">{errors?.name?.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Last Name
        </label>
        <input
          {...register("lastname")}
          type="text"
          className="form-control"
          id="lastname"
        />
        {errors?.lastname?.message && (
          <p className="text-danger">{errors?.lastname?.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className="form-control"
          id="email"
        />
        {errors?.email?.message && (
          <p className="text-danger">{errors?.email?.message}</p>
        )}
      </div>
      <Button>Enviar</Button>
    </form>
  );
}

export default FormContact;
