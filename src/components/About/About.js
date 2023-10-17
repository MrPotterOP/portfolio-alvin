import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const About = () => {


  return (
    <section id="about">
      <div
        className="about-context"
        style={{ backgroundImage: "url('/images/about.jpg')" }}
      >
        <motion.h2 initial={{ opacity: 0, y: 100 }} 
        whileInView={ {opacity: 1,
      y: 0,
      transition: { duration: 1 }}}
            viewport={{ once: true }}>
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }} 
        whileInView={ {opacity: 1,
      y: 0,
      transition: { duration: 1 }}}
            viewport={{ once: true }}
          className="p2"
        >
          Brief Introduction
        </motion.p>
      </div>
      {/* style={{"background": "url('/images/grain.gif')"} */}
      <div className="about-left" >
        <div className="about-details">
          <motion.h2 initial={{ opacity: 0, y: 100 }} 
                    whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                    viewport={{ once: true }}>
            Intro
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }} 
            whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
            viewport={{ once: true }}
            className="p3"
          >
            I am Alvin Lucien, a seasoned Video Editor with a demonstrable track record of three years within the industry.
            My professional journey has been characterized by a steadfast commitment to producing superlative video content that consistently surpasses client expectations.
          </motion.p>
        </div>

        <div className="about-details">
          <motion.h2 initial={{ opacity: 0, y: 100 }} 
                    whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                    viewport={{ once: true }}>
            I Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }} 
            whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
            viewport={{ once: true }}
            className="p3"
          >
            I maintain a resolute dedication to ongoing skill development and the perpetual assimilation of industry trends. This commitment ensures my ability to make meaningful contributions to a dynamic team and reliably meet stringent project deadlines.
          </motion.p>
        </div>

        <div className="about-details">
          <motion.h2 initial={{ opacity: 0, y: 100 }} 
                    whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                    viewport={{ once: true }}>
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }} 
            whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
            viewport={{ once: true }}
            className="p3"
          >
            Video Editor
            YouTube 2020 Present - 
            I worked with youtuber's like aychristene and other podcasters.
          </motion.p>
        </div>

        <div className="about-details">
          <motion.h2 initial={{ opacity: 0, y: 100 }} 
                    whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                    viewport={{ once: true }}>
            Known For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }} 
            whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
            viewport={{ once: true }}
            className="p3"
          >
            Video Editing Proficiency • High-Quality Content Creation • Software Adaptability • Creative Thinking Attention to Detail • Time Management • Adaptability Skills • Storytelling Ability • Color Correction • Audio Editing • Interpersonal Skills • Team Collaboration • Analytical Acumen • Effective Advocacy • Accurate Documentation
          </motion.p>
        </div>

        <div className="about-details">
          <motion.h2 initial={{ opacity: 0, y: 100 }} 
                    whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                    viewport={{ once: true }}>
            Looking For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }} 
            whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
            viewport={{ once: true }}
            className="p3"
          >
            I look forward to the opportunity to collaborate and elevate your video editing projects to new heights.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
