import css from "./App.module.css";
import Title from "../UI/Title/Title.jsx";
import EventList from "../EventList/EventList.jsx";

export default function App() {
  return (
    <div className={css.container}>
      <Title>Events</Title>
      <EventList />
    </div>
  );
}
