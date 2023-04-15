import Contact from '../Contact/Contact';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact
              name={name}
              number={number}
                    onDeleteContact={() => onDeleteContact(id)}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;