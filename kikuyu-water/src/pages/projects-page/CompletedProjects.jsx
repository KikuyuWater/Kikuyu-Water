const CompletedProjects = () => {
  const waterProjects = [
    {
      id: 1,
      name: "Borehole Solarization Phase I",
      description: "Successfully solarized nine boreholes: Twin Island 1 & 2, Twin Gichuru 1 & 2, Ondiri Mai ai Hii, Thogoto Cloister, Riu 2, Thirime, and Nduma.",
      location: "Multiple locations",
      completionDate: "December 2025",
      beneficiaries: "12,000 households",
      impact: "30% reduction in operational costs"
    }
  ];

  const sewerageProjects = [
    {
      id: 1,
      name: "AFDB Sewer Construction Project",
      description: "Construction of 44.2 km of trunk and reticulation sewers to serve Kikuyu Town, Kidfarmaco, Thogoto, and Kinoo areas. The project included construction of 1,233 manholes, 750 household connections, and connection of trunks to the main Nairobi trunks.",
      location: "Kikuyu Town, Kidfarmaco, Thogoto, Kinoo",
      completionDate: "July 2023",
      beneficiaries: "15,000 persons",
      impact: "Major sewerage infrastructure expansion",
      funding: "African Development Bank (AFDB)"
    },
    {
      id: 2,
      name: "KUSP ILRI-Mutego Trunk Sewer",
      description: "Construction of ILRI–Mutego 4.8 km main trunk sewer. 0.8km serves the KIWACO service area while the remaining section serves the Nairobi Water Service Area.",
      location: "ILRI - Mutego",
      completionDate: "July 2023",
      beneficiaries: "Multiple areas",
      impact: "Enhanced trunk sewer capacity",
      funding: "Kenya Urban Support Programme (KUSP)"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-500/10 px-4 py-2 rounded-full mb-4">
            <span className="text-green-600 font-bold text-sm">ACCOMPLISHED</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Completed Projects
          </h2>
          <p className="text-xl text-gray-600">
            Successfully delivered infrastructure projects
          </p>
        </div>

        {/* Water Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <i className="fa-solid fa-droplet mr-3"></i>
            Water Projects
          </h3>
          <div className="overflow-x-auto rounded-lg shadow-lg border border-green-200">
            <table className="w-full">
              <thead>
                <tr className="bg-green-500 text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Project Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Beneficiaries</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Impact</th>
                </tr>
              </thead>
              <tbody>
                {waterProjects.map((project, index) => (
                  <tr key={project.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{project.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <i className="fa-solid fa-users text-gray-400 mr-2"></i>
                        {project.beneficiaries}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
                        <i className="fa-solid fa-chart-line mr-2"></i>
                        {project.impact}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sewerage Projects */}
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
            <i className="fa-solid fa-toilet mr-3"></i>
            Sewerage Projects
          </h3>
          <div className="overflow-x-auto rounded-lg shadow-lg border border-green-200">
            <table className="w-full">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Project Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Beneficiaries</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Funding Source</th>
                </tr>
              </thead>
              <tbody>
                {sewerageProjects.map((project, index) => (
                  <tr key={project.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{project.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <i className="fa-solid fa-users text-gray-400 mr-2"></i>
                        {project.beneficiaries}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200">
                        <i className="fa-solid fa-coins mr-2"></i>
                        {project.funding}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
