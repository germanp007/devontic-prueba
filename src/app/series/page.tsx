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
export const filtered = data
  .filter((ele) => ele.programType === "series" && ele.releaseYear >= 2010)
  .sort((a, b) => a.title.localeCompare(b.title))
  .slice(0, 20);

const SeriesPages = () => {
  const [open, setOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<null | Items>(null);
  const handleOpen = (series: {
    title: string;
    description: string;
    images: { "Poster Art": { url: string } };
  }) => {
    setSelectedSeries(series as Items);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={divStyle}>Popular Series</div>
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

export default SeriesPages;
