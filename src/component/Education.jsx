import React from "react";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineSeparator,
//   TimelineDot,
//   TimelineContent,
// } from "@mui/material";
import TimelineConnector from "@mui/lab/TimelineConnector";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AnimatedPages from "./AnimatedPages";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Chip, Paper, Typography, useTheme } from "@mui/material";

const education = [
  {
    type: "education",
    degree:
      " Bachelor of Science in Computer Science and Information Technology",
    institution: "Nagarjuna College of IT (Tribhuvan University)",
    location: "Sankhamul, Lalitpur",
    year: "2021 - 2025",
    // description: "Specialization in Artificial Intelligence. GPA: 3.8/4.0",
  },
  {
    type: "education",
    degree: "Higher Secondary Education",
    institution: " National Academy of Science and Technology",
    year: "2017 - 2020",
    location: "Dhangadhi, Kailali",
    // description: "Major in Computer Science.",
  },
  {
    type: "education",
    degree: "Secondary Education Examination",
    institution: "Wisdom Academy",
    year: "2011 - 2017",
    location: "Belauri, Kanchanpur ",
    // description: "Major in Opt. Maths.",
  },
];

const Education = () => {
  const theme = useTheme();

  return (
    <AnimatedPages>
      <Box
        id="education"
        sx={{
          py: 12,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "background.default",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 1 }}>
          Education
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
        <Timeline position="alternate" sx={{ px: { xs: 2, sm: 4 } }}>
          {education.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  {item.type === "education" ? <SchoolIcon /> : <WorkIcon />}
                </TimelineDot>
                {index !== education.length - 1 && (
                  <TimelineConnector
                    sx={{
                      backgroundColor: "primary.main",
                      width: "2px",
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: theme.shape.borderRadius * 2,
                    backdropFilter: "blur(10px)",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(0, 0, 0, 0.7)"
                        : "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  <Typography variant="h5" component="div">
                    {item.type === "education" ? item.degree : item.position}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                    {item.type === "education"
                      ? item.institution
                      : item.company}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {item.year}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {item.location}
                  </Typography>
                  {item.honors && (
                    <Box sx={{ mt: 1 }}>
                      {item.honors.map((honor, i) => (
                        <Chip
                          key={i}
                          label={honor}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: "secondary.light",
                            color: "secondary.contrastText",
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </AnimatedPages>
  );
};

export default Education;
