import css from "./EventList.module.css";
import EventListItem from "../EventListItem/EventListItem.jsx";
import Button from "../UI/Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/events/eventsOps.js";
import {
  selectAllEvents,
  selectAllItems,
  selectError,
  selectIsLoading,
} from "../../redux/events/eventsSelectors.js";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

export default function EventList() {
  const dispatch = useDispatch();
  const events = useSelector(selectAllEvents);
  const { totalPages, currentPage } = useSelector(selectAllItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchEvents(page));
  }, [dispatch, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        if (currentPage < totalPages) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, totalPages]);

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
      {events && (
        <ul className={css.list}>
          {events &&
            events.map((event) => {
              return (
                <EventListItem
                  key={event._id}
                  id={event._id}
                  title={event.title}
                  description={event.description}
                />
              );
            })}
        </ul>
      )}
      {currentPage < totalPages && (
        <Button onClickFunction={() => setPage((prevPage) => prevPage + 1)}>
          Load more events
        </Button>
      )}
      <Toaster />
    </>
  );
}
