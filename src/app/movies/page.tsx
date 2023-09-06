"use client";
import dataJson from "../data/sample.json";
import { useState } from "react";
import ModalComp from "../components/ModalComp";
import GridComp from "../components/GridComp";
import { Items } from "../types";

const divStyle = {
  backgroundColor: "#414141",
  color: "white",
  padding: "20px 60px",
};

const gridContainer = {
  minHeight: "120vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 20px",
};

const data = dataJson.entries as Items[];
const filtered = data
  .filter((ele) => ele.programType === "movie" && ele.releaseYear >= 2010)
  .sort((a, b) => a.title.localeCompare(b.title))
  .slice(0, 20);
const MoviesPages = () => {
  const [open, setOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<null | Items>(null);
  const handleOpen = (movies: {
    title: string;
    description: string;
    images: { "Poster Art": { url: string } };
  }) => {
    setSelectedSeries(movies as Items);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedSeries(null);
    setOpen(false);
  };
  return (
    <>
      <div style={divStyle}>Popular Movies</div>
      <div style={gridContainer}>
        <GridComp
          filtered={filtered}
          handleOpen={(movies: Items) => handleOpen(movies)}
        />
        <ModalComp
          open={open}
          handleClose={handleClose}
          selectedSeries={selectedSeries}
        />
      </div>
    </>
  );
};

export default MoviesPages;
