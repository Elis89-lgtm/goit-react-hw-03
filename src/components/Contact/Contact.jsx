import s from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.card}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)} className={s.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
