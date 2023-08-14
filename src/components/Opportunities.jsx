// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
// Component Imports
import theme from "../theme";

export default function Opportunities() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="Opportunities"
      sx={{
        width: "100vw",
        px: "3rem",
        py: isSmallScreen ? "3rem" : "4rem",
        textAlign: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Container>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={isSmallScreen ? 5 : 8}
        >
          <Card elevation={24} sx={{ width: isSmallScreen ? 300 : 400 }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "100px",
                  background: theme.palette.primary.gradient,
                  borderRadius: "20px",
                }}
              >
                <VolunteerActivismOutlinedIcon
                  color="secondary"
                  sx={{ fontSize: "48px" }}
                />
              </Box>
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
                variant="body1"
                component="p"
                mt={2}
                textAlign="center"
                color="primary"
              >
                We have opportunities to volunteer during or before race day as
                a Course Marker, as an Obstacle Marshall, in the
                Registration/Check-In Booth, or even as a Photographer.
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                href="mailto:fitnesswithbennies@gmail.com"
                size="large"
                className="button-grow"
                sx={{
                  background: theme.palette.primary.gradient,
                  color: "white",
                  mb: 2,
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
              >
                CONTACT US
              </Button>
            </CardActions>
          </Card>

          <Card elevation={24} sx={{ width: isSmallScreen ? 300 : 400 }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "100px",
                  background: theme.palette.primary.gradient,
                  borderRadius: "20px",
                }}
              >
                <HandshakeOutlinedIcon
                  color="secondary"
                  sx={{ fontSize: "48px" }}
                />
              </Box>
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
                variant="body1"
                component="p"
                mt={2}
                textAlign="center"
                color="primary"
              >
                We have opportunities to sponsor the race as a whole, sponsor an
                obstacle (or multiple), setup a booth in our festival area, or
                even give support for end of race beverages/snacks.
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                href="mailto:fitnesswithbennies@gmail.com"
                size="large"
                className="button-grow"
                sx={{
                  background: theme.palette.primary.gradient,
                  color: "white",
                  mb: 2,
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
              >
                CONTACT US
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
