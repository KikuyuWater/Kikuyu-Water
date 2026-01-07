# Tender Documents

Place tender PDF files in this folder.

## Steps to Add a New Tender

1. **Prepare the Tender Document PDF**
   - Include: specifications, requirements, submission details
   - Save as: `tender-{number}-brief-description-{year}.pdf`
   - Example: `tender-001-water-meters-2026.pdf`

2. **Add the PDF to this folder**
   - Drop the file into: `public/documents/tenders/`

3. **Update the tenders data**
   - Open: `src/backend/tenders/tendersData.js`
   - Add new tender entry:
   ```javascript
   {
     id: 6,
     tenderNo: "KWCL/T/006/2026",
     title: "Your Tender Title",
     category: "Goods",  // or "Services" or "Works"
     publishDate: "2026-01-10",
     closingDate: "2026-02-10",
     closingTime: "10:00 AM",
     documentUrl: "/documents/tenders/tender-006-description-2026.pdf",
     contactEmail: "tenders@kikuyuwater.co.ke",
     contactPhone: "+254 728 578 098",
     status: "Open"  // or "Closed"
   }
   ```

4. **Save and test**
   - The tender will automatically appear on the Tenders page
   - Users can click to download the PDF

## Example Files (place your PDFs here)
- tender-001-water-meters-2026.pdf
- tender-002-treatment-plant-2026.pdf
- tender-003-security-services-2026.pdf
