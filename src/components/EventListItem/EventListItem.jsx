import Button from "../UI/Button/Button";
import css from "./EventListItem.module.css";
import { Link } from "react-router-dom";

export default function EventListItem({ title, description, id }) {
  return (
    <li className={css.item}>
      <h4 className={css.title}>{title}</h4>
      <p className={css.description}>{description}</p>
      <div className={css.container}>
        <Link to={`/register/${id}`}>
          <Button>Register</Button>
        </Link>
        <Link to={`events/${id}`}>
          <Button>View</Button>
        </Link>
      </div>
    </li>
  );
}
