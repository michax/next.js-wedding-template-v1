import { useRef } from "react";
// @mui

import { Typography, Container, Box } from "@mui/material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// or
import "@splidejs/react-splide/css/core";
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
// components
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// ----------------------------------------------------------------------

const IMAGE_MAP = [
    "https://images.unsplash.com/photo-1568849676085-51415703900f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1470897655254-05feb2d2ab97?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb",
    "https://images.unsplash.com/photo-1465281508053-aee07fc08957?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb",
    "https://images.unsplash.com/photo-1650493102762-196d4d2fed97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1568484653093-ed0c410326fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1650493102762-196d4d2fed97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1568484653093-ed0c410326fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1650493102762-196d4d2fed97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1568484653093-ed0c410326fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1650493102762-196d4d2fed97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1568484653093-ed0c410326fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

// ----------------------------------------------------------------------



export default function GallerySplide() {

    const ref = useRef();
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // display: { xs: "none", sm: "none", md: "block" },
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography variant="h2" sx={{ mb: 5, textAlign: "center" }}>
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
                    {IMAGE_MAP.map(item => {
                        return (
                            <SplideSlide key={item} className="slide">
                                <Box sx={{
                                    backgroundColor: "#F2779A",
                                    padding: "0.75rem",
                                    borderRadius: '15px',

                                }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 333,
                                            width: 1,
                                            objectFit: "cover",
                                            borderRadius: '15px',
                                        }}
                                        alt="image"
                                        src={item}
                                    />
                                </Box>
                            </SplideSlide>
                        );
                    })}
                </Splide>


            </Container>
        </Box>
    );
}



