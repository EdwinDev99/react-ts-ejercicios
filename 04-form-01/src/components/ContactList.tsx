import type { contactForm } from "../schemas/ContactSchema";

type Props = {
  constacts: contactForm[];
};

function ContactList({ constacts }: Props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {constacts.map((c) => (
            <tr key={c.name}>
              <th scope="row">{c.name}</th>
              <td>{c.lastname}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
