import React from 'react'

import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useState } from 'react';

// import beach from "../../../public/beach.jpg";
// import wedding2 from "../../../public/wedding2.jpg";
// import wedding1 from "../../../public/wedding1.jpg";
import { Box, Container } from '@mui/material';
import LightboxModal from './LightboxModal';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';



const IMAGE_MAP = [
  "https://images.unsplash.com/photo-1568849676085-51415703900f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1470897655254-05feb2d2ab97?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb",
  "https://images.unsplash.com/photo-1465281508053-aee07fc08957?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb",
  "https://images.unsplash.com/photo-1650493102762-196d4d2fed97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1568484653093-ed0c410326fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];
export const Gallery = () => {

  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpenLightbox = (url) => {
    const selectedImage = IMAGE_MAP.findIndex((index) => url === index);

    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        <Box sx={{ height: "500px" }}>
          <Box
            sx={{

              display: 'grid',
              gap: 1,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              },
            }}
          >
            <PhotoItem photo={IMAGE_MAP[0]} onOpenLightbox={() => handleOpenLightbox(IMAGE_MAP[0])} />

            <Box
              sx={{
                display: 'grid',
                gap: 1,
                gridTemplateColumns: 'repeat(2, 1fr)',
              }}
            >
              {IMAGE_MAP.slice(1, 5).map((photo) => (
                <PhotoItem key={photo} photo={photo} onOpenLightbox={() => handleOpenLightbox(photo)} />
              ))}
            </Box>
          </Box>
        </Box>

        <>

          {IMAGE_MAP[selectedImage] && (
            <Lightbox
              mainSrc={IMAGE_MAP[selectedImage]}
  
            />
          )}
        </>
      </Container>
    </Box>
  )
}

// ----------------------------------------------------------------------

PhotoItem.propTypes = {
  onOpenLightbox: PropTypes.func,
  photo: PropTypes.string,
};

function PhotoItem({ photo, onOpenLightbox }) {
  return (
    <m.div
      whileHover="hover"
      variants={{
        hover: { opacity: 0.8 },
      }}
      animate={{ x: 100 }}
      transition={{ delay: 1 }}
    >
      <Box
        component='img'
        alt="photo"
        src={photo}
        ratio="1/1"
        onClick={onOpenLightbox}

        sx={{ borderRadius: 2, cursor: 'pointer', width: 1, height: "500px", objectFit: 'cover' }}
      />
    </m.div>
  );
}
