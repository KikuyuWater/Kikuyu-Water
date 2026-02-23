import React, { useState } from "react";

const ContactDepartments = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Technical Department",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`[${formData.department}] Contact Form Submission`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Department: ${formData.department}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:info@kikuyuwater.co.ke?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form and show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        department: "Technical Department",
        message: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

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
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <i className="fa-solid fa-check-circle text-green-600 text-xl mr-3"></i>
                <p className="text-green-800">Your email client has been opened. Please send the email to complete your message.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Select Department
                </label>
                <select 
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Technical Department</option>
                  <option>Commercial Department</option>
                  <option>Finance Department</option>
                  <option>Procurement Department</option>
                  <option>Human Resource</option>
                  <option>Non-Revenue Water</option>
                  <option>Internal Audit</option>
                  <option>Customer Relations</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Type your message here... (minimum 10 characters)"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-bold transition ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-primary text-white hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
                    <p className="text-gray-600">info@kikuyuwater.co.ke</p>
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
