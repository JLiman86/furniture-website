import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewItems from "./components/NewItems";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Features />
      <NewItems/>
      <FeaturesSecond/>
    </div>
  );
}

export default App;
