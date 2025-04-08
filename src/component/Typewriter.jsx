import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const Typewriter = ({ texts, speed = 150, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentText = texts[currentTextIndex];

        if (isDeleting) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
          if (displayedText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          }
        } else {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
          if (displayedText === currentText) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <Typography component="span" variant="inherit">
      {displayedText}
      <span style={{ opacity: 0.7 }}>|</span>
    </Typography>
  );
};

export default Typewriter;
