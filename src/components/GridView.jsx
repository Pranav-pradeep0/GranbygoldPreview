import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  Button,
  Typography,
  Box,
  Container,
  Grid,
  styled,
  keyframes,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/Grid1.jpg";
import image2 from "../assets/Grid2.jpg";
import image3 from "../assets/Grid3.jpg";
import image4 from "../assets/Grid4.jpg";
import image5 from "../assets/Grid5.jpg";
import image6 from "../assets/Grid6.jpg";
import image7 from "../assets/Grid7.jpg";
import image8 from "../assets/Grid8.jpg";
import image9 from "../assets/Grid9.jpg";

// Styled components
const RootContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  backgroundColor: "#131313",
  overflow: "hidden",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const slideAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const BackgroundGrid = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.2,
  display: "flex",
});

const Column = styled(Box)(({ offset = 0 }) => ({
  minWidth: "300px",
  transform: `translateY(${offset}px)`,
  animation: `${slideAnimation} 40s linear infinite`,
  "&:nth-of-type(even)": {
    animation: `${slideAnimation} 35s linear infinite reverse`,
  },
  "&:hover": {
    animationPlayState: "paused",
  },
}));

const ImageContainer = styled(Box)({
  height: "400px",
  borderRadius: "8px",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ContentContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  top: 50,
  zIndex: 10,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 25,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  marginTop: theme.spacing(4),
  borderColor: "white",
  color: "white",
  "&:hover": {
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const GridView = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const generateImages = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      url: images[i % images.length],
    }));
  };

  const columns = [
    generateImages(8),
    generateImages(8),
    generateImages(8),
    generateImages(8),
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <RootContainer>
      {/* Background Image Grid */}
      <BackgroundGrid>
        {columns.map((column, columnIndex) => (
          <Column key={columnIndex} offset={columnIndex * 100}>
            {column.map((image) => (
              <ImageContainer key={image.id}>
                <img src={image.url} alt={`Landscape ${image.id}`} />
              </ImageContainer>
            ))}
            {/* Duplicate images for seamless loop */}
            {column.map((image) => (
              <ImageContainer key={`dup-${image.id}`}>
                <img src={image.url} alt={`Landscape ${image.id}`} />
              </ImageContainer>
            ))}
          </Column>
        ))}
      </BackgroundGrid>

      <ContentContainer maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Box sx={{ color: "white" }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}
              >
                Experience Nature's Bliss
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  marginBottom: 4,
                }}
              >
                Your eco-friendly retreat in Kuttikkanam, Kerala
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  maxWidth: "800px",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: 4,
                }}
              >
                Nestled in the heart of Idukki, Granby Gold Resort offers a
                unique blend of luxury and nature. Located just 23 kilometers
                from Thekkady, our eco-friendly resort provides well-appointed
                cottages designed to complement the surrounding tropical
                rainforest. Whether you're seeking adventure through our jeep
                safaris and trekking expeditions, or relaxation with our spa
                services and yoga sessions, each stay promises an unforgettable
                experience in the Western Ghats.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "white", marginBottom: 2 }}
                >
                  Experience Our Unique Features
                </Typography>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  • Scenic cottages with modern amenities • Guided tours to
                  Parunthumpara viewpoint • 40km open jeep safari adventures •
                  Traditional Kerala cuisine • Yoga and meditation sessions •
                  Local cultural experiences
                </Typography>
              </Box>
            </motion.div>

            {/* <motion.div variants={itemVariants}>
              <StyledButton
                variant="outlined"
                endIcon={<ArrowRight size={16} />}
                href="#explore"
              >
                Explore Our Resort
              </StyledButton>
            </motion.div> */}
          </Box>
        </motion.div>
      </ContentContainer>
    </RootContainer>
  );
};

export default GridView;
