import React, { useEffect, useState } from 'react'
import {
  Box,
} from '@mui/material';

export default function NameIntro() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ width: 600, ml: '50%' }}>
      <Box sx={{
        fontFamily: 'Oxygen',
        fontSize: 40,
        fontWeight: 700,
        color: '#784527',
        opacity: 1 - 0.005 * offsetY,
      }}>
        Mikhail Mikhaylov
      </Box>

      <Box m={1} />

      <div style={{
        fontFamily: 'Belleza',
        color: '#62361C',
        fontSize: 20,
        transform: `translateY(${offsetY * -1}px)`,
        opacity: 1 - 0.005 * offsetY,
        background: 'rgba(0, 0, 0, 0)'
      }}>
        Hello! My name is Mikhail Mikhaylov and I am an aspiring politician,
        lawyer, and foreign service officer. I am fond of journalism, economics,
        and politics, and therefore, I push myself to get as involved as possible
        with civic engagement in my community. Allow me to take you on a journey through my career!
      </div>

    </Box>
  );
}