import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "../assets/pdf/1708445351670.pdf";
import { Box } from "@mui/material";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import CircularProgress from "@mui/material/CircularProgress";

const PdfView = ({ articles }) => {
  console.log("I RENDRED");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const onDocumentSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const onPageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Box sx={styles.pdfContainer} id="pdfContainer">
      <Document
        file={pdfFile}
        onLoadError={console.error}
        onLoadSuccess={onDocumentSuccess}
        loading={
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <CircularProgress />
          </Box>
        }
      >
        <Page
          pageNumber={pageNumber}
          height={100}
          scale={6}
          loading={
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress />
            </Box>
          }
        />
      </Document>
      {numPages ? (
        <Pagination onChange={onPageChange} count={numPages} shape="rounded" />
      ) : (
        ""
      )}
    </Box>
  );
};
/**@type {import("@mui/material".SxProps)} */
const styles = {
  pdfContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    height: "100%",
  },
};

export default PdfView;
