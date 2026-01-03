import HeroSection from "./HeroSection";
import DepartmentsOverviewSection from "./DepartmentsOverviewSection";
import OrganizationalStructure from "./OrganizationalStructure";
import DepartmentValues from "./DepartmentValues";
import ContactDepartments from "./ContactDepartments";
import Footer from "../../layouts/Footer";

const DepartmentPage = () => {
  return (
    <>
      <HeroSection />
      <DepartmentsOverviewSection />
      <OrganizationalStructure />
      <DepartmentValues />
      <ContactDepartments />
      <Footer />
    </>
  );
};

export default DepartmentPage;
