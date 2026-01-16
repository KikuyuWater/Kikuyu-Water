const SourcesSection = () => {
  return (
    <section id="water-sources" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Main Water Sources</h2>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
          <p className="text-gray-700 leading-relaxed">
            KIWASCO's water supply is predominantly derived from groundwater sources. The company operates a total of forty-three (43) boreholes across its service area. Out of these, thirty-one (31) boreholes are currently operational, while five (5) boreholes have been decommissioned due to low yields. The remaining boreholes are either non-operational or intermittently functional due to technical and operational constraints.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Groundwater remains the backbone of KIWASCO's water production system, supplying the bulk of water distributed to consumers. However, the heavy reliance on boreholes presents both operational and financial challenges, particularly in relation to energy costs and system sustainability.
          </p>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Supplementary Water Sources</h3>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-gray-700 leading-relaxed">
            The existing supply deficit is partially bridged through community-managed water projects and privately owned boreholes within the service area. These supplementary sources play a critical role in meeting local water needs, especially during periods of reduced production from KIWASCO's boreholes. However, there is currently no verifiable or consolidated data on the volumes abstracted from these alternative sources, making comprehensive water balance assessment difficult.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SourcesSection;
