import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewItems from "./components/NewItems";
import Products from "./components/Products";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Features />
      <NewItems/>
      <FeaturesSecond/>
      <Products/>
    </div>
  );
}

export default App;
