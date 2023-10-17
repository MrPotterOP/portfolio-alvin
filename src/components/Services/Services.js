import React,{useState} from 'react';
import { motion } from 'framer-motion';


import "./services.css";

const Services = () => {

  const [popupPosition, setPopupPosition] = useState(null);


  const mouseOver = (e, src)=>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setPopupPosition({ x: mouseX, y: mouseY, src });
  }

  const mouseExit = ()=>{
    setPopupPosition(null)
  }
  


  return (
    <section id='services'>
        <motion.h2
            initial={{ opacity: 0, y: 100 }} 
            whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
            viewport={{ once: true }}
        >I am good at</motion.h2>

        <div className='services-container'> 
            <motion.div
              onMouseMove={e => {mouseOver(e, "/images/hov1.gif")}}
              onHoverEnd={e => {mouseExit()}}

             className='service'>
                <img alt='icon' src='/images/icon1.png'></img>
                <motion.p
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                  viewport={{ once: true }}
                 className='p1'>Proficient in industry-standard <span 
                 >video production</span>, post-production, and editing software, including <span>Adobe Premiere Pro</span>, <span>Final Cut Pro</span>, and <span>After Effects</span>.</motion.p>
            </motion.div>
            <hr/>

            <motion.div
              onMouseMove={e => {mouseOver(e, "/images/gif2.gif")}}
              onHoverEnd={e => {mouseExit()}}
             className='service'>
                <img alt='icon' src='/images/icon2.png'></img>
                <motion.p
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                  viewport={{ once: true }}
                 className='p1'>Demonstrated track record of transforming raw footage into visually captivating and polished videos, showcasing <span>strong storytelling skills</span> and meticulous attention to detail.</motion.p>
            </motion.div>

            <hr/>

            <motion.div 
            onMouseMove={e => {mouseOver(e, "/images/hov3.gif")}}
              onHoverEnd={e => {mouseExit()}}
            className='service'>
                <img alt='icon' src='/images/icon3.png'></img>
                <motion.p
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                  viewport={{ once: true }}
                 className='p1'>Skilled in <span>color correction</span>, <span>sound editing</span>, and the integration of visual effects to enhance video quality and impact.</motion.p>
            </motion.div>

            <hr/>

            <motion.div 
            onMouseMove={e => {mouseOver(e, "/images/hov4.gif")}}
              onHoverEnd={e => {mouseExit()}}
            className='service'>
                <img alt='icon' src='/images/icon4.png'></img>
                <motion.p
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={ {opacity: 1, y: 0, transition: { duration: 1 }}}
                  viewport={{ once: true }}
                 className='p1'>Proven ability to thrive in collaborative team environments, meeting demanding deadlines while consistently <span>delivering high-quality video content</span>.</motion.p>
            </motion.div>

        </div>

        {popupPosition && (
        <motion.img
          src={popupPosition.src} // Update with your popup image path
          className='popup-image'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{
            width: '230px',
            position: 'fixed',
            cursor: 'pointer',
            top: popupPosition.y - 200, // Adjust positioning as needed
            left: popupPosition.x - 300, // Adjust positioning as needed
          }}
        />
      )}
    </section>  
  );
};

export default Services;
