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
      <section>
        {cardData.map((card, index) => (
          <article key={index}>
            <img src={card.imgSrc} alt={card.imgAlt} />
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
