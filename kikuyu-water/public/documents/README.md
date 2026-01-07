# Documents Management

This folder contains all publicly accessible documents for the Kikuyu Water website.

## Folder Structure

```
public/documents/
├── careers/           - Job description PDFs
├── tenders/          - Tender document PDFs
└── departments/      - Department-specific documents
    ├── technical/
    ├── commercial/
    ├── finance/
    ├── procurement/
    ├── hr/
    ├── nrw/
    └── audit/
```

## How to Add Documents

### 1. Careers (Job Descriptions)
- Place job description PDFs in `public/documents/careers/`
- Update `src/backend/careers/careersData.js`
- Set the `documentUrl` field to: `/documents/careers/filename.pdf`

**Example:**
```javascript
{
  id: 1,
  title: "Water Quality Analyst",
  location: "Kikuyu",
  deadline: "2026-02-15",
  documentUrl: "/documents/careers/water-quality-analyst.pdf"
}
```

### 2. Tenders
- Place tender PDFs in `public/documents/tenders/`
- Update `src/backend/tenders/tendersData.js`
- Set the `documentUrl` field to: `/documents/tenders/filename.pdf`

**Example:**
```javascript
{
  id: 1,
  tenderNo: "KWCL/T/001/2026",
  title: "Supply and Delivery of Water Meters",
  category: "Goods",
  closingDate: "2026-02-10",
  documentUrl: "/documents/tenders/tender-001-2026.pdf"
}
```

### 3. Department Documents
- Place department PDFs in respective folders: `public/documents/departments/{department}/`
- Update `src/pages/department-page/DepartmentBulletinBoard.jsx` bulletins object
- Set the `downloadUrl` field to: `/documents/departments/{department}/filename.pdf`

**Example:**
```javascript
technical: [
  {
    id: 1,
    title: "Network Maintenance Schedule Q1 2026",
    description: "...",
    date: "2026-01-05",
    type: "Schedule",
    fileType: "pdf",
    fileSize: "2.4 MB",
    downloadUrl: "/documents/departments/technical/maintenance-schedule-q1-2026.pdf",
  }
]
```

## File Naming Convention

Use lowercase with hyphens, be descriptive:
- `water-quality-analyst-2026.pdf`
- `tender-001-water-meters-2026.pdf`
- `network-maintenance-schedule-q1-2026.pdf`

## Supported File Types

- PDF (`.pdf`) - Primary format
- Word (`.doc`, `.docx`)
- Excel (`.xls`, `.xlsx`)

## Important Notes

1. **File Size**: Keep files under 10MB for better performance
2. **Security**: Only upload approved, public documents
3. **Accessibility**: Ensure PDFs are text-searchable and accessible
4. **Updates**: After adding files, update the corresponding data file
5. **Testing**: Test the download link in the browser before deployment

## Automatic Display

Once you:
1. Add a PDF to the appropriate folder
2. Update the data file with the correct path
3. The document will automatically appear on the website for users to download

No additional coding is required!
