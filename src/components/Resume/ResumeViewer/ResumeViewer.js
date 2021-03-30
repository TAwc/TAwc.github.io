import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import WinDim from '../../windowDemensions'

import styles from "./ResumeViewer.module.css"

import resumePDF from '../../../images/3-30-21.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeViewer = () => {

  const [numPages, setNumPages] = useState(resumePDF);
  const [size, setSize] =  useState();
  const { height, width } = WinDim()

  useEffect(() => {
    if(width <= 992){
      setSize("small") 
    }
    else{
      setSize("large")
      
    }
  }, [width]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return (
    <div className = {styles.pdf_image_container}>
        <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess} className='pdf_doc'>
            {size === "large" ? (<Page pageNumber={1} width={width * 0.7}/>) : (<Page pageNumber={1} width={width}/>)}
        </Document>
    </div>
  )
}

export default ResumeViewer