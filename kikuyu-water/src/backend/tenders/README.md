# Tenders Data

This folder contains tender opportunities and procurement announcements for Kikuyu Water Company.

## Structure

Add tender documents and announcements here.

## Tender Format

Each tender should include:
- Tender number/reference
- Title/description
- Category (Goods, Services, Works)
- Estimated value
- Publishing date
- Closing date
- Tender document (PDF)
- How to submit

## Example

```javascript
{
  id: 1,
  tenderNo: "KWCL/T/001/2026",
  title: "Supply and Delivery of Water Meters",
  category: "Goods",
  description: "Procurement of 5,000 water meters for domestic connections",
  estimatedValue: "KES 15,000,000",
  publishDate: "2026-01-10",
  closingDate: "2026-02-10",
  closingTime: "10:00 AM",
  documentUrl: "/backend/tenders/tender-001-2026.pdf",
  fee: "KES 2,000",
  contactEmail: "tenders@kikuyuwater.co.ke"
}
```

## Document Categories

- **Active Tenders**: Currently open tenders
- **Closed Tenders**: Past tenders (for reference)
- **Tender Documents**: PDFs with detailed specifications
- **Award Notices**: Successful bidder announcements

Place tender documents (BOQs, specifications, terms) in this folder.
