import React, { useEffect, useState } from 'react'
import {
  Box, Grid
} from '@mui/material';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function ExperienceItem({title, role, description, id}) {
  const [offsetY, setOffsetY] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
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

  const getRelativeOffset = () => windowDimensions.height * (id+1) - offsetY;
  const getOpacity = () => 1 - 0.002 * Math.abs(getRelativeOffset());

  return (
    <div className="scroll-area" style={{ width: '70%', margin: '0 auto' }}>
      <Grid container spacing={4}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
          <img src={require('../lincoln1.png')} alt="abraham lincoln" style={{ width: 'min(100%, 400px)' }} />

        </Grid>
        <Grid item xs={6}>
          <Box m={5}/>
          <Box sx={{ height: 500}}>
            <Box sx={{
              fontFamily: 'Oxygen',
              fontSize: 20,
              fontWeight: 700,
              color: '#784527',
              opacity: getOpacity(),
            }}>
              {title}
            </Box>
            <Box sx={{
              fontFamily: 'Oxygen',
              fontSize: 20,
              fontWeight: 400,
              color: '#B68364',
              opacity: getOpacity(),
            }}>
              {role}
            </Box>

            <Box m={1} />

            <div style={{
              fontFamily: 'Belleza',
              color: '#62361C',
              fontSize: 20,
              // transform: `translateY(${getRelativeOffset()}px)`,
              opacity: getOpacity(),
              background: 'rgba(0, 0, 0, 0)'
            }}>
              {description}
            </div>
          </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default ExperienceItem