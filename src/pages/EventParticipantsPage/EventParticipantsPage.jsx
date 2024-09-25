import css from "./EventParticipantsPage.module.css";
import Title from "../../components/UI/Title/Title";
import ParticipantsList from "../../components/ParticipantList/ParticipantList";

export default function EventParticipantsPage() {
  return (
    <div className={css.container}>
      <Title>Participants Page</Title>
      <ParticipantsList />
    </div>
  );
}
