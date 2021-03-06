import { Header } from "./features/header";
import { SliderSection } from "./features/sliderSection";
import { Footer } from "./features/footer";
import { About } from "./features/about";
import { Benefits } from "./features/benefits";
import { Profiles } from "./features/profiles";
import { Testimonails } from "./features/testimonails";
import { ContactUs } from "./features/contactUs";
import { OurInfo } from "./features/ourInfo";

function App() {
  return (
    <>
      <Header />
      <main>
        <SliderSection />
        <About />
        <Benefits />
        <Profiles />
        <Testimonails />
        <ContactUs />
        <OurInfo />
      </main>
      <Footer />
    </>
  )
};

export default App;
