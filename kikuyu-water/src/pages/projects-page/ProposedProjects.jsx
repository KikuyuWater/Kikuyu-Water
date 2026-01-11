const ProposedProjects = () => {
  const waterProjects = [
    {
      id: 1,
      name: "Riu-Karai Secondary Borehole Development",
      description: "Drilling and equipping of Riu-Karai Sec BH2 (Q=90m³/h), construct 108m³ OHT, installation of 3-phase power, fencing, and laying of 5km 160mm HDPE rising main pipeline from Riu to Karai Secondary. Lay 40km main and assorted distribution network for Nachu area.",
      location: "Riu-Karai",
      expectedStart: "Q2 2026",
      duration: "24 months",
      status: "Planning Stage",
      beneficiaries: "5,000 households"
    },
    {
      id: 2,
      name: "Rugita Borehole Project",
      description: "Bring online Rugita BH (est.20m³/hr) by equipping, constructing panel house, installing 3-phase power and construction of 48m³ OHT at Rugita. Laying of 0.7km DN 110 HDPE rising main to Rugita OHT.",
      location: "Rugita",
      expectedStart: "Q3 2026",
      duration: "18 months",
      status: "Feasibility Study",
      beneficiaries: "15,000 households"
    },
    {
      id: 3,
      name: "Rugita Distribution Network",
      description: "Laying of 20km of assorted pipeline (DN90-DN 32) for distribution in Rugita area.",
      location: "Rugita",
      expectedStart: "Q4 2026",
      duration: "12 months",
      status: "Planning Stage",
      beneficiaries: "2,000 households"
    },
    {
      id: 4,
      name: "Kinoo Distribution Pipeline",
      description: "Laying of 54km assorted distribution pipeline (DN90-DN 32) in Kinoo area.",
      location: "Kinoo",
      expectedStart: "Q1 2027",
      duration: "18 months",
      status: "Design Phase",
      beneficiaries: "15,000 households"
    },
    {
      id: 5,
      name: "Kabete Distribution Network",
      description: "Laying 60 km of DN 90-DN 32 assorted distribution pipes for the Kabete area.",
      location: "Kabete",
      expectedStart: "Q2 2027",
      duration: "20 months",
      status: "Planning Stage",
      beneficiaries: "15,000 households"
    },
    {
      id: 6,
      name: "Kikuyu Spring Collection Facility",
      description: "Construct a CFU at Kikuyu Spring Q=30M³/day and lay a transmission line to Kabuthi.",
      location: "Kikuyu - Kabuthi",
      expectedStart: "Q3 2027",
      duration: "12 months",
      status: "Feasibility Study",
      beneficiaries: "2,500 households"
    },
    {
      id: 7,
      name: "Loromo (Limuru) - Thamanda Borehole",
      description: "Drilling and equipping of Loromo (Limuru)- Thamanda BH (Q=60m³/h), construct 108m³ OHT, installation of 3-phase power, fencing, and interconnect to existing distribution at Thamanda/Utafiti/KEFRI/KARI area.",
      location: "Limuru - Thamanda",
      expectedStart: "Q1 2028",
      duration: "18 months",
      status: "Design Phase",
      beneficiaries: "3,000 households"
    }
  ];

  const sewerageProjects = [
    {
      id: 1,
      name: "Gitathuru Catchment Sewer Network",
      description: "Construction of sewer network serving Kabete (27.3km trunk), Kingeero (11.6km main), and Lower Kabete (57.2km lateral). Total 96.1km of sewer lines.",
      location: "Gitathuru Catchment",
      expectedStart: "Q2 2026",
      duration: "36 months",
      status: "Planning Stage"
    },
    {
      id: 2,
      name: "Turarie Catchment Sewer System",
      description: "Construction of sewer network serving Gathiga (13km trunk), Kabete (8km secondary), and lateral lines (30km). Total 51km of sewer infrastructure.",
      location: "Turarie Catchment",
      expectedStart: "Q3 2026",
      duration: "30 months",
      status: "Feasibility Study"
    },
    {
      id: 3,
      name: "Gataara Catchment Sewer Network",
      description: "Construction of sewer lines serving Gitaru (18.4km trunk), Uthiru (16.1km main), and Kanyariri (67.9km lateral). Total 102.4km of sewer infrastructure.",
      location: "Gataara Catchment",
      expectedStart: "Q1 2027",
      duration: "36 months",
      status: "Design Phase"
    },
    {
      id: 4,
      name: "Kinoo Catchment Sewer System",
      description: "Construction of sewer network serving Kinoo, Muthiga, and Rungiri areas with trunk (1km), main (7.9km), and lateral lines (30.6km). Total 39.5km.",
      location: "Kinoo Catchment",
      expectedStart: "Q4 2026",
      duration: "24 months",
      status: "Planning Stage"
    },
    {
      id: 5,
      name: "Rungiri Catchment Sewer Network",
      description: "Construction of sewer lines serving Rungiri and Baraniki areas with trunk (8km), main (2km), and lateral lines (20.3km). Total 30.3km of sewer infrastructure.",
      location: "Rungiri Catchment",
      expectedStart: "Q2 2027",
      duration: "24 months",
      status: "Feasibility Study"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-500/10 px-4 py-2 rounded-full mb-4">
            <span className="text-purple-600 font-bold text-sm">PLANNED</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Proposed Projects
          </h2>
          <p className="text-xl text-gray-600">
            Future infrastructure development initiatives
          </p>
        </div>

        {/* Water Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <i className="fa-solid fa-droplet mr-3"></i>
            Water Projects
          </h3>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-purple-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Item</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Unit</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Beneficiaries</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {waterProjects.map((project, index) => (
                  <tr key={project.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{project.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{project.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">Sum</td>
                    <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">{project.beneficiaries}</td>
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
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Catchment</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Area Served</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Sewer Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Length (Km)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sewerageProjects.map((project, index) => {
                  const catchment = project.name.replace(/ Catchment Sewer (Network|System)/gi, '');
                  const lengthMatch = project.description.match(/Total (\d+\.?\d*)km/i);
                  const length = lengthMatch ? lengthMatch[1] : 'N/A';
                  
                  return (
                    <tr key={project.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{catchment}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{project.location}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">Mixed (Trunk/Main/Lateral)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">{length}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposedProjects;
