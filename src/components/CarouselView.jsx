import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Container,
  styled,
  Fade,
  Slide,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";

const CarouselButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const CarouselDot = styled(Box)(({ active }) => ({
  width: active ? 24 : 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: active ? "#fff" : "rgba(255, 255, 255, 0.5)",
  cursor: "pointer",
  transition: "all 0.3s ease",
}));

const TypewriterText = ({ text, delay = 50 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const CarouselView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("right");
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        bgcolor: "black",
      }}
    >
      <Slide direction={slideDirection} in={!isAnimating} timeout={800}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.8s ease-in-out",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              textShadow: "1px 1px 18px rgba(0,0,0,0.58)",
              background: `
                linear-gradient(
                  180deg,
                  rgba(0,0,0,0.1) 0%,
                  rgba(0,0,0,0.1) 50%,
                  rgba(0,0,0,0.1) 100%
                ),
                linear-gradient(
                  90deg,
                  rgba(0,0,0,0.6) 0%,
                  rgba(0,0,0,0.2) 50%,
                  rgba(0,0,0,0.6) 100%
                )
              `,
              zIndex: 1,
            }}
          />
        </Box>
      </Slide>

      <Box
        sx={{
          position: "absolute",
          top: { xs: 180, md: 150 },
          left: { xs: 20, md: 60 },
          zIndex: 2,
        }}
      >
        <Fade in timeout={1000}>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 500,
              lineHeight: 1.2,
              marginBottom: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            <TypewriterText text="Where luxury meets wilderness" />
          </Typography>
        </Fade>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 280, md: 120 },
          right: { xs: 20, md: 60 },
          zIndex: 2,
          maxWidth: "500px",
          marginLeft: { xs: "25px", md: 0 },
          textAlign: { xs: "left", md: "right" },
        }}
      >
        <Fade in timeout={1500}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 400,
                marginBottom: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Exquisite eco-friendly jungle getaway in the heart of Idukki
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontFamily: "Source Sans Pro, sans-serif",
                fontSize: { xs: "1rem", md: "1.25rem" },
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              dwell in perfect harmony with nature, pristine and waiting to be
              explored
            </Typography>
          </Box>
        </Fade>
      </Box>

      <CarouselButton
        onClick={prevSlide}
        sx={{ left: { xs: 8, md: 16 } }}
        disabled={isAnimating}
      >
        <ChevronLeft />
      </CarouselButton>

      <CarouselButton
        onClick={nextSlide}
        sx={{ right: { xs: 8, md: 16 } }}
        disabled={isAnimating}
      >
        <ChevronRight />
      </CarouselButton>

      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          gap: 1,
        }}
      >
        {images.map((_, idx) => (
          <CarouselDot
            key={idx}
            active={idx === currentIndex}
            onClick={() => {
              if (!isAnimating) {
                setSlideDirection(idx > currentIndex ? "left" : "right");
                setCurrentIndex(idx);
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselView;
