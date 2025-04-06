import s from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="search">
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
};
export default SearchBox;
