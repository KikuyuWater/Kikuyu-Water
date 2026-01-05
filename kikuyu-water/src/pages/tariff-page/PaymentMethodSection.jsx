const PaymentMethodSection = () => {
  return (
    <section id="payment-methods" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Convenient Payment Options
          </h2>
          <p className="text-xl text-gray-600">
            Multiple ways to pay your water bill
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div
            id="payment-method-1"
            className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition"
          >
            <div className="bg-green-600/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-mobile-screen text-green-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">M-Pesa</h3>
            <p className="text-gray-600 mb-4">Pay via M-Pesa Paybill</p>
            <div className="bg-neutral p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Paybill:</span> 123456
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold">Account:</span> Your meter number
              </p>
            </div>
          </div>

          <div
            id="payment-method-2"
            className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition"
          >
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-building-columns text-primary text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Bank Transfer
            </h3>
            <p className="text-gray-600 mb-4">Direct bank payment</p>
            <div className="bg-neutral p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Bank:</span> Equity Bank
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold">A/C:</span> 0123456789
              </p>
            </div>
          </div>

          <div
            id="payment-method-3"
            className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition"
          >
            <div className="bg-purple-600/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-credit-card text-purple-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Card Payment
            </h3>
            <p className="text-gray-600 mb-4">Visa, Mastercard accepted</p>
            <div className="bg-neutral p-3 rounded-lg">
              <p className="text-sm text-gray-700">Pay online via</p>
              <p className="text-sm font-bold text-gray-700">Customer Portal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodSection;
