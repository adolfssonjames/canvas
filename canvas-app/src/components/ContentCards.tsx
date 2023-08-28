interface CardData {
  imgSrc: string;
  imgAlt: string;
  text: string;
}

interface ContentCardsProps {
  cardData: CardData[];
}

export const ContentCards = ({ cardData }: ContentCardsProps) => {
  return (
    <div>
      <section className="flex justify-around flex flex-wrap ">
        {cardData.map((card, index) => (
          <article
            key={index}
            className="w-60 border m-5 flex flex-col rounded-2xl flex justify-around cursor-pointer"
          >
            <img
              src={card.imgSrc}
              alt={card.imgAlt}
              className="rounded-t-2xl bg-slate-500/50"
            />

            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
