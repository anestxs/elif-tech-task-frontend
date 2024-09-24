import Button from "../UI/Button/Button";
import css from "./EventListItem.module.css";

export default function EventListItem({ title, description }) {
  return (
    <li className={css.item}>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className={css.container}>
        <Button>Register</Button>
        <Button>View</Button>
      </div>
    </li>
  );
}
