import { useState } from "react";
import { facilitiesContent } from "..";
import { motion } from "framer-motion";

const FacilitiesContent = () => {
  const [cards, setCards] = useState(facilitiesContent);

  return (
    <div className="facilities-content">
      <div className="facilities-cards">
        {cards?.map((card, key) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              key={key + 1}
              className="facilities-card"
            >
              <img loading="lazy" src={card?.imgSrc} alt="library-img" />
              <div className="card-content">
                <h3>{card?.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quo soluta dolorum?
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FacilitiesContent;
