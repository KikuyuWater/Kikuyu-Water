import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Departments } from '../data';

export default function ContactUsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    meter: '',
    subject: '',
    message: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [fileError, setFileError] = useState(null);

  const MAX_FILES = 5;
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFileError(null);

    // Validate number of files
    if (uploadedFiles.length + files.length > MAX_FILES) {
      setFileError(`Maximum ${MAX_FILES} files allowed. You can upload ${MAX_FILES - uploadedFiles.length} more file(s).`);
      return;
    }

    // Validate file sizes
    const invalidFiles = files.filter(file => file.size > MAX_FILE_SIZE);
    if (invalidFiles.length > 0) {
      setFileError(`The following file(s) exceed 5MB: ${invalidFiles.map(f => f.name).join(', ')}`);
      return;
    }

    // Add new files
    setUploadedFiles(prev => [...prev, ...files.map(file => ({
      file,
      id: Math.random(),
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2)
    }))]);

    // Reset input
    e.target.value = '';
  };

  const removeFile = (id) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData object to include files
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('department', formData.department);
      submitData.append('meter', formData.meter);
      submitData.append('subject', formData.subject);
      submitData.append('message', formData.message);
      submitData.append('recipient_email', 'kikuyuwater@yahoo.com');
      
      // Add files to FormData
      uploadedFiles.forEach((fileObj, index) => {
        submitData.append(`file_${index}`, fileObj.file);
      });

      // Send to backend API endpoint
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        body: submitData
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus({ type: 'success', message: 'Thank you for your message. We will get back to you soon! A copy has been sent to kikuyuwater@yahoo.com' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        meter: '',
        subject: '',
        message: ''
      });
      setUploadedFiles([]);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact us directly at kikuyuwater@yahoo.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back
          </button>
          <div className="bg-primary/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <i className="fa-solid fa-envelope text-primary text-5xl"></i>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or concern? Send us a department-specific message and we'll get back to you shortly.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-t-4 border-primary">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+254 700 000 000"
              />
            </div>

            {/* Department Selection */}
            <div>
              <label htmlFor="department" className="block text-sm font-bold text-gray-900 mb-2">
                Select Department *
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">-- Choose a department --</option>
                {Departments.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Meter Number */}
            <div>
              <label htmlFor="meter" className="block text-sm font-bold text-gray-900 mb-2">
                Customer Account Number
              </label>
              <input
                type="text"
                id="meter"
                name="meter"
                value={formData.meter}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your customer account number if applicable"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="What is your message about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Please provide detailed information about your inquiry..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label htmlFor="files" className="block text-sm font-bold text-gray-900 mb-2">
                Attach Documents or Photos (Optional)
              </label>
              <p className="text-xs text-gray-600 mb-3">
                Maximum 5 files, up to 5MB each. Supported: Images (JPG, PNG), PDFs, and Documents
              </p>
              <div className="relative">
                <input
                  type="file"
                  id="files"
                  name="files"
                  multiple
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.txt"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* File Error */}
              {fileError && (
                <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <i className="fa-solid fa-exclamation-circle text-red-500 mr-2 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-red-800">{fileError}</span>
                </div>
              )}

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    Attached Files ({uploadedFiles.length}/{MAX_FILES})
                  </h4>
                  <div className="space-y-2">
                    {uploadedFiles.map(fileObj => (
                      <div
                        key={fileObj.id}
                        className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg"
                      >
                        <div className="flex items-center space-x-3 flex-1">
                          <i className="fa-solid fa-file text-primary text-lg"></i>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-900">{fileObj.name}</p>
                            <p className="text-xs text-gray-600">{fileObj.size} MB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(fileObj.id)}
                          className="text-red-500 hover:text-red-700 transition ml-2"
                          title="Remove file"
                        >
                          <i className="fa-solid fa-trash text-lg"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                <div className="flex items-center">
                  <i className={`fa-solid ${submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-3`}></i>
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin"></i>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-primary">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-phone text-primary text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">24/7 Customer Support</p>
            <a href="tel:+254728578098" className="text-primary hover:text-primary/80 font-bold">
              +254 728 578 098
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-blue-500">
            <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-envelope text-blue-500 text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">Response within 24 hours</p>
            <a href="mailto:kikuyuwater@yahoo.com" className="text-blue-500 hover:text-blue-700 font-bold">
              kikuyuwater@yahoo.com
            </a>
          </div>

          {/* Visit */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-green-500">
            <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-map-marker-alt text-green-500 text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-3">Monday - Friday, 8AM - 5PM</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=-1.2438034084438538,36.66087559220491"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 font-bold hover:underline inline-flex items-center space-x-1"
            >
              <span>Kikuyu Town, Kenya</span>
              <i className="fa-solid fa-external-link text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
