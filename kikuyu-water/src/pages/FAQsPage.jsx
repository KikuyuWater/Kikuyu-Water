import React, { useState } from 'react';
import Footer from '../layouts/Footer';

const FAQsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqCategories = [
    {
      category: 'Account & Billing',
      icon: 'fa-receipt',
      faqs: [
        {
          question: 'How do I check my water bill?',
          answer: 'You can check your water bill by visiting our Customer Portal using your account number and password. Alternatively, you can contact our customer service team at the contact details provided on our website.'
        },
        {
          question: 'How often am I billed?',
          answer: 'Water bills are issued monthly, typically on the same date each month. The billing cycle depends on your meter reading schedule.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept payments via M-Pesa Paybill (810100), bank transfers through KCB, Equity Bank, Family Bank, and Post Bank, as well as direct payments at our offices.'
        },
        {
          question: 'How do I update my account information?',
          answer: 'You can update your account information through the Customer Portal or by visiting our main office. Please bring your account number and valid identification.'
        },
        {
          question: 'What is included in my water bill?',
          answer: 'Your bill includes the cost of water consumption, sewerage charges (if applicable), waste disposal fees, and any applicable taxes or levies.'
        }
      ]
    },
    {
      category: 'Water Supply & Services',
      icon: 'fa-water',
      faqs: [
        {
          question: 'Why is there no water supply?',
          answer: 'Water supply interruptions may be due to planned maintenance, pipe bursts, or water shortage. Check our Notices page for updates or contact our customer service for more information.'
        },
        {
          question: 'How do I report a water leak?',
          answer: 'You can report a water leak through our Customer Portal, by calling our customer service line, or by visiting our office. Please provide your account number and describe the location of the leak.'
        },
        {
          question: 'How can I apply for a new water connection?',
          answer: 'Visit our New Connection page to view the requirements and process. You can also contact our customer service team or visit our office for assistance with your application.'
        },
        {
          question: 'What is the water quality standard?',
          answer: 'Our water meets Kenya Bureau of Standards (KEBS) and World Health Organization (WHO) quality standards. We regularly test our water to ensure it is safe for consumption.'
        },
        {
          question: 'How can I reduce my water consumption?',
          answer: 'Consider fixing leaks promptly, installing water-efficient fixtures, and practicing water conservation habits like shorter showers and fixing running taps.'
        }
      ]
    },
    {
      category: 'Meters & Connections',
      icon: 'fa-gauge-high',
      faqs: [
        {
          question: 'How do I take a meter reading?',
          answer: 'Your water meter is usually located at the entrance of your property. Take note of the numbers shown on the meter display. If you have difficulty, our staff can assist you.'
        },
        {
          question: 'My meter appears to be faulty. What should I do?',
          answer: 'Contact our customer service team to report the faulty meter. We will arrange for inspection and replacement if necessary. There may be a fee for meter replacement if damage is customer-caused.'
        },
        {
          question: 'Can I relocate my water meter?',
          answer: 'Meter relocation can be arranged for a fee. Contact our office to request this service and discuss the cost involved.'
        },
        {
          question: 'What are the charges for a new connection?',
          answer: 'Connection charges vary based on location and distance from our supply lines. Visit our New Connection page or contact our office for a specific quote.'
        },
        {
          question: 'How long does it take to get a new water connection?',
          answer: 'The timeline depends on various factors including property survey, documentation verification, and installation. Typically, the process takes 2-4 weeks after approval of your application.'
        }
      ]
    },
    {
      category: 'Customer Service',
      icon: 'fa-headset',
      faqs: [
        {
          question: 'What are your office hours?',
          answer: 'Our main office is open Monday to Friday from 8:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays.'
        },
        {
          question: 'How do I contact customer service?',
          answer: 'You can reach us through phone, email, or by visiting our office. Visit our Contact Us page for all communication channels and office locations.'
        },
        {
          question: 'What is your complaint resolution process?',
          answer: 'We handle complaints seriously and aim to resolve them within 30 days. You can submit a complaint through our website, visit our office, or call customer service.'
        },
        {
          question: 'Do you have a customer service charter?',
          answer: 'Yes, we have a Customer Service Charter that outlines our commitment to service quality. You can view it on our website or request a copy from our office.'
        },
        {
          question: 'How do I provide feedback?',
          answer: 'We welcome your feedback! You can submit feedback through our Contact Us form, email, or by speaking with our staff at the office.'
        }
      ]
    },
    {
      category: 'Payments & Arrears',
      icon: 'fa-money-bill',
      faqs: [
        {
          question: 'What happens if I don\'t pay my bill on time?',
          answer: 'Late payment may result in disconnection of your water supply. We recommend paying within 30 days of receiving your bill to avoid penalties.'
        },
        {
          question: 'How can I settle outstanding arrears?',
          answer: 'You can settle arrears through our payment methods. Contact customer service to discuss a payment plan if you have a large outstanding balance.'
        },
        {
          question: 'Is there a discount for bulk water consumption?',
          answer: 'We have tiered pricing structures for different consumption levels. Visit our Tariffs page to see the detailed pricing or contact our office for more information.'
        },
        {
          question: 'Can I apply for a payment plan?',
          answer: 'Yes, if you have outstanding arrears, we can arrange a payment plan. Contact our customer service team to discuss your options.'
        },
        {
          question: 'How do I get a receipt for my payment?',
          answer: 'For M-Pesa payments, you receive an automatic receipt via SMS. For other payment methods, request a receipt from the payment point or our office.'
        }
      ]
    },
    {
      category: 'Technical & Safety',
      icon: 'fa-wrench',
      faqs: [
        {
          question: 'Is it safe to drink tap water from Kikuyu Water?',
          answer: 'Yes, our water is treated and meets all safety standards. It is safe for drinking, cooking, and general household use. If you have concerns, feel free to contact us.'
        },
        {
          question: 'Why is there discoloration in my water?',
          answer: 'Discoloration may be due to pipe sediment or maintenance activities. Run your tap for a few minutes. If the problem persists, contact our customer service team.'
        },
        {
          question: 'My water pressure is low. What can I do?',
          answer: 'Low pressure may be due to system-wide issues or problems with your internal plumbing. Check if other taps have normal pressure. Contact us if the issue is widespread.'
        },
        {
          question: 'What should I do during water shut-offs?',
          answer: 'During planned maintenance, store water in clean containers if possible. Follow announcements on our Notices page for scheduled shut-off timings.'
        }
      ]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold">HELP CENTER</span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about water bills, connections, services, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-neutral">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {faqCategories.map((cat, idx) => (
              <a
                key={idx}
                href={`#category-${idx}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-l-4 border-primary/50 hover:border-primary"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${cat.icon} text-primary text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{cat.category}</h3>
                </div>
              </a>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`category-${categoryIndex}`} className="scroll-mt-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${category.icon} text-primary text-2xl`}></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 1000 + faqIndex;
                    const isExpanded = expandedIndex === itemIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
                      >
                        <button
                          onClick={() => toggleExpand(itemIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition text-left"
                        >
                          <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                          <i
                            className={`fa-solid fa-chevron-down text-primary text-lg transition-transform flex-shrink-0 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          ></i>
                        </button>

                        {isExpanded && (
                          <div className="px-6 py-5 bg-gradient-to-r from-blue-50 to-transparent border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still Need Help Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-2xl p-8 border-l-4 border-primary text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Our customer service team is here to help. Reach out through any of our communication channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                <i className="fa-solid fa-envelope mr-2"></i>
                Contact Us
              </a>
              <a
                href="/customer-portal"
                className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition border-2 border-primary"
              >
                <i className="fa-solid fa-user mr-2"></i>
                Customer Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQsPage;
