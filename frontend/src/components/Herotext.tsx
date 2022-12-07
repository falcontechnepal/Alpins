import React from "react";
import HeroCarousel from "./HeroCarousel";
import style from "../styles/scss/Hero.module.scss";
import { motion } from "framer-motion";

const Herotext = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className={`${style.heroBody} container`}>
        <div className="row">
          <div className={`${style.leftBody} col-md-6`}>
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className={`${style.heading} h1 w-md-50`}>
              the Most Amazing Mountain to explore
            </motion.h1>
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.05 }}>
              Do not follow where the path may lead. Go instead where there is no path and leave a trail.
            </motion.p>
          </div>
          <div className={`${style.rightBody} col-md-6`}>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", dutaion: 0.5, delay: 0.05 }}
              className={style.stat}>
              <span className="h6">Altitude</span>

              <div className={style.num}>
                <span className="h4 fw-bold">8848</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", dutaion: 0.5, delay: 0.07 }}
              className={style.stat}>
              <span className="h6">Tracks</span>

              <div className={style.num}>
                <span className="h4 fw-bold">27</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", dutaion: 0.5, delay: 0.1 }}
              className={style.stat}>
              <span className="h6">Tourists/year</span>
              <div className={style.num}>
                <span className="h4 fw-bold">+46000</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.05 }}>
              <HeroCarousel />
            </motion.div>
          </div>
        </div>
      </div>

      <div className={style.overlay}></div>
    </div>
  );
};

export default Herotext;
