import React, { useRef, useState } from "react";
// @mui

import { Typography, Container, Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// or
import "@splidejs/react-splide/css/core";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
// components
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import LightboxModal from "./LightboxModal";
// ----------------------------------------------------------------------

const IMAGE_MAP = [
  "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1529305068150-201f3ded72c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1568484653093-ed0c410326fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1438962136829-452260720431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80,"
];

// ----------------------------------------------------------------------

export default function GallerySplide() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const ref = useRef();

  const handleOpenLightbox = (itemUrl) => {
    // find index of clicked img
    const selectedImage = IMAGE_MAP.findIndex((index) => itemUrl === index);
    console.log(selectedImage);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };
  return (
    <Box
      id="Our%20Memories"
      sx={{
        pt: "5rem",
        pb: "8rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: { xs: "4rem", md: "7rem" },
            textAlign: "center",
            fontSize: { xs: "2.4rem", md: "3.1rem" },
          }}
        >
          Our Memories
        </Typography>

        <Splide
          ref={ref}
          options={{
            rewind: true,
            perPage: 3,
            perMove: 3,
            gap: "1rem",
            pagination: true,
            arrows: false,
            breakpoints: {
              523: {
                perPage: 1,
                perMove: 1,
                arrows: true,
                pagination: false,
              },
              623: {
                perPage: 2,
                perMove: 1,
                arrows: true,
                pagination: false,
              },
              1040: {
                perPage: 2,
                perMove: 1,
                arrows: false,
                pagination: true,
              },
              1247: {
                perPage: 3,
                perMove: 3,
                arrows: true,
                pagination: true,
              },
            },
          }}
        >
          {IMAGE_MAP?.map((item, index) => {
            return (
              <SplideSlide key={`img-${index}`} className="slide">
                <Box
                  sx={{
                    // backgroundColor: "#F2779A",
                    backgroundColor: "#FDECF1",
                    padding: "0.75rem",
                    borderRadius: "14px",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 333,
                      width: 1,
                      objectFit: "cover",
                      borderRadius: "7px",
                      cursor: "pointer",
                    }}
                    alt="image"
                    src={item}
                    onClick={() => handleOpenLightbox(item)}
                  />
                </Box>
              </SplideSlide>
            );
          })}
        </Splide>
      </Container>

      {openLightbox && (
        <LightboxModal
          images={IMAGE_MAP}
          mainSrc={IMAGE_MAP[selectedImage]}
          photoIndex={selectedImage}
          setPhotoIndex={setSelectedImage}
          isOpen={openLightbox}
          onCloseRequest={() => setOpenLightbox(false)}
        />
      )}
    </Box>
  );
}
