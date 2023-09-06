import Link from "next/link";
import { Card } from "@mui/material";
import movie from "../../public/placeholder.png";
import Image from "next/image";
import { Position } from "./types";

const cardStyle = {
  backgroundColor: "#414141",
  color: "white",
  height: "140px",
  width: "100px",
  display: "flex",
  fontSize: "35px",
  textDecoration: "none",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  marginBottom: "16px",
  position: "relative" as Position,
};
const divStyle = {
  backgroundColor: "#414141",
  color: "white",
  padding: "20px 60px",
};
const divContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "22px",
  height: "60vh",
};
const imageStyle = {
  position: "absolute" as Position,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const Home = () => {
  return (
    <main>
      <div style={divStyle}>Popular Titles</div>
      <div style={divContainer}>
        <Link href="/series" style={{ textDecoration: "none" }}>
          <Card style={cardStyle}>
            <Image
              src={movie}
              alt="movie"
              width={200}
              height={200}
              style={imageStyle}
            />
            SERIES
          </Card>
        </Link>
        <Link href="/movies" style={{ textDecoration: "none" }}>
          <Card style={cardStyle}>
            <Image
              src={movie}
              alt="movie"
              width={200}
              height={200}
              style={imageStyle}
            />
            MOVIES
          </Card>
        </Link>
      </div>
    </main>
  );
};

export default Home;
