import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";
import CTA from "../components/CTA";

export default function Impressum() {
  const headlineCTA_question = "Fragen zu Kaffee?";

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation bgClass={"bg-coffeePrimary"} shouldChangeOnScroll={false} />
      <div className="flex-grow py-6 mb-10 bg-white mt-28 sm:py-8 lg:py-12">
        {" "}
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800 sm:text-3xl md:mb-6">
          Coffee Bike Hamburg - Blog{" "}
        </h1>{" "}
        <Posts />
      </div>
      <CTA headlineCTA={headlineCTA_question} />\
      <Footer />
    </div>
  );
}
