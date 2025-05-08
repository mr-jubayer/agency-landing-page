import Companies from "./components/companies/Companies";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Companies />
    </div>
  );
}

export default App;
