import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Items } from "../types";

interface GridCompProps {
  filtered: Items[];
  handleOpen: (movies: Items) => void;
}
const cardStyle = {
  minHeight: "274px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
};

const cardContent = {
  textDecoration: "none",
  color: "#414141",
};

const GridComp = ({ filtered, handleOpen }: GridCompProps) => {
  return (
    <Grid container spacing={2}>
      {filtered.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <Card
            style={cardStyle}
            sx={{
              ":hover": {
                boxShadow: 20,
                opacity: 0.8,
              },
            }}
          >
            <Link href="#" onClick={() => handleOpen(card)} style={cardContent}>
              <CardContent>
                <Image
                  src={card.images["Poster Art"].url}
                  alt="movie"
                  width={200}
                  height={200}
                />
                <Typography variant="subtitle1">{card.title}</Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridComp;
