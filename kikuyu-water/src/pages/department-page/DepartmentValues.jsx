import React from "react";

const DepartmentValues = () => {
  return (
    <section id="department-values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600">
            Values that guide all our departments
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div
            id="value-card-1"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-handshake text-primary text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
            <p className="text-gray-600 leading-relaxed">
              We uphold the highest standards of honesty, transparency, and
              ethical conduct in all our operations and interactions.
            </p>
          </div>

          <div
            id="value-card-2"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-green-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-heart text-green-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Customer Focus
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our customers are at the heart of everything we do. We strive to
              exceed their expectations through quality service.
            </p>
          </div>

          <div
            id="value-card-3"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-purple-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-lightbulb text-purple-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We embrace new technologies and creative solutions to improve
              service delivery and operational efficiency.
            </p>
          </div>

          <div
            id="value-card-4"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-orange-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-users-gear text-orange-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Teamwork</h3>
            <p className="text-gray-600 leading-relaxed">
              We work collaboratively across departments, leveraging our
              collective strengths to achieve common goals.
            </p>
          </div>

          <div
            id="value-card-5"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-blue-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-leaf text-blue-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sustainability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to environmental stewardship and sustainable
              practices that protect our water resources.
            </p>
          </div>

          <div
            id="value-card-6"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-teal-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-scale-balanced text-teal-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accountability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We take responsibility for our actions and decisions, ensuring
              transparency and trust with all stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentValues;
