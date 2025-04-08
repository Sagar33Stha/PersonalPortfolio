import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import AnimatedPages from "./AnimatedPages";

const skills = [
  { name: "JavaScript", level: 85, fill: "#90caf9" },
  { name: "React", level: 80, fill: "#f48fb1" },
  { name: "Python", level: 75, fill: "#ce93d8" },
  { name: "HTML", level: 70, fill: "#80cbc4" },
  { name: "CSS", level: 80, fill: "#ffab91" },
  { name: "Java", level: 75, fill: "#b39ddb" },
  //{ name: "Database", level: 70, fill: "#a5d6a7" },
  //{ name: "UI/UX", level: 65, fill: "#ffe082" },
];

const SkillChart = ({ skill }) => {
  const data = [{ name: skill.name, value: skill.level, fill: skill.fill }];

  return (
    <Box
      sx={{
        height: 180,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        {skill.name}
      </Typography>
      <Box sx={{ height: 120, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="60%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
              animationDuration={1500}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </Box>
      <Typography variant="body1" align="center" sx={{ mt: 1 }}>
        {skill.level}%
      </Typography>
    </Box>
  );
};

const Skills = () => {
  return (
    <AnimatedPages>
      <Box
        id="skills"
        sx={{
          py: 12,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "background.default",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          My Skills
        </Typography>
        <Grid container spacing={4} sx={{ px: { xs: 2, md: 4 } }}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <SkillChart skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </AnimatedPages>
  );
};

export default Skills;
