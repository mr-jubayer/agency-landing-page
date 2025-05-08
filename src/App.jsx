import Companies from "./components/companies/Companies";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ServiceOne from "./components/service-one/ServiceOne";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Companies />
      <ServiceOne />
    </div>
  );
}

export default App;
