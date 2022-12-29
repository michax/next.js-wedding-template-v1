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
  "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1529305068150-201f3ded72c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1568484653093-ed0c410326fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];
export const Gallery = () => {

  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpenLightbox = (url) => {
    const selectedImage = IMAGE_MAP.findIndex((index) => url === index);

    setOpenLightbox(true);
    setSelectedImage(selectedImage);

    const SliderWrap = styled.div`
    .slick-slider {
        height: 100vh;
        background-color: var(--brand-black);
        .slick-list {
            .slick-track {
                .slick-slider.slide_item {
                    height: 100vh;
                    width: 100vw;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
            }
        }
    }
`
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
