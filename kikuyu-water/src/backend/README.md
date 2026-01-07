# Backend Documents Storage

This folder contains department-specific documents that are displayed in the bulletin board.

## Directory Structure

```
backend/
└── documents/
    ├── technical/      - Technical Department documents
    ├── commercial/     - Commercial Department documents
    ├── finance/        - Finance Department documents
    ├── procurement/    - Procurement Department documents
    ├── hr/            - Human Resource Department documents
    ├── nrw/           - Non-Revenue Water Department documents
    └── audit/         - Internal Audit Department documents
```

## Usage

1. Place department documents (PDFs, DOCX, XLSX, etc.) in the appropriate department folder
2. Update the bulletin data in `DepartmentBulletinBoard.jsx` to reference these files
3. Use relative imports to access the documents:
   ```javascript
   import documentFile from '../../backend/documents/technical/document-name.pdf';
   ```

## File Naming Convention

- Use lowercase with hyphens for filenames
- Be descriptive: `network-maintenance-schedule-q1-2026.pdf`
- Include version or date if applicable: `employee-handbook-2026.pdf`

## Supported File Types

- PDF (`.pdf`)
- Microsoft Word (`.doc`, `.docx`)
- Microsoft Excel (`.xls`, `.xlsx`)
- Other document formats as needed

## Notes

- Keep file sizes reasonable (under 10MB when possible)
- Ensure documents are properly formatted and accessible
- Update the bulletin board component when adding or removing documents
