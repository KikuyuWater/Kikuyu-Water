const BillingFaqSection = () => {
  return (
    <section id="billing-faqs" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2 sm:mb-3">
            Billing & Tariff FAQs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Common questions about water charges and billing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div
            id="billing-faq-1"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
              <i className="fa-solid fa-question-circle text-primary mr-3 mt-1"></i>
              How is my bill calculated?
            </h4>
            <p className="text-gray-700">
              Your bill is based on actual meter readings, calculated using
              tiered rates. Higher consumption results in higher per-unit
              charges to encourage conservation.
            </p>
          </div>

          <div
            id="billing-faq-2"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
              <i className="fa-solid fa-question-circle text-primary mr-3 mt-1"></i>
              What is the sewerage charge?
            </h4>
            <p className="text-gray-700">
              Sewerage charge is 75% of your water consumption bill, covering
              wastewater collection, treatment, and disposal services.
            </p>
          </div>

          <div
            id="billing-faq-3"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
              <i className="fa-solid fa-question-circle text-primary mr-3 mt-1"></i>
              Can I dispute my bill?
            </h4>
            <p className="text-gray-700">
              Yes, you can request a meter re-reading or testing within 7 days
              of receiving your bill. Contact customer service to initiate the
              process.
            </p>
          </div>

          <div
            id="billing-faq-4"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
              <i className="fa-solid fa-question-circle text-primary mr-3 mt-1"></i>
              Are there payment plans available?
            </h4>
            <p className="text-gray-700">
              Yes, we offer flexible payment plans for customers with
              outstanding balances. Contact our billing department to arrange a
              suitable plan.
            </p>
          </div>

          <div
            id="billing-faq-5"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
              <i className="fa-solid fa-question-circle text-primary mr-3 mt-1"></i>
              What happens if I don't pay on time?
            </h4>
            <p className="text-gray-700">
              A 1% late payment penalty is charged monthly on overdue amounts.
              Disconnection occurs after 30 days, with a KSh 1,000 reconnection
              fee.
            </p>
          </div>

          <div
            id="billing-faq-6"
            className="bg-neutral rounded-xl p-6 hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
              <i className="fa-solid fa-question-circle text-primary mr-3 mt-1"></i>
              How often are meters read?
            </h4>
            <p className="text-gray-700">
              Meters are read monthly on scheduled dates. You can also submit
              self-readings through the customer portal for billing accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingFaqSection;
