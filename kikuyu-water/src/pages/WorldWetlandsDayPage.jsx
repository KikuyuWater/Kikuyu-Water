import React from 'react';
import { useNavigate } from 'react-router-dom';
import wetlandsImage from '../assets/During World Wetlands day 2025 celebrations at  at Ondiri Swamp in Kikuyu.jpeg';

export default function WorldWetlandsDayPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-white hover:text-green-100 mb-6 transition"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back
          </button>
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
            CONSERVATION
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            World Wetlands Day 2025 Celebrations at Ondiri Swamp
          </h1>
          <p className="text-lg text-green-100">
            February 2, 2025 | Ondiri Wetland, Kikuyu
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img
            src={wetlandsImage}
            alt="World Wetlands Day 2025 celebrations at Ondiri Swamp in Kikuyu"
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The World Wetlands Day 2025 celebrations at Ondiri Swamp in Kikuyu were held on 2 February 2025 
              as part of the national commemoration of the global environmental day dedicated to wetlands conservation. 
              The event brought together national and county government officials, environmental institutions, 
              conservation partners, schools, community members, and other stakeholders to highlight the ecological 
              importance of wetlands and the urgent need to protect them for present and future generations.
            </p>
          </div>

          {/* Event Location and Activities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-500/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <i className="fa-solid fa-location-dot text-green-600"></i>
              </span>
              Event Location and Activities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The celebrations were hosted near Ondiri Wetland, one of Kenya's most significant peat wetlands 
              and a critical water source within Kiambu County. Activities began at the Alliance High School 
              rugby grounds, from where participants proceeded to the wetland in a symbolic procession 
              underscoring collective responsibility in environmental stewardship. The event featured guided 
              tours of the swamp, allowing participants to observe firsthand the ecological value of the wetland, 
              including its role in water purification, flood regulation, biodiversity conservation, and climate resilience.
            </p>
          </div>

          {/* Government Commitment */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <i className="fa-solid fa-handshake text-blue-600"></i>
              </span>
              Government Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              During the celebrations, government representatives reaffirmed Kenya's commitment to the protection 
              and sustainable management of wetlands in line with national environmental policies and international 
              obligations. Particular emphasis was placed on ongoing efforts to safeguard Ondiri Wetland from 
              encroachment, pollution, and unsustainable land use, with calls for stronger collaboration between 
              government agencies, local communities, and development partners. The importance of conserving 
              riparian land and restoring degraded sections of the wetland was repeatedly highlighted.
            </p>
          </div>

          {/* Conservation Activities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-500/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <i className="fa-solid fa-tree text-green-600"></i>
              </span>
              Tree Planting and Restoration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tree planting and wetland restoration activities formed a central part of the day's programme, 
              symbolizing long-term investment in ecosystem recovery. Community engagement initiatives, including 
              conservation awareness activities and an environmental run around the wetland, reinforced the message 
              that wetlands protection is a shared responsibility that requires active public participation.
            </p>
          </div>

          {/* Conclusion */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Overall, the World Wetlands Day 2025 celebrations at Ondiri Swamp served as a powerful platform 
              to raise awareness, strengthen partnerships, and renew commitment towards conserving wetlands as 
              vital natural assets. The event underscored Ondiri Wetland's growing national significance and its 
              potential recognition as a site of international importance, while reaffirming the need to balance 
              environmental protection with sustainable development in the Kikuyu area and beyond.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Event Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">National and county government officials participation</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Guided tours showcasing wetland ecological value</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Tree planting and restoration activities</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Environmental run around the wetland</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Community awareness and engagement initiatives</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="border-t pt-8">
            <p className="text-gray-600 text-center mb-4">
              For more information about wetlands conservation initiatives
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
                href="mailto:kikuyuwater@yahoo.com"
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
