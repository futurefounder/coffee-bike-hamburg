import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation bgClass={"bg-coffeePrimary"} shouldChangeOnScroll={false} />
      <div className="flex-grow bg-white mt-32 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
            Impressum gem. §5 TM
          </h1>
          <span className="font-bold">
            {" "}
            Coffee Bike Hamburg <br />
          </span>
          <span>
            {" "}
            Benjamin Stoltenberg
            <br />
            Telefon: +49 174 607 92 73 <br />
            Email:{" "}
            <a
              href="mailto:info@coffee-bike-hamburg.de"
              className="transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
            >
              info@coffee-bike-hamburg.de
            </a>
          </span>

          <p className="mt-12">
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
          </p>
          <p>
            Quelle:{" "}
            <a
              href="https://www.anwalt.de/vorlage/disclaimer-haftungsausschluss.php"
              title="Haftungsausschluss Vorlage von anwalt.de"
            >
              Disclaimer von anwalt.de
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
