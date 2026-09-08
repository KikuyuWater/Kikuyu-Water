import Footer from "../../layouts/Footer";
import BillingFaqSection from "./BillingFaqSection";
import CalculatorSection from "./CalculatorSection";
import ConnectionSection from "./ConnectionSection";
import DomesticTarrifSection from "./DomesticTarrifSection";
import HeroSection from "./HeroSection";
import IndustrialTariffSection from "./IndustrialTariffSection";
import MiscellaneousChargesSection from "./MiscellaneousChargesSection";
import PaymentMethodSection from "./PaymentMethodSection";

const Tariff = () => {
  const downloadTariff = () => {
    const link = document.createElement('a');
    link.href = '/Tariff.pdf';
    link.download = 'Tariff.pdf';
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
      <ConnectionSection />
      <MiscellaneousChargesSection />
      <BillingFaqSection />
      <PaymentMethodSection />
      <Footer />
    </>
  );
};

export default Tariff;
