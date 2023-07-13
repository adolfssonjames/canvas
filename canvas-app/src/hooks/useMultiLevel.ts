import { ReactElement, useState } from "react";

export function useMultiLevel(levels: ReactElement[]) {
  const [currentLevelTracker, setCurrentLevelTracker] = useState(0);

  function next() {
    setCurrentLevelTracker((index) => {
      if (index >= levels.length - 1) return index;
      return index + 1;
    });
  }

  function back() {
    setCurrentLevelTracker((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }

  function goTo(index: number) {
    setCurrentLevelTracker(index);
  }

  return {
    currentLevelTracker,
    level: levels[currentLevelTracker],
    levels,
    next,
    back,
    goTo,
  };
}
