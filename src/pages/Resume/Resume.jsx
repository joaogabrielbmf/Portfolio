import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Curriculo from "../Resume/Curriculo_Joao_Gabriel_Ferraz.pdf";
import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  const [width, setWidth] = useState(800);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new ResizeObserver(([entry]) => {
      setWidth(Math.min(entry.contentRect.width, 900));
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <div ref={ref} className="w-full max-w-225 mx-auto my-10">
          <Document
            file={Curriculo}
            externalLinkTarget="_blank"
            externalLinkRel="noopener noreferrer"
            loading=""
          >
            <Page
              pageNumber={1}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={true}
            />
          </Document>
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export default Resume;