import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation bgClass={"bg-coffeePrimary"} shouldChangeOnScroll={false} />
      <div className="flex-grow bg-white mt-32 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
            Datenschutzerklärung{" "}
          </h1>

          <div className=" space-y-4">
            <p>Verantwortlicher für die Datenverarbeitung ist:</p>
            <p>
              <span className="font-bold"> Kaffee-Bike-Hamburg.de</span>
              <br />
              Benjamin Stoltenberg
              <br />
              Email:{" "}
              <a
                href="mailto:info@coffee-bike-hamburg.de"
                className="text-coffeeAccent hover:underline"
              >
                info@coffee-bike-hamburg.de
              </a>
            </p>
            <p>
              Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz
              Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend
              informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>
            <h2 className="text-xl font-semibold">
              1. Zugriffsdaten und Hosting
            </h2>
            <p>
              Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person
              zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver
              lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den
              Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit
              des Abrufs, übertragene Datenmenge und den anfragenden Provider
              (Zugriffsdaten) enthält und den Abruf dokumentiert.
            </p>
            <h2 className="text-xl font-semibold">
              2. Datenerhebung und -verwendung zur Vertragsabwicklung
            </h2>
            <p>
              Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen
              Ihrer Bestellung oder bei einer Kontaktaufnahme mit uns (z.B. per
              Kontaktformular oder E-Mail) mitteilen. Pflichtfelder werden als
              solche gekennzeichnet, da wir in diesen Fällen die Daten zwingend
              zur Vertragsabwicklung, bzw. zur Bearbeitung Ihrer Kontaktaufnahme
              benötigen und Sie ohne deren Angabe die Bestellung nicht
              abschließen, bzw. die Kontaktaufnahme nicht versenden können.
              Welche Daten erhoben werden, ist aus den jeweiligen
              Eingabeformularen ersichtlich. Wir verwenden die von ihnen
              mitgeteilten Daten gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO
              ausschließlich für die Vertragsabwicklung und Bearbeitung Ihrer
              Anfragen.
            </p>
            <p className="pt-2">
              Bei einer Kontaktaufnahme mit uns (z.B. per Kontaktformular oder
              E-Mail) werden Ihre Angaben zur Bearbeitung der Kontaktanfrage und
              deren Abwicklung nur für geschäftliche Zwecke gespeichert.
            </p>
            <h2 className="text-xl font-semibold">3. Datenweitergabe</h2>
            <p>
              Zur Abwicklung Ihrer Bestellung und um Ihre Kontaktanfragen zu
              bearbeiten, geben wir Ihre Daten ausschließlich an die Unternehmen
              weiter, die mit der Bearbeitung Ihrer Anfrage beauftragt sind.
              Eines der Unternehmen, mit denen wir zusammenarbeiten, um Ihre
              Anfrage an uns digital weiterzuleien, ist Formspark. Ihre
              Kontaktinformationen werden nur zu diesen Zwecken verwendet.{" "}
              Weitere Informationen zur Datenschutzrichtlinie von Formspark
              finden Sie unter:
              <a
                href="https://formspark.io/legal/privacy-policy/"
                className="text-coffeeAccentDark"
              >
                &nbsp; Formspark Datenschutzrichtlinie
              </a>
              .
            </p>
            <h2 className="text-xl font-semibold">
              4. Kontaktmöglichkeiten und Ihre Rechte
            </h2>
            <p>Sie haben:</p>
            <ul className="list-disc pl-5">
              <li>
                gemäß Art. 15 DSGVO das Recht, in dem dort bezeichneten Umfang
                Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten
                zu verlangen
              </li>
              <li>
                gemäß Art. 16 DSGVO das Recht, unverzüglich die Berichtigung
                unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten
                personenbezogenen Daten zu verlangen
              </li>
              <li>
                gemäß Art. 17 DSGVO das Recht, die Löschung Ihrer bei uns
                gespeicherten personenbezogenen Daten zu verlangen, soweit nicht
                die weitere Verarbeitung zur Ausübung des Rechts auf freie
                Meinungsäußerung und Information; zur Erfüllung einer
                rechtlichen Verpflichtung erforderlich ist
              </li>
            </ul>
            <p>
              Einwilligungen oder Widerspruch gegen eine bestimmte
              Datenverwendung wenden Sie sich bitte direkt an uns über die
              Kontaktdaten in unserem Impressum.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">5. Widerspruchsrecht</h2>
            <p>
              Soweit wir zur Wahrung unserer im Rahmen einer Interessensabwägung
              überwiegenden berechtigten Interessen personenbezogene Daten wie
              oben erläutert verarbeiten, können Sie dieser Verarbeitung mit
              Wirkung für die Zukunft widersprechen. Kontakieren Sie uns hierzu
              einfach unter der o.g. Email-Adresse.
            </p>
            <br /> <br />
            Datenschutzerklärung erstellt nachg Vorlage von Trusted Shops
            Rechtstexter in Kooperation mit Wilde Beuger Solmecke Rechtsanwälte.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
