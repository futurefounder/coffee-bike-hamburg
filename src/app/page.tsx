import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LogoCloud from "./components/LogoCloud";
import Intro from "./components/Intro";
import Form from "./components/Form";
import CTA from "./components/CTA";
import Navigation from "./components/Navigation";

export default function Home() {
  const headlineCTA_question = "Fragen?";
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Navigation bgClass={""} shouldChangeOnScroll={true} />
          <Hero />
          <LogoCloud />
          <Intro />
          <Benefits />
          <CTA headlineCTA={headlineCTA_question} />
          <Form />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
