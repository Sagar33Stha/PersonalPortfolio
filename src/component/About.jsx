import React from "react";
import { Box, Typography, Avatar, Paper, useTheme, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TechSphere from "./TechSphere";
import AnimatedPage from "./AnimatedPages";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4, 0),
  borderRadius: theme.shape.borderRadius * 2,
  backdropFilter: "blur(10px)",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.7)"
      : "rgba(255, 255, 255, 0.7)",
}));

const About = () => {
  const theme = useTheme();

  return (
    <AnimatedPage>
      <Box
        id="about"
        sx={{
          py: 12,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 1 }}>
          About Me
        </Typography>
        <Box
          sx={{
            width: "100px",
            height: "2px",
            bgcolor: "red",
            mx: "auto",
            mt: 0,
            mb: 4,
            borderRadius: 1,
          }}
        />

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TechSphere />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                Hi, I'm Sagar Shrestha
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ mb: 2, fontSize: 22 }}
              >
                I’m a dedicated and hardworking B.Sc.CSIT student with a strong
                foundation in computer science and information technology.
                Currently in the final phase of my degree, I’m gaining hands-on
                experience through my internship focused on React.js
                development. I'm passionate about building modern web
                applications, continuously learning new technologies, and
                contributing to innovative projects that make an impact.
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </AnimatedPage>
  );
};

export default About;
