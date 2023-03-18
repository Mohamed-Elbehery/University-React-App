import { useState } from "react";
import { campusContent } from "..";

const CampusContent = () => {
  const [cards, setCards] = useState(campusContent);

  return (
    <div className="campus-content">
      <div className="campus-cards">
        {cards.map((card, index) => {
          return (
            <div key={index + 1} className="campus-card">
              <img loading="lazy" src={card?.imgSrc} alt="london-img" />
              <div className="card-title">
                <h3>{card?.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampusContent;
