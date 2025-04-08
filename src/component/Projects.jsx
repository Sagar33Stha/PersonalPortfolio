import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Link,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import AnimatedPages from "./AnimatedPages";

const projects = [
  {
    title: "E-commerce Platform (June 2024 - July 2024) ",
    description:
      "Led the development of a comprehensive e-commerce platform, including product listings shopping cart, payment gateway integration, and order management.",
    image: "/ecommerce.jpg",
    tags: ["PHP", "WordPress", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Brain Tumor Detection System (Oct 2024 - Nov 2024)",
    description:
      " Developed a machine learning system to detect brain tumors from MRI images, enhancing the accuracy and speed of diagnosis.",
    image: "/ml.jpg",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Numpy", "Pandas", "CNN"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React and Material-UI showcasing projects and skills.",
    image: "/portfolio.jpg",
    tags: ["React", "Material-UI", "Frontend"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "Mobile application for task management with React Native and Firebase backend.",
    image: "/taskapp.jpg",
    tags: ["React Native", "Firebase", "Mobile"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const allTags = [
    "all",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <AnimatedPages>
      <Box
        id="projects"
        sx={{
          py: 12,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 1 }}>
          My Projects
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
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(e, newFilter) => setFilter(newFilter)}
          sx={{
            mb: 6,
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            "& .MuiToggleButton-root": {
              borderRadius: "20px !important",
              border: "1px solid !important",
              borderColor: "divider",
            },
          }}
        >
          {allTags.map((tag) => (
            <ToggleButton
              key={tag}
              value={tag}
              sx={{ textTransform: "capitalize" }}
            >
              {tag}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Grid container spacing={4} sx={{ px: { xs: 2, md: 4 } }}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: "primary.light",
                          color: "primary.contrastText",
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.primary",
                      }}
                    >
                      <GitHubIcon sx={{ mr: 0.5 }} /> Code
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.primary",
                      }}
                    >
                      <LaunchIcon sx={{ mr: 0.5 }} /> Live Demo
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AnimatedPages>
  );
};

export default Projects;
