import CalculatorSection from "./CalculatorSection";
import DomesticTarrifSection from "./DomesticTarrifSection";
import HeroSection from "./HeroSection";
import IndustrialTariffSection from "./IndustrialTariffSection";
import OtherTariffSection from "./OtherTariffSection";

const Tariff = () => {
  return (
    <>
      <HeroSection />
      <CalculatorSection />
      <DomesticTarrifSection />
      <IndustrialTariffSection />
      <OtherTariffSection />
    </>
  );
};

export default Tariff;
