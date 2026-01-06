import Footer from "../../layouts/Footer";
import BillingFaqSection from "./BillingFaqSection";
import CalculatorSection from "./CalculatorSection";
import ConnectionSection from "./ConnectionSection";
import DomesticTarrifSection from "./DomesticTarrifSection";
import HeroSection from "./HeroSection";
import IndustrialTariffSection from "./IndustrialTariffSection";
import OtherTariffSection from "./OtherTariffSection";
import PaymentMethodSection from "./PaymentMethodSection";
import tariffPDF from "../../assets/Kikuyu.pdf";

const Tariff = () => {
  const downloadTariff = () => {
    const link = document.createElement('a');
    link.href = tariffPDF;
    link.download = 'Kikuyu-Water-Tariff-2025-2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <HeroSection onDownload={downloadTariff} />
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
