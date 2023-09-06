import { Typography } from "@mui/material";
const divStyle = {
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Loading = () => {
  return (
    <div style={divStyle}>
      <Typography variant="h4">Loading...</Typography>;
    </div>
  );
};
export default Loading;
