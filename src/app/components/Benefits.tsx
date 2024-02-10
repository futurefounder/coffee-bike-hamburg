"use client";
import Link from "next/link";

export default function Benefits() {
  const variants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { duration: 4 },
    },
  };

  return (
    <section id="benefits">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Private Events"
                src="/img/coffee-bike-hamburg-private-events-chrome-1.webp"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl uppercase font-bold sm:text-3xl">
                Private-Events
              </h2>

              <p className="mt-4 mb-12 text-gray-600 text-justify">
                Machen Sie Ihr privates Event zu einem unvergesslichen Erlebnis
                mit unserem mobilen Kaffee-Catering. <br />
                <br /> Ob Geburtstage, Hochzeiten oder Familienfeiern – unser
                Kaffee Bike bringt hochwertigen Kaffeegenuss direkt zu Ihnen.
                Genießen Sie handgemachte Kaffeespezialitäten, zubereitet von
                erfahrenen Baristas, die Ihre Gäste mit Charme und
                Professionalität verwöhnen. Lassen Sie sich von der
                einzigartigen Atmosphäre unseres Kaffee Bikes begeistern und
                schaffen Sie bleibende Erinnerungen.
              </p>

              <Link
                href="#anfragen"
                className="relative px-6 py-3 font-bold text-black group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-coffeeAccent group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black group-hover:border-black"></span>
                <span className="relative text-base text-black group-hover:text-white">
                  Private-Events Anfragen{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefit Firmen Events R */}
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          {/* Text Section with Gray Background on the Left */}
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">Firmen-Events</h2>
              <p className="mt-4 mb-12 text-gray-600 text-justify">
                Bereichern Sie Ihr Firmenevent mit unserem einzigartigen mobilen
                Kaffee-Catering.
                <br />
                <br /> Unser Coffee Bike sorgt nicht nur für außergewöhnlichen
                Kaffeegenuss bei Firmenfeiern, Tagungen und Workshops, sondern
                auch für eine besondere Atmosphäre. Unsere erfahrenen Baristas
                verwöhnen Sie und Ihre Mitarbeiter mit einer Vielfalt an
                hochwertigen Kaffeespezialitäten und sorgen mit Professionalität
                und Charme für ein unvergessliches Erlebnis. Vertrauen Sie auf
                unsere Expertise, um Ihr Firmenevent zu einem vollen Erfolg zu
                machen und bleibende Eindrücke bei allen Beteiligten zu
                hinterlassen.
              </p>
              <Link
                href="#anfragen"
                className="relative px-6 py-3 font-bold text-black group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-coffeeAccent group-hover:translate-x-0 group-hover:translate-y-0 "></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black group-hover:border-black"></span>
                <span className="relative text-base text-black group-hover:text-white">
                  Firmen-Events Anfragen{" "}
                </span>
              </Link>
               
            </div>
          </div>

          {/* Image Section on the Right */}
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Firmen Events"
                src="img/coffee-bike-hamburg-firmen-events.webp"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Benefit Messe */}
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Messe"
                src="/img/coffe-bike-hamburg-messe-2.webp"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl  uppercase font-bold sm:text-3xl">
                Messe-Events
              </h2>

              <p className="mt-4 mb-12 text-gray-600 text-justify">
                Sie planen einen Messestand und möchten potenzielle Kunden und
                Gäste bei einem Gespräch auf einen Kaffee einladen? Wir
                übernehmen die Planung für Ihre ganz eigene Kaffee-Bar, die in
                ganz besonderer Erinnerung bleiben wird. Wenn Sie mögen, bieten
                wir Ihnen Branding-Möglichkeiten vom Kaffeebecher bis zu den
                Werbeplakaten.
              </p>

              <Link
                href="#anfragen"
                className="relative px-6 py-3 font-bold text-black group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-coffeeAccent group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black group-hover:border-black"></span>
                <span className="relative text-base text-black group-hover:text-white">
                  Messe-Events Anfragen{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
