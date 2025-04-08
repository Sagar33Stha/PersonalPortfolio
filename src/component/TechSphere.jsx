import React from "react";
import { Box, Avatar } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DataArrayIcon from "@mui/icons-material/DataArray";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";
import Chip from "@mui/material/Chip";

const TechSphere = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        p: 0.5,
        borderRadius: "100%",
        bgcolor: "background.paper",
        width: 500,
        height: 500,
        alignItems: "center",
        boxShadow: 6,
        overflow: "hidden",
      }}
    >
      <img
        src="public/IMG_20250308_150313.jpg"
        alt="description"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "100%",
        }}
      />
    </Box>
  );
};

export default TechSphere;
