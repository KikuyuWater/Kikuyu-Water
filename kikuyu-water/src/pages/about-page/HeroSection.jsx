const HeroSection = () => {
  return (
    <section
      id="page-title-breadcrumb"
      className="bg-gradient-to-br from-primary to-blue-800 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center text-sm mb-4">
          <a href="/" className="text-blue-200 hover:text-white transition">
            Home
          </a>
          <i className="fa-solid fa-chevron-right text-blue-200 mx-3 text-xs"></i>
          <span className="text-white font-bold">About Us</span>
        </div>
        <h1 className="text-5xl font-black mb-4">
          About Kikuyu Water and Sewerage Company
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          Committed to providing clean, safe, and affordable water services to
          our community since 2003
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
