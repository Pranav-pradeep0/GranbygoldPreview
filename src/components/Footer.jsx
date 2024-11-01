import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  const theme = useTheme();

  const socialIconStyle = {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "12px",
    "&:hover": {
      backgroundColor: "rgba(255, 215, 0, 0.1)",
      color: "#FFD700",
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        pt: 6,
        pb: 4,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                marginBlock: "auto",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Granbygold
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 3,
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "300px",
                }}
              >
                Experience luxury amidst nature's grandeur at Kerala's finest
                hilltop retreat.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Contact Us
              </Typography>
              <Button
                startIcon={<Phone size={18} />}
                href="tel:9048052234"
                sx={{
                  color: "white",
                  textTransform: "none",
                  justifyContent: "center",
                  padding: "4px 0",
                }}
              >
                +91 9048052234
              </Button>
              <Button
                startIcon={<MapPin size={18} />}
                href="https://maps.app.goo.gl/bR5Umnt25stSoaB18"
                target="_blank"
                sx={{
                  color: "white",
                  textTransform: "none",
                  justifyContent: "center",
                  padding: "4px 0",
                }}
              >
                View on Maps
              </Button>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: "rgba(255, 255, 255, 0.7)" }}
              >
                Parunthumpara, Peermade,
                <br />
                Manjumala, Kerala 685533
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Connect With Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href="https://instagram.com"
                    target="_blank"
                    sx={socialIconStyle}
                  >
                    <InstagramLogo size={20} />
                  </IconButton>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href="https://facebook.com"
                    target="_blank"
                    sx={socialIconStyle}
                  >
                    <FacebookLogo size={20} />
                  </IconButton>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href={`https://wa.me/919048052234`}
                    target="_blank"
                    sx={socialIconStyle}
                  >
                    <WhatsappLogo size={20} />
                  </IconButton>
                </motion.div>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 6,
              pt: 3,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.5)" }}
            >
              © {new Date().getFullYear()} Granbygold. All rights reserved.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
