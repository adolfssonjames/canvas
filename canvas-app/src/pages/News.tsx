import { useEffect } from "react";

export const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="pt-24">
      <h2 className="text-3xl">Nyheter</h2>
      <div>lägg in instagram content här!</div>
    </main>
  );
};
