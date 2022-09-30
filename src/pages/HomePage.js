import React from 'react'
import {
  Box,
} from '@mui/material';

import './HomePageStyles.css';

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function NameIntro({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="scroll-area">
      <Box sx={{ width: 600, ml: '50%' }}>
        <Box sx={{
          fontFamily: 'Oxygen',
          fontSize: 40,
          fontWeight: 700,
          color: '#784527'
        }}>
          Mikhail Mikhaylov
        </Box>

        <Box m={1} />

        <motion.div style={{
          fontFamily: 'Belleza',
          color: '#62361C',
          fontSize: 20,
        }}>
          Hello! My name is Mikhail Mikhaylov and I am an aspiring politician,
          lawyer, and foreign service officer. I am fond of journalism, economics,
          and politics, and therefore, I push myself to get as involved as possible
          with civic engagement in my community. Allow me to take you on a journey through my career!
        </motion.div>
      </Box>
    </div>
  );
}

function Item({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="scroll-area">
      <div ref={ref}>
        <Box sx={{ height: 500, width: 300, bgcolor: 'green' }} />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </div>
  );
}

function SideNavigatorItem() {
  return (
    <Box sx={{ mt: 1, height: 80, bgcolor: '#DCC0AA', borderRadius: 5 }} />
  );
};

function HomePage() {
  return (
    <Box className="scroll-container" sx={{ height: '100vh' }}>
      {/* <img src={require('../MishaPortrait.png')} style={{ position: 'absolute', height: '100vh', top: 0 }}/> */}
      {/* <Box pt={30} /> */}

      <NameIntro />
      <Item id={1} />
      <Item id={2} />

      <Box sx={{
        width: 20,
        transform: 'translateY(-50%)',
        position: 'fixed',
        top: '50%',
        left: '20px'
      }}>
        <Box sx={{ height: 20, bgcolor: '#DCC0AA', borderRadius: 5 }} />
        <SideNavigatorItem />
        <SideNavigatorItem />
        <SideNavigatorItem />
      </Box>

    </Box>
  )
}

export default HomePage;