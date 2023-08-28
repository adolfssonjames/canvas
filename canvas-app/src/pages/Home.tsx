import { Banner } from "../components/Banner";
import { ContentCards } from "../components/ContentCards";

export const Home = () => {
  const cardData = [
    { imgSrc: "image1.jpg", imgAlt: "hej", text: "Card 1" },
    { imgSrc: "image2.jpg", imgAlt: "hej", text: "Card 2" },
    { imgSrc: "image3.jpg", imgAlt: "hej", text: "Card 3" },
    { imgSrc: "image4.jpg", imgAlt: "hej", text: "Card 4" },
  ];

  return (
    <main className="pt-24 flex items-center justify-center flex-col">
      <h2 className="text-3xl">Hem</h2>
      <div>
        <a href="/contact#section2">Gå till Bokning</a>
      </div>
      <Banner />
      <div className="border-b-2 border-slate-100 w-1/2 m-5"></div>
      more components goes here
      <ContentCards cardData={cardData} />
    </main>
  );
};
