import HeroSection from "./HeroSection";
import DepartmentsOverviewSection from "./DepartmentsOverviewSection";
import OrganizationalStructure from "./OrganizationalStructure";
import DepartmentValues from "./DepartmentValues";
import Footer from "../../layouts/Footer";
import { useNavigate } from "react-router-dom";

const DepartmentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <DepartmentsOverviewSection />
      <OrganizationalStructure />
      <DepartmentValues />
      
      {/* Contact Us Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            Have Questions About Our Departments?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send us a message and specify which department you'd like to reach. We'll connect you with the right team.
          </p>
          <button
            onClick={() => navigate('/contact-us')}
            className="bg-white text-primary px-8 sm:px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <i className="fa-solid fa-envelope"></i>
            <span>Contact Us</span>
          </button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default DepartmentPage;
