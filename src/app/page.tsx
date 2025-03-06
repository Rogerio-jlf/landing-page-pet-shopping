import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
