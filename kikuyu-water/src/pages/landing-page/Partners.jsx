import wasrebLogo from '../../WASREB-LOGO-2b.png';
import kebsLogo from '../../kebs_logo.png';
import nemaLogo from '../../logo-nema.png';
import kiambuLogo from '../../County_Government_of_Kiambu_Logo.png';

const Partners = () => {
  return (
    <section id="partners-regulators" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
            Our Partners & Regulators
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Working together to deliver quality services
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Partner 1 */}
          <div className="bg-neutral rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition">
            <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
              <img src={wasrebLogo} alt="WASREB logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            </div>
            <h4 className="font-bold text-gray-900 text-lg sm:text-xl">
              WASREB
            </h4>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
              Water Services Regulatory Board
            </p>
          </div>

          {/* Partner 2 */}
          <div className="bg-neutral rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition">
            <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
              <img src={kiambuLogo} alt="Kiambu County logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            </div>
            <h4 className="font-bold text-gray-900 text-lg sm:text-xl">
              County Government
            </h4>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
              Kiambu County
            </p>
          </div>

          {/* Partner 3 */}
          <div className="bg-neutral rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition">
            <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
              <img src={kebsLogo} alt="KEBS logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            </div>
            <h4 className="font-bold text-gray-900 text-lg sm:text-xl">KEBS</h4>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
              Kenya Bureau of Standards
            </p>
          </div>

          {/* Partner 4 */}
          <div className="bg-neutral rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition">
            <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
              <img src={nemaLogo} alt="NEMA logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            </div>
            <h4 className="font-bold text-gray-900 text-lg sm:text-xl">NEMA</h4>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
              National Environment Authority 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
