import React from 'react'
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

function SideNavigatorItem() {
  return (
    <Box sx={{ mt: 1, height: 80, bgcolor: '#DCC0AA', borderRadius: 5 }} />
  );
};

const exp = require('../Experiences.json');

function HomePage() {
  return (
    <Box>
      <NameIntro />

      <Box className="scroll-container" sx={{ height: '100vh' }}>
        {/* <img src={require('../MishaPortrait.png')} style={{ position: 'absolute', height: '100vh', top: 0 }}/> */}

        {exp.map((item, id) => {
          return (
            <ExperienceItem
              title={item.title}
              role={item.role}
              description={item.description}
              id={id}
              key={id}
            />
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
        <Box sx={{ height: 20, bgcolor: '#DCC0AA', borderRadius: 5 }} />
        {exp.map((item, id) => <SideNavigatorItem key={id} />)}
      </Box>
    </Box>
  )
}

export default HomePage;