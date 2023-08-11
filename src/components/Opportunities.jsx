// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
// Material Image Imports
import Image from "mui-image";
// Component Imports
import theme from "../theme";
import Volunteer from "../assets/Volunteer4.png";
import Sponsor from "../assets/Sponsor1.png";

export default function Opportunities() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="Opportunities"
      sx={{
        minHeight: "35rem",
        width: "100vw",
        px: "3rem",
        py: "4rem",
        textAlign: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Container>
        <Typography
          variant={isSmallScreen ? "h4" : "h3"}
          component="h2"
          color="primary"
        >
          OPPORTUNITIES
        </Typography>
        <Divider sx={{ borderBottomWidth: 2, mt: 1 }} />
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={4}
          mt={6}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Volunteer}
              width={300}
              height={250}
              showLoading
              shift="left"
              sx={{ objectFit: "cover" }}
            />
            <Typography
              variant={isSmallScreen ? "h5" : "h4"}
              component="h3"
              mt={2}
              sx={{
                background: theme.palette.primary.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VOLUNTEER
            </Typography>
            <Typography
              variant="h6"
              component="p"
              mt={2}
              textAlign="center"
              color="primary"
            >
              We have opportunities to volunteer during or before race day as a
              Course Marker, as an Obstacle Marshall, in the
              Registration/Check-In Booth, or even as a Photographer.
              <br />
              <br />
              We are also open to any idea you may have.
              <br />
              <br />
              If you have any interest please, contact us{" "}
              <span
                style={{
                  cursor: "pointer",
                  background: theme.palette.primary.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <a href="mailto:fitnesswithbennies@gmail.com">here</a>
              </span>
              .
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Sponsor}
              width={300}
              height={250}
              showLoading
              shift="left"
              sx={{ objectFit: "cover" }}
            />
            <Typography
              variant={isSmallScreen ? "h5" : "h4"}
              component="h3"
              mt={2}
              sx={{
                background: theme.palette.primary.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SPONSOR
            </Typography>
            <Typography
              variant="h6"
              component="p"
              mt={2}
              textAlign="center"
              color="primary"
            >
              We have opportunities to sponsor the race as a whole, sponsor an
              obstacle (or multiple), setup a booth in our festival area, or
              even give support for end of race beverages/snacks.
              <br />
              <br />
              We are also open to any idea you may have.
              <br />
              <br />
              If you have any interest please, contact us{" "}
              <span
                style={{
                  cursor: "pointer",
                  background: theme.palette.primary.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <a href="mailto:fitnesswithbennies@gmail.com">here</a>
              </span>
              .
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
