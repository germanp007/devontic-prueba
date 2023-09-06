import { Modal, Box, Typography } from "@mui/material";
import Image from "next/image";
import { Items } from "../types";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "auto",
  width: "fit-content",
  height: "fit",
  color: "white",
  padding: "20px 20px",
  backgroundColor: "#414141",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alingItems: "center",
};

interface ModalCompProps {
  open: boolean;
  handleClose: () => void;
  selectedSeries: Items | null;
}
function ModalComp({ open, handleClose, selectedSeries }: ModalCompProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={modalStyle}>
        {selectedSeries && (
          <>
            <h2 id="parent-modal-title">{selectedSeries.title}</h2>
            <p id="parent-modal-description">{selectedSeries.description}</p>
            <Typography variant="h6">{selectedSeries.releaseYear}</Typography>
            <Image
              src={selectedSeries.images["Poster Art"].url}
              alt="serie"
              width={200}
              height={200}
            />
          </>
        )}
      </Box>
    </Modal>
  );
}

export default ModalComp;
