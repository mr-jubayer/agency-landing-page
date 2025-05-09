import Companies from "./components/companies/Companies";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ServiceOne from "./components/service-one/ServiceOne";
import ServiceTwo from "./components/service-two/ServiceTwo";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Companies />
      <ServiceOne />
      <ServiceTwo />
    </div>
  );
}

export default App;
