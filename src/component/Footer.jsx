import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5">Portfolio</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <IconButton
          href="https://www.linkedin.com/in/sagar-shrestha-003525358/"
          target="_blank"
          aria-label="LinkedIn"
          size="large"
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          href="https://github.com/Sagar33Stha"
          target="_blank"
          aria-label="GitHub"
          size="large"
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          href="mailto:sagar97stha@gmail.com"
          aria-label="Email"
          size="large"
        >
          <EmailIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} — Built with React and Material-UI
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 1 }}
      >
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        |
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
