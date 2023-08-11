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
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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
        minHeight: "35rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.primary.gradient,
        px: "3rem",
        py: "6rem",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant={isSmallScreen ? "h4" : "h3"}
          component="h2"
          color="primary"
        >
          EVENT PHOTOS
        </Typography>
        <Divider sx={{ borderBottomWidth: 2, mt: 1 }} />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          mt={6}
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
  );
}
