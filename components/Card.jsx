import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function MediaCard({ elem }) {
  const { id, title, image } = elem;
  return (
    <Box
      sx={{
        width: "300px",
        height: "300px",
        margin: "35px auto",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src={image}
        alt=""
        className="w-[300px] h-[200px] object-contain transform hover:scale-105 duration-300"
      />

      <Typography sx={{ textAlign: "center", marginTop: "1rem" }}>
        {title.slice(0, 50)}
      </Typography>
    </Box>
  );
}
