import { useState } from "react";
import ContactList from "./ContactList";
import FormContact from "./FormContact";
import type { contactForm, contactWithId } from "../schemas/ContactSchema";

type Props = {};

function Cms({}: Props) {
  const [contacts, setContacts] = useState<contactForm[]>([]);

  const addContact = (contact: contactForm) => {
    const newContact: contactWithId = {
      ...contact,
      id: Math.random().toString(),
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id: string) => {
    setContacts(contacts.filter((c) => c.id != id));
  };
  console.log(contacts);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <FormContact onFormSubmit={addContact} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactList constacts={contacts} onClick={deleteContact} />
        </div>
      </div>
    </div>
  );
}

export default Cms;
