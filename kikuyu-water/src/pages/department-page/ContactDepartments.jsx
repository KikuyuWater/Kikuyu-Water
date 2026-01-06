const ContactDepartments = () => {
  return (
    <section id="contact-departments" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Contact Our Departments
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch with specific departments for your needs
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div
            id="contact-form-section"
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Select Department
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Technical Department</option>
                  <option>Commercial Department</option>
                  <option>Finance Department</option>
                  <option>Procurement Department</option>
                  <option>Human Resource</option>
                  <option>Non-Revenue Water</option>
                  <option>Internal Audit</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div id="contact-info-section" className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Direct Contact Lines
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fa-solid fa-phone text-primary text-xl mr-4 mt-1"></i>
                  <div>
                    <p className="font-bold text-gray-900">Main Office</p>
                    <p className="text-gray-600">+254728578098</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-envelope text-primary text-xl mr-4 mt-1"></i>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <p className="text-gray-600">kikuyuwater@yahoo.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-map-marker-alt text-primary text-xl mr-4 mt-1"></i>
                  <div>
                    <p className="font-bold text-gray-900">Location</p>
                    <p className="text-gray-600">Kikuyu Town, Kiambu County</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="font-bold">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-bold">Closed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-blue-100">
                    Emergency services available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDepartments;
