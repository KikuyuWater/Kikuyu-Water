export const tariffData = {
  domestic: [
    { label: "1 - 6 m³", max: 6, rate: 132 },
    { label: "7 - 20 m³", max: 20, rate: 143 },
    { label: "21 - 50 m³", max: 50, rate: 159 },
    { label: "51 - 100 m³", max: 100, rate: 169 },
    { label: "101 - 300 m³", max: 300, rate: 180 },
    { label: "Above 300 m³", max: Infinity, rate: 190 }
  ],
  mdu: [{ label: "Per m³", max: Infinity, rate: 154 }],
  commercial: [
    { label: "1 - 50 m³", max: 50, rate: 159 },
    { label: "51 - 100 m³", max: 100, rate: 169 },
    { label: "101 - 300 m³", max: 300, rate: 180 },
    { label: "Above 300 m³", max: Infinity, rate: 190 }
  ],
  kiosk: [{ label: "Per m³", max: Infinity, rate: 50 }],
  bulk: [{ label: "Per m³", max: Infinity, rate: 159 }],
  bowsing: [{ label: "Per m³", max: Infinity, rate: 127 }],
  school: [
    { label: "1 - 600 m³", max: 600, rate: 159 },
    { label: "601 - 1200 m³", max: 1200, rate: 175 },
    { label: "Above 1200 m³", max: Infinity, rate: 190 }
  ]
};