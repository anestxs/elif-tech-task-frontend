import css from "./Button.module.css";

export default function Button({ children, onClickFunction }) {
  return (
    <button onClick={() => onClickFunction()} className={css.btn}>
      {children}
    </button>
  );
}
