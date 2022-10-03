import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export const Header = () => {
  return (
    <Box sx={{ minHeight: `calc(100vh - 5rem)`, position: "relative" }}>
      <Container maxWidth="lg" sx={{
        position: "absolute", top: "50%",
        left: "50%", transform: `translate(${-50}%, ${-50}%)`,
        textAlign:"center"
      }}>
        <Typography variant='h1' sx={{mb:"5rem"}}>Ewelina & Lukasz</Typography>
        <Typography sx={{maxWidth:"35em", margin:"0 auto"}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem
          possimus magni labore accusamus hic inventore provident, beatae iure
          ducimus?
        </Typography>
        <Button sx={{mt:"5rem",fontSize:"1.5rem"}} variant="contained" >Confirm attendance</Button>
      </Container>
    </Box>
  )
}
