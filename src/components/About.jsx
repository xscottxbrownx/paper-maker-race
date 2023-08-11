// React Router Imports
import { Link as RouterLink } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// Material Image Imports
import Image from "mui-image";
// Component Imports
import theme from "../theme";

export default function About() {
  return (
    <Box
      id="About"
      sx={{
        minHeight: "35rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        px: "3rem",
        py: "6rem",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" color="primary">
          WHAT IS PAPER MAKER?
        </Typography>
        <Divider
          sx={{ borderBottomWidth: 2, bgcolor: "secondary.main", mt: 1 }}
        />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          mt={6}
        >
          <Box>
            <Image src="my-image.png" width={500} showLoading shift="left" />
          </Box>
          <Box>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                background: theme.palette.primary.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              12+ EPIC OBSTACLES
            </Typography>
            <Typography
              variant="h5"
              component="p"
              mb={4}
              mt={2}
              color="primary"
            >
              Simply put, Paper Maker is the greatest obstacle course race ever
              concocted. With the most obstacles per mile of any race on the
              planet, you and your friends will have more fun than kids on a
              playground. And the best part? Anyone can participate, from first
              time runners to seasoned athletes.
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              to="/Obstacles"
              size="large"
              startIcon={<VisibilityOutlinedIcon />}
              className="button-grow"
              sx={{
                backgroundColor: "primary",
                color: "secondary",
                fontWeight: "bold",
              }}
            >
              VIEW THE OBSTACLES
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
