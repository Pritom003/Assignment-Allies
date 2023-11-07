import React from 'react';
import { Link } from 'react-router-dom';
// import PDFViewer from './pdfpreview';
// import { Viewer, Worker } from '@react-pdf-viewer/core'
// import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdffi from "../../../assets/hello.pdf" 
const Allsubmissioncard = ({item}) => {
const{file,description,examinee ,examineeemail,
  type,author,totalmark,assignmentname}=item
console.log(author);
// const newplug=defaultLayoutPlugin()
  return (
    <div>
       <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">examinee name :{examinee}</h2>
    <p >Examinee email: {examineeemail} </p>
    <p>description:{description}</p>
    <p>assignment type:{ type}</p>
    <p>assignment mark:{ totalmark}</p>
    <p>assignment name:{ assignmentname}</p>
    <Link to={file}>Pdf file</Link>
         {/* <div>
         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          ...
          {
            file? <Viewer fileUrl={file} plugins={[newplug]}/>: <p>no deta</p>
          }
          </Worker>;
         </div> */}
         <Worker
         workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
   
   <Viewer fileUrl={pdffi} />;
</Worker>



    <div className="card-actions justify-end">
      <button className="btn btn-primary"></button>
      <button className="btn btn-primary"></button>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Allsubmissioncard;