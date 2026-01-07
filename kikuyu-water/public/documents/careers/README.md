# Careers Documents

Place job description PDF files in this folder.

## Steps to Add a New Job Posting

1. **Create the Job Description PDF**
   - Include: position title, responsibilities, requirements, application process
   - Save as: `job-title-year.pdf` (e.g., `water-quality-analyst-2026.pdf`)

2. **Add the PDF to this folder**
   - Drop the file into: `public/documents/careers/`

3. **Update the careers data**
   - Open: `src/backend/careers/careersData.js`
   - Add new job entry:
   ```javascript
   {
     id: 5,
     title: "Your Job Title",
     location: "Kikuyu",
     deadline: "2026-03-15",
     documentUrl: "/documents/careers/your-job-title-2026.pdf"
   }
   ```

4. **Save and test**
   - The job will automatically appear on the Careers page
   - Users can click to download the PDF

## Example Files (place your PDFs here)
- water-quality-analyst-2026.pdf
- customer-service-officer-2026.pdf
- finance-intern-2026.pdf
- plumber-2026.pdf
