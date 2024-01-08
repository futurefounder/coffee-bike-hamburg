export default function Waves() {
  return (
    <div className="bg-coffeePrimary pt-4 sm:pt-10 lg:pt-12 ">
      {" "}
      <svg
        className="waves relative w-full h-[15vh] mb-[-7px] min-h-[100px] max-h-[150px]"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
      <footer className="mx-auto max-w-screen-3xl mt-auto px-4 md:px-8 ">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            {/* <!-- logo - start --> */}
            <div className="mb-4 lg:-mt-2">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-100 md:text-base"
                aria-label="logo"
              >
                <svg
                  width="95"
                  height="94"
                  viewBox="0 0 95 94"
                  className="h-auto w-5 text-coffeeAccent"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                Coffee Bike Hamburg
              </a>
            </div>
            {/* <!-- logo - end --> */}

            <p className="mb-6 text-slate-100 sm:pr-8">
              Kaffee auf Rädern, Genuss an jedem Ort
            </p>

            {/* <!-- social - start --> */}
            <div className="flex gap-4">
              <a
                href="/"
                target="_blank"
                className="text-slate-100 transition duration-100 hover:text-coffeeAccent active:text-coffeeAccent"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="/"
                target="_blank"
                className="text-slate-100 transition duration-100 hover:text-coffeeAccent active:text-coffeeAccent"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            {/* <!-- social - end --> */}
          </div>

          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-slate-100">
              Über Coffee Bike Hamburg
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="/"
                  className="text-slate-300 transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  Impressum
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-300 transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  Jobs
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-300 transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-slate-100">
              Kontakt
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <span className="text-gray-300">
                  <span className="font-bold"> Benjamin Stoltenberg</span>
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
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-300 transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  Häufige Fragen / FAQ
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-slate-100">
              Rechtliches
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="/"
                  className="text-gray-300 transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  AGB
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="text-gray-300 transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  Datenschutz
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
        </div>

        <div className="py-6 text-center text-sm text-slate-100">
          © {new Date().getFullYear()} - Kaffee-Bike-Hamburg.de. Wir brühen
          Kaffee mit ❤️
        </div>
      </footer>
    </div>
  );
}
