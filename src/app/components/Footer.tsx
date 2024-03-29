import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-coffeePrimary pt-4 sm:pt-10  ">
      <footer className="mx-auto max-w-screen-3xl mt-auto px-4 md:px-8 ">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 ">
          <div className="col-span-full lg:col-span-2">
            {/* <!-- logo - start --> */}
            <div className="mb-4 lg:-mt-2">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-100 md:text-base"
                aria-label="logo"
              >
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 275.353 275.353"
                  className="h-auto w-6 text-coffeeAccent"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M229.784,199.712c27.269,0,45.568-29.692,45.568-57.419c0-20.117-12.418-22.843-24.562-22.843
					c-3.468,0-7.21,0.234-11.167,0.479c-3.195,0.176-6.507,0.332-9.848,0.41l0.039-0.889H1.514c0,42.959,24.132,80.321,59.686,99.49
					C24.787,221.333,0,226.043,0,231.445c0,7.865,51.782,14.196,115.659,14.196s115.649-6.331,115.649-14.196
					c0-5.432-24.904-10.132-61.454-12.516c10.63-5.725,20.263-13.004,28.529-21.641
					C208.026,199.712,219.448,199.712,229.784,199.712z M229.364,128.272c3.683-0.088,7.289-0.244,10.737-0.469
					c3.83-0.205,7.464-0.42,10.698-0.42c11.509,0,16.658,2.159,16.658,14.909c0,23.419-15.466,49.515-37.664,49.515
					c-9.751,0-18.3-0.205-25.285-1.358C218.559,173.196,227.537,151.731,229.364,128.272z M98.982,97.203
					c-0.557-0.547-13.414-13.922,0.156-30.327c16.58-20,0.01-37-0.156-37.166l-3.595,3.595c0.557,0.537,13.414,13.932-0.166,30.327
					c-16.58,20.029-0.01,37.039,0.166,37.195L98.982,97.203z M118.737,97.203c-0.557-0.547-13.414-13.922,0.166-30.327
					c16.56-20,0-37-0.166-37.166l-3.605,3.595c0.557,0.537,13.414,13.932-0.156,30.327c-16.56,20.039-0.01,37.039,0.166,37.205
					L118.737,97.203z M140.251,97.203c-0.557-0.547-13.414-13.922,0.156-30.327c16.57-20,0-37-0.156-37.166l-3.615,3.595
					c0.547,0.537,13.424,13.932-0.166,30.327c-16.56,20.039,0,37.039,0.176,37.205L140.251,97.203z"
                  />
                </svg>
                Coffee-Bike Hamburg
              </a>
            </div>
            {/* <!-- logo - end --> */}
            <p className="mb-6 text-slate-100 sm:pr-8">
              Ihr Kaffee Catering im Norden
            </p>
            <span className="uppercase text-slate-100 font-semibold">
              {" "}
              Kontakt{" "}
            </span>
            <br />
            <span className="text-slate-100">
              Benjamin Stoltenberg <br />
              <br />
              <div className="flex items-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>{" "}
                <br />
                <a
                  className="transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                  href="tel:+49 174 607 92 73"
                >
                  {" "}
                  0174 / 607 92 73{" "}
                </a>
              </div>{" "}
              <div className="flex items-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>{" "}
                <br />
                <a
                  className="transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                  href="mailto:info@kaffee-bike-hamburg.de"
                >
                  info@kaffee-bike-hamburg.de{" "}
                </a>
              </div>
              <div className="flex items-center mr-3">
                <svg
                  className="h-4 w-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>{" "}
                <br />
                <a
                  className="transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                  href="https://www.instagram.com/coffeeBike_Hamburg"
                >
                  &nbsp; coffeeBike_Hamburg{" "}
                </a>
              </div>
            </span>
            {/* <!-- social - start --> */}

            {/* <!-- social - end --> */}
          </div>

          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-slate-100">
              Rechtliches
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  href="/impressum"
                  className="text-slate-300 text-sm transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  Impressum
                </Link>{" "}
                <br />
                <Link
                  href="/datenschutz"
                  className="text-gray-300 text-sm transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  Datenschutz
                </Link>
              </div>

              {/* <div>
                <a
                  href="/"
                  className="text-gray-300 transition duration-100 hover:text-coffeeAccent hover:text-coffeeAccent"
                >
                  Blog
                </a>
              </div> */}
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div></div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}

          {/* <!-- nav - end --> */}
        </div>

        <div className="py-6 text-center text-sm text-slate-100">
          © {new Date().getFullYear()} - Kaffee-Bike-Hamburg.de <br /> Wir
          brühen Kaffee mit ❤️
        </div>
      </footer>
    </div>
  );
}
