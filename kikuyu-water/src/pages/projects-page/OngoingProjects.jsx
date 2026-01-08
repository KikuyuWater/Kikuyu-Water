const OngoingProjects = () => {
  const waterProjects = [
    {
      id: 1,
      name: "Renguti Water Supply Project",
      description: "Drilling of 1 no. borehole at Karai Nyakaumu, construction of 48m³ elevated tank, laying 4km DN110mm rising main and reticulation line from tank to Renguti–Kamangu area.",
      location: "Renguti - Kamangu",
      completion: "45%",
      startDate: "September 2025",
      expectedCompletion: "June 2026",
      beneficiaries: "1,800 households",
      funding: "CGK"
    },
    {
      id: 2,
      name: "Riu-Nderi Water Supply Project",
      description: "Drilling and equipping of Riu-Gikambura Primary BH (Q=90m³/h), construct 108m³ OHT, installation of 3-phase power, fencing, and interconnect to existing distribution at Gikambura area. Lay 2.5km rising main from Riu Nderi wellfield borehole to Gikambura primary school.",
      location: "Riu-Nderi - Gikambura",
      completion: "60%",
      startDate: "July 2025",
      expectedCompletion: "May 2026",
      beneficiaries: "1,800 households",
      funding: "AWWDA"
    },
    {
      id: 3,
      name: "Borehole Solarization Project",
      description: "Solarization of 9 No. boreholes across the service area to reduce operational costs and environmental impact through renewable energy adoption.",
      location: "Multiple locations",
      completion: "70%",
      startDate: "March 2025",
      expectedCompletion: "April 2026",
      beneficiaries: "35,000 households",
      funding: "AWWDA"
    }
  ];

  const sewerageProjects = [];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-500/10 px-4 py-2 rounded-full mb-4">
            <span className="text-blue-600 font-bold text-sm">IN PROGRESS</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Ongoing Projects
          </h2>
          <p className="text-xl text-gray-600">
            Projects currently under implementation
          </p>
        </div>

        {/* Water Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <i className="fa-solid fa-droplet mr-3"></i>
            Water Projects
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Project Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Scope</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Beneficiaries</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Funding</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {waterProjects.map((project, index) => (
                  <tr key={project.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{project.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600 max-w-md">{project.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{project.beneficiaries}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">{project.funding}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sewerage Projects */}
        {sewerageProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <i className="fa-solid fa-toilet mr-3"></i>
              Sewerage Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sewerageProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg border-2 border-green-100 hover:shadow-xl transition overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-toilet text-green-600 text-xl"></i>
                      </div>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {project.completion}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-700">
                        <i className="fa-solid fa-map-marker-alt text-gray-400 mr-2 w-4"></i>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <i className="fa-solid fa-calendar text-gray-400 mr-2 w-4"></i>
                        <span>{project.startDate}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <i className="fa-solid fa-flag-checkered text-gray-400 mr-2 w-4"></i>
                        <span className="text-xs">Target: {project.expectedCompletion}</span>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all"
                          style={{ width: project.completion }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OngoingProjects;
