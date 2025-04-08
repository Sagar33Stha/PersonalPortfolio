import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./component/Header";
import Skills from "./component/Skills.jsx";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer";
import ParticlesBackground from "./component/ParticlesBackground";
import VoiceControl from "./component/VoiceControl";
import About from "./component/About";

const getThemeBasedOnTime = () => {
  const hour = new Date().getHours();
  return hour > 6 && hour < 18 ? "dark" : "light";
};

function App() {
  const [mode, setMode] = useState(getThemeBasedOnTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newMode = getThemeBasedOnTime();
      if (newMode !== mode) {
        setMode(newMode);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? "#90caf9" : "#1976d2",
          },
          secondary: {
            main: mode === "dark" ? "#f48fb1" : "#d81b60",
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
          },
          h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
          },
          h3: {
            fontWeight: 500,
            fontSize: "2rem",
          },
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VoiceControl />
      <Box
        sx={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}
      >
        <ParticlesBackground />
      </Box>
      {/* ✅ Only keep this Header */}
      <Header toggleColorMode={toggleColorMode} />
      
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
