import PropTypes from "prop-types";
import Slider from "react-slick";
import { useRef } from "react";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Typography, Grid, Container, Stack, Rating, Box } from "@mui/material";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// components

// ----------------------------------------------------------------------

const IMAGE_MAP = [
    "https://images.unsplash.com/photo-1568849676085-51415703900f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1470897655254-05feb2d2ab97?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb",
    "https://images.unsplash.com/photo-1465281508053-aee07fc08957?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb",
    "https://images.unsplash.com/photo-1650493102762-196d4d2fed97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1568484653093-ed0c410326fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

// ----------------------------------------------------------------------

GalleryNew.propTypes = {
    testimonials: PropTypes.array.isRequired,
};

export default function GalleryNew() {
    const theme = useTheme();
    const carouselRef = useRef(null);

    const carouselSettings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const handlePrevious = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
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
                maxWidth="xl"
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography variant="h2" sx={{ mb: 5, textAlign: "center" }}>
                    Our Memories
                </Typography>

                <Box sx={{
                    height: "500px",
                
                }}>
                    <Slider
                        sx={{ position: "relative" }}
                        ref={carouselRef}
                        {...carouselSettings}
                    >
                        {IMAGE_MAP.map((img, index) => (
                            <Box key={img.index} sx={{
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
                                    src={img}
                                />
                            </Box>

                        ))}
                    </Slider>
                </Box>


            </Container>
        </Box>
    );
}

// ----------------------------------------------------------------------
