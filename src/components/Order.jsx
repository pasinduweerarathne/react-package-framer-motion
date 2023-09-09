import React, { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      // delay: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.div variants={childVariants}>
        <p>You ordered a {pizza.base} pizza with:</p>
      </motion.div>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
