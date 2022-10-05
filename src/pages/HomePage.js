import React, { useEffect, useState, useRef } from 'react'
import {
  Box
} from '@mui/material';

import './HomePageStyles.css';
import NameIntro from '../components/NameIntro';
import ExperienceItem from '../components/ExperienceItem';

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Item({ id }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <div className="scroll-area">
//       <div ref={ref}>
//         <Box sx={{ height: 500, width: 300, bgcolor: 'green' }} />
//       </div>
//       <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
//     </div>
//   );
// }

function SideNavigatorItem({ selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className="fadeColor"
      style={{
        marginTop: 10,
        height: (selected ? 100 : 40),
        backgroundColor: (selected ? '#AD8668' : '#DCC0AA'),
        borderRadius: 50,
        cursor: 'pointer',
      }}
    />
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const exp = require('../Experiences.json');

function HomePage() {
  const refs = useRef(new Array(exp.length + 1));
  const [offsetY, setOffsetY] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // Make page scroll back to top on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentIndex = () => Math.round(offsetY / windowDimensions.height);

  return (
    <Box>
      <div className="scroll-area" style={{ height: '100vh' }} ref={(element) => { refs.current[0] = element }}>
        <NameIntro />
      </div>

      <Box className="scroll-container" sx={{ height: '100vh' }}>
        {/* <img src={require('../MishaPortrait.png')} style={{ position: 'absolute', height: '100vh', top: 0 }}/> */}

        {exp.map((item, id) => {
          return (
            <div
              className="scroll-area"
              style={{ width: '70%', margin: '0 auto' }}
              ref={(element) => { refs.current[id + 1] = element }}
              key={id}
            >
              <ExperienceItem
                title={item.title}
                role={item.role}
                description={item.description}
                id={id}
              />
            </div>
          )
        })}

        {/* <Item id={2} />
        <Item id={3} /> */}
      </Box>

      <Box sx={{
        width: 20,
        transform: 'translateY(-50%)',
        position: 'fixed',
        top: '50%',
        left: '20px'
      }}>
        <Box
          className="fadeColor"
          onClick={() => refs.current[0].scrollIntoView({ behavior: 'smooth' })}
          sx={{
            height: 20,
            backgroundColor: (currentIndex() === 0 ? '#AD8668' : '#DCC0AA'),
            borderRadius: 5,
            cursor: 'pointer',
          }}
        />
        {exp.map((item, id) => {
          return (
            <SideNavigatorItem
              key={id}
              selected={currentIndex() - 1 === id}
              onClick={() => refs.current[id + 1].scrollIntoView({ behavior: 'smooth' })}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default HomePage;