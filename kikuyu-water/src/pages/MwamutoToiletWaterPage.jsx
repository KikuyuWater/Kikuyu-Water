import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MwamutoToiletWaterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 transition"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back
          </button>
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
            SERVICE UPDATE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Mwamuto Public Toilet Water Connection
          </h1>
          <p className="text-lg text-blue-100">
            March 23, 2026 | Mwamuto, Lower Kabete, Kikuyu
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img
            src="/Mwimuto.jpeg"
            alt="Mwamuto Public Toilet Water Connection Project"
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          {/* Full Story */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In the quiet, growing community of Mwamuto in Lower Kabete, a new chapter of improved sanitation and dignity has begun. Recently, a modern public toilet was constructed to serve residents—an essential facility designed to meet the needs of a busy and expanding population. However, without a reliable water supply, its full potential could not be realized.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              That gap was addressed through a collaborative effort by Kikuyu Water Company and the County Government of Kiambu, guided by the shared vision of "kuboresha huduma ya maji"—enhancing water services for the benefit of the community.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The project involved laying a 650-meter water pipeline to connect the newly built public toilet to a dependable water source. It began with detailed planning and setting out, ensuring the most efficient route across the terrain. Excavation works followed, opening a trench that would carry the lifeline of clean water through the heart of Mwamuto.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The installation featured 63mm DIN HDPE pipes, chosen for their durability, flexibility, and long service life. The engineering team opted for the use of couplers to join the pipe sections, a method that ensured secure, leak-proof connections while allowing for efficient and timely installation under site conditions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As the pipeline progressed, anticipation grew among residents. The new public toilet, once limited by lack of water, was now on the verge of becoming fully operational—ready to deliver the hygiene and convenience it was built for.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After installation, careful backfilling and compaction restored the ground and safeguarded the pipeline. The system was then subjected to testing and commissioning, with water introduced gradually, pressure levels checked, and all joints inspected for performance.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The moment water began to flow into the newly constructed facility marked a significant milestone. What was once just a structure is now a fully functional public utility, supporting cleanliness, public health, and community well-being.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Today, the project stands as a clear demonstration of progress—where infrastructure meets impact. Through 650 meters of well-laid HDPE pipeline, the promise of "kuboresha huduma ya maji" is now a reality in Mwamuto.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Community Transformation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today, the facility stands as a testament to what can be achieved through partnership and purpose. With a reliable water supply in place, maintaining hygiene is now manageable, and the community can depend on a service that supports their daily needs. Through 650 meters of HDPE pipeline, joined with precision and purpose, the promise of "kuboresha huduma ya maji" now flows steadily in Mwamuto.
            </p>
          </div>

          {/* Project Highlights */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Project Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">650-meter water pipeline constructed</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">63mm DIN HDPE pipes with high-quality couplers</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Partnership between Kikuyu Water Company and County Government</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Improved sanitation and hygiene for the community</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Reliable water supply for public facilities</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="border-t pt-8">
            <p className="text-gray-600 text-center mb-4">
              For more information about water supply projects and services
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+254728578093"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                Contact Us
              </a>
              <a
                href="mailto:info@kikuyuwater.co.ke"
                className="inline-flex items-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition"
              >
                <i className="fa-solid fa-envelope mr-2"></i>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
