"use client";

export default function Intro() {
  const variants = {
    offscreen: { opacity: 0, y: 10 },
    onscreen: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-24">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <p className="mb-4 text-4xl font-extrabold text-coffeeAccent md:mb-6 md:text-lg xl:text-5xl">
                Moin, Moin!{" "}
              </p>
              <h1 className="mb-8 text-2xl font-bold text-black sm:text-5xl md:mb-12 md:text-4xl">
                Von Ihrem Coffee-Bike Hamburg
              </h1>
              <p className="mb-8 text-justify leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                Wir bieten Ihnen ein genußvolles{" "}
                <span className="font-bold"> Kaffee-Erlebnis</span>. Egal ob bei
                <span className="font-bold">
                  {" "}
                  privaten Veranstaltungen oder Firmen-Events
                </span>
                . Unser mobiles Kaffee-Catering sorgt für das perfekte
                Kaffeevergnügen an jedem Ort in Hamburg und Umgebung.
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#anfragen"
                  className="relative px-6 py-3 font-bold text-black group text-center"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-coffeeAccent group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black group-hover:border-black"></span>
                  <span className="relative text-base text-black group-hover:text-white">
                    Zum Kontaktformular
                  </span>
                </a>

                <a
                  href="#benefits"
                  className="inline-block bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Mehr Erfahren{" "}
                </a>
              </div>
            </div>

            <div className="h-full overflow-hidden rounded-lg  lg:h-auto xl:w-12/12">
              <img
                src="/img/coffee-bike-hamburg-bike.webp"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </>
    // <div className="bg-white py-6 sm:py-8 lg:py-12">
    //   <div className="mx-auto max-w-screen-md px-4 md:px-8">
    //     <h1 className="mb-4 uppercase text-3xl font-extrabold text-coffeeAccent sm:text-3xl md:mb-6">
    //       GENIEßEN SIE DEN MOMENT
    //     </h1>

    //     <p className="mb-6 text-black font-bold sm:text-lg md:mb-8">
    //       Erstklassiger Kaffee, einzigartiger Service.
    //     </p>

    //     <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
    // Wir bieten ein genußvolles Kaffee-Erlebnis. Egal ob bei privaten
    // Veranstaltungen oder Firmen-Events. Unser mobiles Kaffee-Catering
    // sorgt für das perfekte Kaffeevergnügen an jedem Ort in Hamburg und
    // Umgebung.
    //     </p>
    //   </div>
    // {/* <div
    //   className="min-h-screen mt-24 bg-cover bg-no-repeat bg-fixed bg-center"
    //   style={{
    //     backgroundImage:
    //       "url('https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    //   }}
    // ></div> */}
    // </div>
  );
}
