import { motion } from "framer-motion";
import { useState } from "react";
import { coursesContent } from "..";

const CoursesContent = () => {
  const [cards, setCards] = useState(coursesContent);

  const cardVariant = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.7 },
    },
    hover: { scale: 1.05 },
  };

  return (
    <div className="courses-content">
      <motion.div
        transition={{
          staggerChildren: 0.3,
        }}
        initial={"hidden"}
        whileInView={"visible"}
        className="courses-cards"
      >
        {cards.map((card, index) => {
          return (
            <motion.div
              key={index + 1}
              variants={cardVariant}
              className="courses-card"
            >
              <h3>{card.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                magnam totam dolore explicabo.Sed sint itaque rerum! Numquam
                dolore provident, sed beatae dicta deleniti dolorem
                necessitatibus.
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CoursesContent;
