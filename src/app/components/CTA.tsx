type CTAProps = {
  headlineCTA: string;
};

export default function CTA({ headlineCTA }: CTAProps) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-coffeeAccent sm:flex-row md:h-80">
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              src="/img/coffee-bike-hamburg-contact.webp"
              loading="lazy"
              alt="Photo by Andras Vas"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-white uppercase md:text-2xl lg:text-4xl">
              {headlineCTA}
            </h2>

            <p className="mb-8 max-w-md text-white text-justify">
              Gerne beraten wir Sie auf dem kurzen Dienstweg am Telefon.
              Alternativ können Sie uns eine Anfrage über das Kontaktformular
              schicken.
              <br />
              <br />
              Wir freuen uns auf Sie!
            </p>

            <div id="anfragen" className="mt-auto">
              <a
                href="tel:+491746079273"
                className="mr-6 hidden uppercase bg-coffeePrimary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:text-coffeeAccent focus-visible:ring active:text-black md:text-base lg:inline-block"
              >
                <div className="flex items-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  0174/6079273{" "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
