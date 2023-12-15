import React, { useState } from "react";
import { pdfjs, Document, Page, PasswordResponses } from "react-pdf";
import {
  Modal,
  Button,
  IconButton,
  Typography,
  Box,
  Grid,
  TextField
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import RotateRightIcon from "@material-ui/icons/RotateRight"; // for landscape mode icon
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'; // for GoToPage icon
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // changed from '80vw' to 'auto'
  maxWidth: "100vw", // ensure the modal doesn't exceed the width of the viewport
  height: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  overflow: "scroll",
};

const DocumentViewer = ({ file, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Track the current page number
  const [rotation, setRotation] = useState(0); // Rotation state: 0 for portrait, 90 for landscape
  const [scale, setScale] = useState(1.0); // Scale state for zoom level
  const [inputPageNumber, setInputPageNumber] = useState(''); // Track the input page number for GoToPage feature

  // Function to extract the filename from a path or URL
  const getFileName = (filePath) => {
    return filePath.split('/').pop().split('#')[0].split('?')[0];
  };

  const fileName = getFileName(file);

  // Handle input page number change
  const handleInputPageNumberChange = (event) => {
    setInputPageNumber(event.target.value);
  };
  // Handle GoToPage button click
  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPageNumber, 10);
    if (pageNumber >= 1 && pageNumber <= numPages) {
      setPageNumber(pageNumber);
    } else {
      alert('Please enter a valid page number.');
    }
  };
  // Handle zoom in button click
  const zoomIn = () => {
    setScale((prevScale) => prevScale + 0.1);
  };
  // Handle zoom out button click
  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Prevent scaling too small
  };

  // Handle orientation toggle button click
  const toggleOrientation = () => {
    // Toggle between 0 (portrait) and 90 (landscape) degrees
    setRotation((prevRotation) => (prevRotation === 0 ? 90 : 0));
  };
  // Handle document load success
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // Handle previous page click
  const goToPrevPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };
  // Handle next page click
  const goToNextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  };

  // Custom function for onPassword callback
  const customOnPassword = (callback, reason) => {
    let passwordPrompt = "Enter the password to open this PDF file.";
    if (reason === PasswordResponses.INCORRECT_PASSWORD) {
      passwordPrompt = "Invalid password. Please try again.";
    }

    // Prompt user for password
    const password = prompt(passwordPrompt);
    if (password) {
      // If a password is provided, pass it to the callback
      console.log("Password provided is correct.");
      callback(password);
    } else {
      // Handle the case where the user cancels the password prompt
      onClose(); // For example, call the onClose prop
    }
  };

  return (
    <Modal
      open
      onClose={onClose}
      aria-labelledby="document-viewer-modal-title"
      aria-describedby="document-viewer-modal-description"
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          style={{ position: "absolute", right: "10px", top: "10px" }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id="document-viewer-modal-title"
          variant="h6"
          component="h2"
        >
          {fileName}
        </Typography>
        <Box sx={{ overflow: "auto", maxHeight: "70vh" }}>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onPassword={customOnPassword}
          >
            <Page
              renderTextLayer={false}
              renderAnnotationLayer={false}
              pageNumber={pageNumber}
              width={document.body.clientWidth * 0.8}
              rotate={rotation}
              scale={scale}
            />
          </Document>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          {/* Grid container for controls */}
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ position: "absolute", bottom: 10, left: 0, right: 0 }}
          >
          
            <Grid item>
              <Button
                onClick={zoomOut}
                startIcon={<ZoomOutIcon />}
                variant="contained"
              >
                Zoom Out
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={zoomIn}
                startIcon={<ZoomInIcon />}
                variant="contained"
              >
                Zoom In
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={toggleOrientation}
                startIcon={<RotateRightIcon />}
                variant="contained"
              >
                {rotation === 0 ? "Landscape" : "Portrait"}
              </Button>
            </Grid>
            
            <Grid item>
              <Button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                variant="contained"
              >
                Previous
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Page {pageNumber} of {numPages}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                variant="contained"
              >
                Next
              </Button>
            </Grid>
            <Grid item>
            <TextField
              size="small"
              variant="outlined"
              type="number"
              inputProps={{ min: 1, max: numPages }}
              value={inputPageNumber}
              onChange={handleInputPageNumberChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleGoToPage();
                }
              }}
            />
          </Grid>
          <Grid item>
            <Button onClick={handleGoToPage} startIcon={<ArrowRightAltIcon />} variant="contained">
              Go To Page
            </Button>
          </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default DocumentViewer;
