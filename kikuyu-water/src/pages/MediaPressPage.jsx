import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MediaPressPage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Media & Press
          </h1>
          <p className="text-lg text-blue-100">
            Share your stories and press releases about our water and sewerage services
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Share Your Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Kikuyu Water Company, we believe in the power of stories. Whether you're a journalist, community member, or organization partner, we invite you to share your stories, experiences, and insights about water, sanitation, and our services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your stories help us understand community needs, celebrate successes, and build stronger partnerships for better water and sewerage services.
            </p>
          </div>

          {/* Featured Stories */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Story Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 flex flex-col">
                <div className="h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={require('../assets/During World Wetlands day 2025 celebrations at  at Ondiri Swamp in Kikuyu.jpeg')}
                    alt="World Wetlands Day 2025 celebrations"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="bg-green-500/10 text-green-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      CONSERVATION
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-auto">
                      February 2, 2025
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    World Wetlands Day 2025 Celebrations
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                    Join us as we celebrate World Wetlands Day at Ondiri Swamp with government officials, conservation partners, and community members united for environmental restoration and awareness.
                  </p>
                  <a
                    href="/world-wetlands-day-2025"
                    className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base mt-auto"
                  >
                    Read Story <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>

              {/* Story Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 flex flex-col">
                <div className="h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="/Mwimuto.jpeg"
                    alt="Mwamuto Public Toilet Water Connection"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      INFRASTRUCTURE
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-auto">
                      March 23, 2026
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Mwamuto Public Toilet Water Connection
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                    A 650-meter water pipeline successfully connects Mwamuto's new public toilet to a dependable water source, transforming community sanitation and hygiene.
                  </p>
                  <a
                    href="/mwamuto-toilet-water"
                    className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base mt-auto"
                  >
                    Read Story <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>

              {/* Story Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 flex flex-col">
                <div className="h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="/Butt fussion.jpg"
                    alt="Advanced water meter installation"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="bg-blue-500/10 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      TECHNOLOGY
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-auto">
                      March 13, 2026
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Advanced Water Meter Installation
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                    DN150 water meter installed using butt fusion welding technology. This modern approach improves water monitoring and strengthens distribution network management.
                  </p>
                  <a
                    href="/"
                    className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base mt-auto"
                  >
                    Read Story <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* How to Submit */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How to Submit Your Story
            </h3>
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-gray-900">Prepare Your Content</h4>
                  <p className="text-sm">Write or compile your story, article, or press release. Include details, photos (if applicable), and relevant information.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-gray-900">Contact Us</h4>
                  <p className="text-sm">Reach out to our communications team via email or phone with your submission.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-gray-900">Review & Approval</h4>
                  <p className="text-sm">Our team will review your submission and may request minor edits for clarity and accuracy.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-gray-900">Publication</h4>
                  <p className="text-sm">Once approved, your story will be featured on our announcements section and social media channels.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Types of Stories */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Types of Stories We Welcome
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Community Impact Stories</h4>
                <p className="text-gray-700">Share how our water services have improved your community's health and quality of life.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Infrastructure Updates</h4>
                <p className="text-gray-700">Report on new water supply projects, pipeline installations, and service improvements.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Environmental & Conservation</h4>
                <p className="text-gray-700">Stories about water conservation, sustainable practices, and environmental initiatives.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Customer Testimonials</h4>
                <p className="text-gray-700">Share your experience as a customer and how our services have made a difference.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Press Releases</h4>
                <p className="text-gray-700">Official announcements about company milestones, partnerships, and major initiatives.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Event Coverage</h4>
                <p className="text-gray-700">Coverage of community events, awareness campaigns, and public engagement activities.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-8">
              Ready to share your story? Contact our Communications and Public Relations team:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+254728578093"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                Call Us
              </a>
              <a
                href="mailto:info@kikuyuwater.co.ke"
                className="inline-flex items-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition"
              >
                <i className="fa-solid fa-envelope mr-2"></i>
                Email Us
              </a>
              <a
                href="https://wa.me/254728578098?text=Hello%20Kikuyu%20Water%2C%20I%20would%20like%20to%20share%20a%20story."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
