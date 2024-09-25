import css from "./HomePage.module.css";
import Title from "../../components/UI/Title/Title.jsx";
import EventList from "../../components/EventList/EventList.jsx";

export default function HomePage() {
  return (
    <div className={css.container}>
      <Title>Events</Title>
      <EventList />
    </div>
  );
}
