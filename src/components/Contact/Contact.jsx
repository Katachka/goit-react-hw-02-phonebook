import { FaTrash, FaUserAlt } from 'react-icons/fa';

function Contact({ name, number, onDeleteContact, }) {
  return (
    <>
      <div>
        <span>
          <FaUserAlt />
        </span>
        <p>{name}</p>
      </div>
      <div>
        <p>{number}</p>
              <button
                  type="button"
                  onClick= {onDeleteContact}>
          <FaTrash />
        </button>
      </div>
    </>
  );
}

export default Contact;