import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <main className="pt-24">
      <h2 className="text-3xl">Hem</h2>
      <div>
        <a href="/contact#section2">Gå till Bokning</a>
      </div>
      <Banner />
      more components goes here
    </main>
  );
};
