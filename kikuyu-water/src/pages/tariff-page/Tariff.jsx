import Footer from "../../layouts/Footer";
import BillingFaqSection from "./BillingFaqSection";
import CalculatorSection from "./CalculatorSection";
import ConnectionSection from "./ConnectionSection";
import DomesticTarrifSection from "./DomesticTarrifSection";
import HeroSection from "./HeroSection";
import IndustrialTariffSection from "./IndustrialTariffSection";
import OtherTariffSection from "./OtherTariffSection";
import PaymentMethodSection from "./PaymentMethodSection";

const Tariff = () => {
  return (
    <>
      <HeroSection />
      <CalculatorSection />
      <DomesticTarrifSection />
      <IndustrialTariffSection />
      <OtherTariffSection />
      <ConnectionSection />
      <BillingFaqSection />
      <PaymentMethodSection />
      <Footer />
    </>
  );
};

export default Tariff;
