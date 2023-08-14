// Swiper Imports
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
// Component Imports
import SLIDES from "../constants/SlideList";
import theme from "../theme";

export default function Team() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isNormalScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const determinePhotosShown = isNormalScreen ? 2 : 3;

  return (
    <Box
      id="Photos"
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        px: "3rem",
        py: isSmallScreen ? "3rem" : "4rem",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100vw" : "95vw",
          background: theme.palette.primary.gradient,
          px: "3rem",
          py: "4rem",
          textAlign: "center",
          borderRadius: isSmallScreen ? null : "20px",
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              spaceBetween={25}
              slidesPerView={isSmallScreen ? 1 : determinePhotosShown}
              navigation
              pagination
              autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
              loop
            >
              {SLIDES.map((slide) => (
                <SwiperSlide key={slide.image}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width="100%"
                    height="300"
                    style={{ objectFit: "cover" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
