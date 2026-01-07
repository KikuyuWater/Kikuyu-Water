# Department Documents

Place department-specific documents in the appropriate subfolder.

## Folder Structure
- `technical/` - Technical Department documents
- `commercial/` - Commercial Department documents
- `finance/` - Finance Department documents
- `procurement/` - Procurement Department documents
- `hr/` - Human Resource documents
- `nrw/` - Non-Revenue Water documents
- `audit/` - Internal Audit documents

## Steps to Add Department Documents

1. **Prepare the Document PDF**
   - Save as: `descriptive-name-date.pdf`
   - Example: `network-maintenance-schedule-q1-2026.pdf`

2. **Place in the correct department folder**
   - Example: `public/documents/departments/technical/`

3. **Update the bulletin board data**
   - Open: `src/pages/department-page/DepartmentBulletinBoard.jsx`
   - Find the `bulletins` object (around line 6)
   - Add to the appropriate department array:
   ```javascript
   technical: [
     {
       id: 4,
       title: "Your Document Title",
       description: "Brief description",
       date: "2026-01-15",
       type: "Policy",  // or "Manual", "Report", "Guidelines", etc.
       fileType: "pdf",
       fileSize: "1.5 MB",
       downloadUrl: "/documents/departments/technical/your-document.pdf",
     }
   ]
   ```

4. **Save and test**
   - The document will appear in the department's bulletin board
   - Users can expand the bulletin board and download

## Document Types
- Policy
- Manual
- Report
- Guidelines
- Schedule
- Form
- Template
- Checklist
- Framework
- Calendar
- Handbook
