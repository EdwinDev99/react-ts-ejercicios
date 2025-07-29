import ContactList from "./ContactList";
import FormContact from "./FormContact";

type Props = {};

function Cms({}: Props) {
  return (
    <div>
      <FormContact />
      <ContactList />
    </div>
  );
}

export default Cms;
