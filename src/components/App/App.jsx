import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const EventParticipantsPage = lazy(() =>
  import("../../pages/EventParticipantsPage/EventParticipantsPage.jsx")
);
const EventRegistrationPage = lazy(() =>
  import("../../pages/EventRegistrationPage/EventRegistrationPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  return (
    <div>
      <Suspense
        fallback={
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
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/:eventId" element={<EventParticipantsPage />} />
          <Route
            path="/register/:eventId"
            element={<EventRegistrationPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
