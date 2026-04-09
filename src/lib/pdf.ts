import jsPDF from "jspdf";

export interface PDFLineItem {
  label: string;
  price: string;
}

export interface PDFData {
  title: string;
  categories: string[];
  scale: string;
  urgency: string;
  features: string[];
  breakdown: PDFLineItem[];
  total: {
    symbol: string;
    value: string;
  };
  disclaimer: string;
  contact: {
    email: string;
    website: string;
  };
}

export const generateQuotePDF = async (data: PDFData) => {
  // We use pure jsPDF commands for native vector format
  // This guarantees selectable text, perfect crispness, 0 performance blocking, and working links
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  let y = 60;
  const margin = 40;
  const width = doc.internal.pageSize.getWidth();
  const contentWidth = width - margin * 2;

  // 1. HEADER
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(0, 0, 0);
  doc.text("DANIEL KARUME", margin, y);
  
  doc.setFontSize(16);
  doc.text("QUOTATION", width - margin, y, { align: "right" });

  y += 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("Senior Full-Stack Developer & Consultant", margin, y);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, width - margin, y, { align: "right" });

  y += 25;
  doc.setDrawColor(240, 240, 240);
  doc.setLineWidth(1);
  doc.line(margin, y, width - margin, y);
  
  y += 40;

  // 2. OVERVIEW section
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(136, 136, 136);
  doc.text("PROJECT OVERVIEW", margin, y);
  y += 20;

  const drawOverviewRow = (label: string, val: string, yPos: number) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(label, margin, yPos);
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    // Wrap text if categories gets too long
    const splitVal = doc.splitTextToSize(val, contentWidth - 150);
    doc.text(splitVal, margin + 150, yPos);
    
    const heightAdded = splitVal.length * 14;
    doc.setDrawColor(240, 240, 240);
    doc.line(margin, yPos + heightAdded - 4, width - margin, yPos + heightAdded - 4);
    return heightAdded;
  };

  y += drawOverviewRow("Categories", data.categories.join(", "), y) + 12;
  y += drawOverviewRow("Scale", data.scale, y) + 12;
  y += drawOverviewRow("Timeline", data.urgency, y) + 12;
  
  y += 30;

  // Pagination helper
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > 800) {
      doc.addPage();
      y = 60;
    }
  };

  // 3. BREAKDOWN Section
  checkPageBreak(100);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(136, 136, 136);
  doc.text("LINE ITEMS / BREAKDOWN", margin, y);
  y += 15;

  // Table header
  doc.setFillColor(249, 249, 251);
  doc.rect(margin, y, contentWidth, 25, "F");
  y += 17;
  doc.setFontSize(10);
  doc.setTextColor(68, 68, 68);
  doc.text("Description", margin + 15, y);
  doc.text("Amount", width - margin - 15, y, { align: "right" });
  y += 8; 

  // Table body
  data.breakdown.forEach((item) => {
    checkPageBreak(30);
    y += 20;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 51, 51);
    const splitLabel = doc.splitTextToSize(item.label, contentWidth - 150);
    doc.text(splitLabel, margin + 15, y);
    
    doc.setFont("helvetica", "bold");
    doc.text(item.price, width - margin - 15, y, { align: "right" });
    
    const rowH = splitLabel.length * 14;
    doc.setDrawColor(240, 240, 240);
    doc.line(margin, y + rowH - 4, width - margin, y + rowH - 4);
    y += (rowH - 14); // Adjust if multi-line
  });

  y += 40;

  // 4. TOTAL BLOCK
  checkPageBreak(100);
  doc.setFillColor(0, 0, 0);
  doc.roundedRect(margin, y, contentWidth, 60, 4, 4, "F");
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text("ESTIMATED TOTAL", margin + 20, y + 35);
  
  doc.setFontSize(28);
  doc.text(`${data.total.symbol} ${data.total.value}`, width - margin - 20, y + 38, { align: "right" });

  y += 80;

  // 5. FOOTER
  checkPageBreak(100);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(136, 136, 136);
  doc.text("NOTES & TERMS", margin, y);
  y += 10;
  
  doc.setFillColor(249, 249, 251);
  const disclaimerLines = doc.splitTextToSize(`- ${data.disclaimer}`, contentWidth - 20);
  const termsBoxHeight = 35 + (disclaimerLines.length * 10);
  doc.roundedRect(margin, y, contentWidth, termsBoxHeight, 4, 4, "F");
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(102, 102, 102);
  y += 15;
  doc.text(disclaimerLines, margin + 10, y);
  y += (disclaimerLines.length * 10) + 2;
  doc.text("- Quote is valid for 30 days from the date of issue.", margin + 10, y);
  y += 12;
  doc.text("- 50% initial commitment required for project kickoff.", margin + 10, y);
  
  y += 35;
  doc.setDrawColor(240, 240, 240);
  doc.line(margin, y, width - margin, y);
  y += 18;
  
  // Real Native Links
  doc.setFontSize(9);
  doc.text("Email: ", margin, y);
  doc.setTextColor(0, 102, 204);
  const emailWidth = doc.getTextWidth(data.contact.email);
  doc.textWithLink(data.contact.email, margin + 28, y, { url: `mailto:${data.contact.email}` });
  
  doc.setTextColor(102, 102, 102);
  doc.text(" | Web: ", margin + 28 + emailWidth, y);
  doc.setTextColor(0, 102, 204);
  doc.textWithLink(data.contact.website, margin + 28 + emailWidth + 30, y, { url: `https://${data.contact.website}` });

  doc.setTextColor(102, 102, 102);
  doc.text("Nairobi, Kenya / Remote Worldwide", width - margin, y, { align: "right" });

  doc.save(`Project_Quote_${data.categories[0].replace(/ /g, "_")}.pdf`);
};
