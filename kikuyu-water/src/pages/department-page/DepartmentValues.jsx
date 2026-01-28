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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Customer Focus */}
          <div
            id="value-card-1"
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
              exceed their expectations through quality service and responsiveness.
            </p>
          </div>

          {/* Professionalism */}
          <div
            id="value-card-2"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-blue-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-briefcase text-blue-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professionalism
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We maintain the highest standards of professional conduct, expertise,
              and competence in all our work and interactions.
            </p>
          </div>

          {/* Integrity */}
          <div
            id="value-card-3"
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

          {/* Our Employees */}
          <div
            id="value-card-4"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-orange-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-users text-orange-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Employees</h3>
            <p className="text-gray-600 leading-relaxed">
              We value our people and invest in their growth, development, and
              wellbeing as the foundation of our success.
            </p>
          </div>

          {/* Good Citizenship */}
          <div
            id="value-card-5"
            className="bg-neutral rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-purple-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-globe text-purple-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Good Citizenship
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to being responsible corporate citizens, contributing
              positively to our community and environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentValues;
