import styles from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.card}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)} className={styles.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
