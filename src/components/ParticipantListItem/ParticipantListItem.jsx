import css from "./ParticipantListItem.module.css";

export default function EventListItem({ name, email }) {
  return (
    <li className={css.item}>
      <h4 className={css.name}>{name}</h4>
      <p className={css.email}>{email}</p>
    </li>
  );
}
