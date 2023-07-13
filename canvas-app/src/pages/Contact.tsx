import { useMultiLevel } from "../hooks/useMultiLevel";
import { CustomerDetails } from "../components/customerDetails";
import { CustomerMessage } from "../components/customerMessage";
import { FormEvent } from "react";
export const Contact = () => {
  const { levels, currentLevelTracker, level, back, next } = useMultiLevel([
    <CustomerDetails />,
    <CustomerMessage />,
  ]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    next();
  }

  return (
    <main>
      <h1>Contact</h1>
      <section
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentLevelTracker + 1} / {levels.length}
          </div>
          {level}
          <div>
            {currentLevelTracker !== 0 && (
              <button type="button" onClick={back}>
                back
              </button>
            )}
            <button type="submit">
              {currentLevelTracker === levels.length - 1 ? "finish" : "next"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
