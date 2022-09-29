import React from 'react'
import {
  Box,
  Container
} from '@mui/material';

const PAGE_COLOR = '#F6E7DB';

function HomePage() {
  return (
    <Box sx={{ height: '200vh', bgcolor: PAGE_COLOR }}>
      <Box pt={30} />

      <Container sx={{ width: 600, ml: '50%' }}>
        <Box sx={{
          fontFamily: 'Oxygen',
          fontSize: 40,
          fontWeight: 700,
          color: '#784527'
        }}>
          Mikhail Mikhaylov
        </Box>

        <Box m={1} />

        <Box sx={{
          fontFamily: 'Belleza',
          color: '#62361C',
          fontSize: 20,
        }}>
          Hello! My name is Mikhail Mikhaylov and I am an aspiring politician,
          lawyer, and foreign service officer. I am fond of journalism, economics,
          and politics, and therefore, I push myself to get as involved as possible
          with civic engagement in my community. Allow me to take you on a journey through my career!
        </Box>
      </Container>

    </Box>
  )
}

export default HomePage;