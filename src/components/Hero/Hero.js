import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import "./hero.css";

const Hero = () => {
  const imgAnimation = useAnimation();
  const textAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
      transition: { duration: 0 }
    });

    textAnimation.start({
        x: - moveX / offsetFactor,
        y: - moveY / offsetFactor,
        transition: { duration: 0 }
    })
  };

  const revealText = () => {
    textAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    });
  };

  useEffect(() => {
    revealText();
  }, []);

  return (
    <section id="hero">
      <Navbar />
      <motion.div
        onMouseMove={(e) => handleMouseMove(e)}
        className="hero-main"
      >
        <div className="background-images">
          <motion.div
            animate={imgAnimation}
            className="image image1"
            style={{ backgroundImage: "url('/images/gif3.gif')" }}
          ></motion.div>
          <motion.div
            animate={imgAnimation}
            className="image image3"
            style={{ backgroundImage: "url('/images/gif2.gif')" }}
          ></motion.div>
        </div>
        <div className="hero-context">
          <motion.h1 initial={{ opacity: 0, y: 100 }} animate={textAnimation}>
            Alvin Lucien
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={textAnimation}
            className="p2"
          >
            Video Editor
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
