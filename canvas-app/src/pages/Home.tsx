import { Banner } from "../components/Banner";
import { ContentCards } from "../components/ContentCards";

export const Home = () => {
  const cardData = [
    { imgSrc: "images/testname4.jpg", imgAlt: "hej", text: "Nyheter" },
    { imgSrc: "images/testname3.jpg", imgAlt: "hej", text: "Tjejkväll" },
    {
      imgSrc: "images/testname1.jpg",
      imgAlt: "hej",
      text: "Personal Shopping",
    },
    { imgSrc: "images/testname2.jpg", imgAlt: "hej", text: "Clothes" },
  ];

  return (
    <main className="pt-24 flex items-center justify-center flex-col">
 dev/homepage-design
      <div>test</div>

        <a href="/contact#section2">Gå till Bokning</a>
      </div>
      <Banner />
      <div className="border-b-2 border-slate-100 w-full m-5"></div>
      more components goes here
      <ContentCards cardData={cardData} />
    </main>
  );
};
