"use client";
import { Typography } from "@mui/material";
const divStyle = {
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const error = () => {
  return (
    <div>
      <Typography variant="h4" style={divStyle}>
        Oops, something went wrong...
      </Typography>
    </div>
  );
};

export default error;
