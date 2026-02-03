import React, { useState } from 'react';

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I apply for a new water connection?",
      answer: "You can apply online through our customer portal or visit our offices with your ID, proof of ownership/tenancy, and site plan. The process takes 7-14 days."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, bank transfers, and credit/debit cards. You can also set up automatic payments through your bank."
    },
    {
      question: "How do I report a water leak?",
      answer: "Call our 24/7 emergency line at 0758 578 089 or report through the customer portal. For burst pipes, we respond within 2 hours."
    },
    {
      question: "Why is my water bill high this month?",
      answer: "High bills can result from leaks, increased usage, or meter reading issues. Check for leaks, review your usage history, or contact us for a meter inspection."
    },
    {
      question: "Is the water safe to drink?",
      answer: "Yes, our water is tested regularly to meet WHO and KEBS standards."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-start justify-between p-6 text-left"
              >
                <h4 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h4>
                <i className={`fa-solid ${openFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-primary flex-shrink-0 mt-1`}></i>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
            View All FAQs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
