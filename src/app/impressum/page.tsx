import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation bgClass={"bg-coffeePrimary"} shouldChangeOnScroll={false} />
      <div className="flex-grow bg-white mt-28 mb-10 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <h1 className="text-center text-3xl mb-8 font-bold text-gray-800 sm:text-3xl md:mb-6">
            Impressum gem. §5 TM
          </h1>{" "}
          <br />
          <span className="font-bold">
            {" "}
            Kaffee-Bike-Hamburg.de <br />
          </span>
          <span>
            {" "}
            Benjamin Stoltenberg
            <br />
            Telefon: +49 174 607 92 73 <br />
            Email:{" "}
            <a
              href="mailto:infokaffee-bike-hamburg.de"
              className="transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
            >
              info@kaffee-bike-hamburg.de
            </a>
          </span>
          <p className="mt-6">
            <strong>Disclaimer</strong>
          </p>
          <p>
            Inhalt und Werke dieser Website sind urheberrechtlich geschützt.
            Trotz höchster Sorgfalt kann nicht für die Richtigkeit der
            wiedergegebenen Informationen oder die permanente technische
            Erreichbarkeit garantiert werden. Es wird keine Haftung für den
            Inhalt von extern verlinkten Websites übernommen. Auf deren Inhalte
            haben wir keinen Einfluss und distanzieren uns ausdrücklich. Sollten
            Sie dennoch etwas an unseren Seiten zu beanstanden haben, bitten wir
            um einen einfachen entsprechenden Hinweis, damit wir die Inhalte
            schnellstmöglich entfernen können.
          </p>{" "}
          <p className="mt-6">
            <strong>Quellen</strong>
          </p>
          <p>
            Video Homepage:{" "}
            <a
              className="transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
              href="https://www.pexels.com/de-de/video/person-koffein-hand-becher-6769802/"
            >
              Kelly von Pexels
            </a>
          </p>
          <p>
            {" "}
            Disclaimer:{" "}
            <a
              href="https://www.anwalt.de/vorlage/disclaimer-haftungsausschluss.php"
              title="Haftungsausschluss Vorlage von anwalt.de"
              className="transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
            >
              anwalt.de
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
