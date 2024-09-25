import css from "./ParticipantList.module.css";
import ParticipantListItem from "../ParticipantListItem/ParticipantListItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchParticipants } from "../../redux/participants/participantsOps.js";
import {
  selectFilteredParticipants,
  selectError,
  selectIsLoading,
} from "../../redux/participants/participantsSelectors.js";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox.jsx";

export default function EventList() {
  const dispatch = useDispatch();
  const participants = useSelector(selectFilteredParticipants);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { eventId } = useParams();

  useEffect(() => {
    if (eventId) {
      dispatch(fetchParticipants(eventId));
    }
  }, [dispatch, eventId]);

  if (error) {
    toast.error("Something went wrong, please try again");
  }

  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="tail-spin-loading"
            radius="1"
          />
        </div>
      )}
      <SearchBox property={"participants"} />
      {error ||
        (participants && (
          <ul className={css.list}>
            {participants &&
              participants.map((participant) => {
                return (
                  <ParticipantListItem
                    key={participant._id}
                    name={participant.name}
                    email={participant.email}
                  />
                );
              })}
          </ul>
        ))}
      <Toaster />
    </>
  );
}
