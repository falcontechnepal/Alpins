import React from "react";
import { Background, Parallax } from "react-parallax";
import style from "../styles/scss/Pagehero.module.scss";
import { motion } from "framer-motion";

const initial = {
  hidden: {
    opacity: 0,
    x: -200,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    x: -200,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
  },
};

const Pagehero = ({ title }) => {
  const img =
    "https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  return (
    <div className={`${style.hero}`}>
      <Parallax bgImage={img} strength={-200}>
        <div className="container">
          <motion.div
            className={`${style.text} container`}
            variants={initial}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={`${style.heading} h1`} variants={item}>
              {title}
            </motion.div>
            <motion.p variants={item}>
              THE HARDER WILL YOU FALL THE HEAVIER WILL YOUR HEART
            </motion.p>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default Pagehero;
