import Footer from "../layouts/Footer";
import Cta from "../layouts/Cta";

const CustomerServiceCharter = () => {
  const charterData = [
    {
      service: "New Connections",
      product: "Processing of application forms",
      level: "Immediate",
      department: "Commercial Dep't (Customer Relation)",
    },
    {
      service: "",
      product: "Installation of connection after payment",
      level: "1-5 days",
      department: "Technical Dep't(O&M)",
    },
    {
      service: "",
      product: "First Bill",
      level: "One (1) Month",
      department: "Commercial Dep't (Billing)",
    },
    {
      service: "Disconnection/Reconnection",
      product: "Disconnection of Water/Sewer for non-payment",
      level: "10 Days from Date of issue of bill",
      department: "Finance Dep't (Revenue)",
    },
    {
      service: "",
      product: "Reconnection of water/Sewer supply",
      level: "Within 72 hours after payment",
      department: "Finance Dep't (Revenue)",
    },
    {
      service: "Customer queries and complaints",
      product: "Account Balance",
      level: "Immediate",
      department: "Commercial Dep't (Customer Relation)",
    },
    {
      service: "",
      product: "Lack of Water",
      level: "1-2 Days",
      department: "Technical Dep't(O&M)",
    },
    {
      service: "",
      product: "Reply of written complaints",
      level: "1-3 Days",
      department: "Relevant Department",
    },
    {
      service: "",
      product: "Email",
      level: "Immediate",
      department: "Relevant Department",
    },
    {
      service: "",
      product: "Complaints through the telephone",
      level: "Immediate",
      department: "Commercial Dep't (Customer Relation)",
    },
    {
      service: "",
      product: "Office visit complaints",
      level: "Immediate",
      department: "Relevant Department",
    },
    {
      service: "",
      product: "Process of refund after termination",
      level: "2 Weeks",
      department: "Finance Department",
    },
    {
      service: "Water Kiosks",
      product: "Application for retailing",
      level: "1 month",
      department: "Commercial Department",
    },
    {
      service: "Water Bills",
      product: "Meter Reading",
      level: "Monthly",
      department: "Commercial Department",
    },
    {
      service: "",
      product: "Water Billing",
      level: "Monthly",
      department: "Commercial Department",
    },
    {
      service: "",
      product: "Bill Dispatch",
      level: "Monthly through sms and emails",
      department: "Commercial Department",
    },
    {
      service: "Payment of services",
      product: "Water & Sewer",
      level: "Mpesa, Banks & Cheques",
      department: "Finance Department",
    },
    {
      service: "",
      product: "New Connections, Water Deposits, Exhauster",
      level: "Mpesa, Banks & Cheques",
      department: "Finance Department",
    },
    {
      service: "Attendance of leaks & bursts",
      product: "Repair of leaks and bursts",
      level: "Within 12 hours of report",
      department: "Technical(O&M)",
    },
    {
      service: "Water quality testing",
      product: "Residual chlorine",
      level: "Daily",
      department: "Technical Dep't (Water Quality)",
    },
    {
      service: "",
      product: "Chemical analysis",
      level: "Monthly",
      department: "Technical Dep't (Water Quality)",
    },
    {
      service: "",
      product: "Bacteriological analysis",
      level: "Monthly",
      department: "Technical Dep't (Water Quality)",
    },
    {
      service: "Service Reliability",
      product: "Water Supply",
      level: "4 days in a week",
      department: "Technical Department (O&M)",
    },
    {
      service: "",
      product: "Water Quality",
      level: "Meet KEBS/WHO standards",
      department: "Technical Dep't (Water Quality)",
    },
    {
      service: "Regular update of customers",
      product: "News Letters",
      level: "Quarterly",
      department: "Commercial Dep't (Customer Relation)",
    },
    {
      service: "",
      product: "Media",
      level: "When need arises e.g interruption of supply",
      department: "Commercial Dep't (Customer Relation)",
    },
    {
      service: "",
      product: "Stakeholders Workshop",
      level: "Quarterly",
      department: "Commercial Dep't (Customer Relation)",
    },
    {
      service: "Office Hours",
      product: "Attendance to customers",
      level: "Monday-Friday 8.00 am-5pm",
      department: "Commercial Dep't (Customer Relation)",
    },
    {
      service: "Other Technical services",
      product: "Meter Relocation",
      level: "1-5 Days",
      department: "Technical Dep't (O&M)",
    },
    {
      service: "",
      product: "Replacement of faulty meters",
      level: "1-3 Days",
      department: "Technical Dep't (O&M)",
    },
    {
      service: "",
      product: "Meter test",
      level: "1-5 Days",
      department: "Technical Dep't (NRW)",
    },
    {
      service: "",
      product: "Field Investigation",
      level: "1-3 Days",
      department: "Technical Dep't (O&M)",
    },
    {
      service: "",
      product: "Exhauster services",
      level: "Within 24 hours after payment",
      department: "Technical Department",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black mb-4">Customer Service Charter</h1>
          <p className="text-xl text-blue-100">
            Our commitment to quality service and customer satisfaction
          </p>
        </div>
      </section>

      {/* Charter Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Service Standards & Commitments
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Kikuyu Water and Sewerage Company (KIWASCO) is committed to delivering 
              high-quality water and sewerage services to our customers. This charter 
              outlines the service levels and timeframes we pledge to maintain across 
              all our service offerings.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto shadow-lg rounded-xl">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold">
                    SERVICE
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold">
                    SERVICE PRODUCT
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold">
                    SERVICE LEVEL
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold">
                    RESPONSIBLE DEPARTMENT
                  </th>
                </tr>
              </thead>
              <tbody>
                {charterData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                      {row.service}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      {row.product}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      {row.level}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      {row.department}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Principles */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fa-solid fa-heart text-primary mr-3"></i>
                Customer Focus
              </h3>
              <p className="text-gray-700">
                We prioritize customer satisfaction and responsiveness in all our operations.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fa-solid fa-clock text-primary mr-3"></i>
                Timeliness
              </h3>
              <p className="text-gray-700">
                We are committed to delivering services within the specified timeframes.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fa-solid fa-handshake text-primary mr-3"></i>
                Accountability
              </h3>
              <p className="text-gray-700">
                We take responsibility for meeting our service commitments and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
};

export default CustomerServiceCharter;
