import Companies from "./components/companies/Companies";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Pricing from "./components/pricing/Pricing";
import ServiceOne from "./components/service-one/ServiceOne";
import ServiceTwo from "./components/service-two/ServiceTwo";
import Testimonial from "./components/testimonial/Testimonial";
import Trial from "./components/trial/Trial";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Companies />
      <ServiceOne />
      <ServiceTwo />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
