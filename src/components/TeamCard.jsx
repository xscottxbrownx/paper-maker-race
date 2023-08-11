// React Imports
import PropTypes from "prop-types";
// React Router Imports
import { Link as RouterLink } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// Component Imports
import theme from "../theme";

export default function TeamCard({
  cardLink,
  imgSrc,
  imgAlt,
  name,
  blurb,
  buttonLink,
  buttonText,
}) {
  return (
    <Card elevation={24} sx={{ maxWidth: 345 }}>
      <CardActionArea
        component={RouterLink}
        to={cardLink}
        target="_blank"
        rel="noopener"
        underline="none"
      >
        <CardMedia component="img" height="375" image={imgSrc} alt={imgAlt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blurb}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardActions>
          <Button
            component={RouterLink}
            to={buttonLink}
            size="small"
            color="primary"
            target="_blank"
            rel="noopener"
            underline="none"
            className="button-grow"
            elevation={24}
            sx={{
              background: theme.palette.primary.gradient,
              color: "secondary.main",
              mb: 2,
              fontWeight: "bold",
            }}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

TeamCard.propTypes = {
  cardLink: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
