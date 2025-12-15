const Faq = () => {
  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions
          </p>
        </div>
        <div className="space-y-4">
          <div
            id="faq-1"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  How do I apply for a new water connection?
                </h4>
                <p className="text-gray-700">
                  You can apply online through our customer portal or visit our
                  offices with your ID, proof of ownership/tenancy, and site
                  plan. The process takes 7-14 days.
                </p>
              </div>
              <i className="fa-solid fa-chevron-down text-primary ml-4"></i>
            </div>
          </div>

          <div
            id="faq-2"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-700">
                  We accept M-Pesa, bank transfers, and credit/debit cards. You can also set up automatic
                  payments through your bank.
                </p>
              </div>
              <i className="fa-solid fa-chevron-down text-primary ml-4"></i>
            </div>
          </div>

          <div
            id="faq-3"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  How do I report a water leak?
                </h4>
                <p className="text-gray-700">
                  Call our 24/7 emergency line at 0758 578 089 or report through
                  the customer portal. For burst pipes, we respond within 2
                  hours.
                </p>
              </div>
              <i className="fa-solid fa-chevron-down text-primary ml-4"></i>
            </div>
          </div>

          <div
            id="faq-4"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Why is my water bill high this month?
                </h4>
                <p className="text-gray-700">
                  High bills can result from leaks, increased usage, or meter
                  reading issues. Check for leaks, review your usage history, or
                  contact us for a meter inspection.
                </p>
              </div>
              <i className="fa-solid fa-chevron-down text-primary ml-4"></i>
            </div>
          </div>

          <div
            id="faq-5"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Is the water safe to drink?
                </h4>
                <p className="text-gray-700">
                  Yes, our water is treated and tested regularly to meet WHO and
                  KEBS standards. We publish water quality reports on
                  our website.
                </p>
              </div>
              <i className="fa-solid fa-chevron-down text-primary ml-4"></i>
            </div>
          </div>
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
