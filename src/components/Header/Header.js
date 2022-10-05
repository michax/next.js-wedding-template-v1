import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export const Header = () => {
  return (
    <Box sx={{
      height: '100vh', 
      display: "flex",
      justifyContent: "center",
      alignItems: 'center'
    }}>
      <Container maxWidth="lg" sx={{

        textAlign: "center"
      }}>
        <Typography variant='h1' sx={{ mb: "5rem" }}>Ewelina & Lukasz</Typography>
        <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem
          possimus magni labore accusamus hic inventore provident, beatae iure
          ducimus?
        </Typography>
        <Button sx={{ mt: "5rem", fontSize: "1.5rem", backgroundColor: "#F2779A" }} variant="contained" >Confirm attendance</Button>
      </Container>
    </Box>
  )
}
