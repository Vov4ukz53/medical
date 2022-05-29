import { Header } from "./features/header";
import { SliderSection } from "./features/sliderSection";
import { Footer } from "./features/footer";
import { About } from "./features/about";
import { Benefits } from "./features/benefits";
import { Profiles } from "./features/profiles";

function App() {
  return (
    <>
      <Header />
      <SliderSection />
      <About />
      <Benefits />
      <Profiles />
      <Footer />
    </>
  )
};

export default App;
