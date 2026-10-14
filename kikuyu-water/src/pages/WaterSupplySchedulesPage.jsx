import Footer from "../layouts/Footer";

const schedules = [
  {
    borehole: "Ondiri Borehole",
    title: "Ondiri Borehole Rationing Program",
    file: "Ondiri_Borehole_Rationing_Program.pdf",
    url: "/documents/water-supply/Ondiri_Borehole_Rationing_Program.pdf",
  },
];

const WaterSupplySchedulesPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-bold">WATER SUPPLY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
            Water Supply Schedules
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            View and download published rationing schedules for our boreholes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral min-h-[40vh]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Published Borehole Schedules
          </h2>
          <div className="space-y-5">
            {schedules.map((schedule) => (
              <article
                key={schedule.file}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-primary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-primary mb-2">
                    {schedule.borehole}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    {schedule.title}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href={schedule.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary text-white px-5 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                  >
                    <i className="fa-solid fa-eye mr-2"></i>
                    View Schedule
                  </a>
                  <a
                    href={schedule.url}
                    download={schedule.file}
                    className="inline-flex items-center justify-center border border-primary text-primary px-5 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition"
                  >
                    <i className="fa-solid fa-download mr-2"></i>
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Additional borehole schedules will be listed here as they are published.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WaterSupplySchedulesPage;
