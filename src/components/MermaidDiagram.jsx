import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const MermaidDiagram = ({ chart }) => {
  const diagramRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, [chart]);

  const exportToPDF = () => {
    if (diagramRef.current) {
      html2canvas(diagramRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust dimensions as needed
        pdf.save('diagram.pdf');
      });
    }
  };

  return (
    <div>
      <div className="mermaid" ref={diagramRef}>
        {chart}
      </div>
      <button onClick={exportToPDF}>Export to PDF</button>
    </div>
  );
};

export default MermaidDiagram;
