import { FormEvent } from "react";
import { useMultiLevel } from "../hooks/useMultiLevel";
import { CustomerDetails } from "./customerDetails";
import { CustomerMessage } from "./customerMessage";

export default function ContactForm() {
  const { levels, currentLevelTracker, level, back, next } = useMultiLevel([
    <CustomerDetails />,
    <CustomerMessage />,
  ]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    next();
  }
  return (
    <div>
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
    </div>
  );
}
