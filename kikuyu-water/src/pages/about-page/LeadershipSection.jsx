import React from "react";

const LeadershipSection = () => {
  return (
    <section
      id="leadership-message"
      className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="h-[500px] overflow-hidden rounded-2xl">
            <img
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c3273bf6e1-eae3da3a0c2915e52b49.png"
              alt="professional African CEO in business suit standing confidently in modern office, corporate portrait photography"
            />
          </div>
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold">MESSAGE FROM THE CEO</span>
            </div>
            <h2 className="text-4xl font-black mb-6">Leadership Statement</h2>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Welcome to Kikuyu Water and Sewerage Company. As we continue our
              journey of excellence in service delivery, our focus remains
              unwavering on meeting and exceeding customer expectations while
              ensuring sustainable water resource management.
            </p>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Our achievements over the past two decades are a testament to the
              dedication of our team and the trust of our customers. We remain
              committed to innovation, transparency, and community engagement as
              we work towards our vision of being Kenya's leading water service
              provider.
            </p>
            <div className="mb-8">
              <p className="text-2xl font-bold mb-1">Eng. Peter K. Mwangi</p>
              <p className="text-blue-100">Chief Executive Officer</p>
            </div>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition flex items-center">
              <i className="fa-solid fa-download mr-3"></i>
              Download Full Statement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
