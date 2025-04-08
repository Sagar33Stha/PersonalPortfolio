import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  LinearProgress,
  useTheme,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Typewriter from "./Typewriter";

const Header = ({ toggleColorMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const theme = useTheme();
  const navItems = ["About", "Skills", "Projects", "Education", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = (scrollTop / (docHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ backdropFilter: "blur(10px)" }}
    >
      <LinearProgress
        variant="determinate"
        value={scrollProgress}
        sx={{
          height: 4,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          "& .MuiLinearProgress-bar": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      />
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:35}}>
          <Typewriter texts={["Sagar Shrestha"]} />
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item}
              color="inherit"
              onClick={() => scrollToSection(item)}
              sx={{ mx: 1 }}
            >
              {item}
            </Button>
          ))}
          <IconButton onClick={toggleColorMode} color="inherit" sx={{ ml: 2 }}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
