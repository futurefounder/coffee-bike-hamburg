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
              src="https://images.pexels.com/photos/7680213/pexels-photo-7680213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              loading="lazy"
              alt="Photo by Andras Vas"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-white uppercase md:text-2xl lg:text-4xl">
              {headlineCTA}
            </h2>

            <p className="mb-8 max-w-md text-white">
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
                className="inline-block bg-white px-8 py-3 text-center text-sm font-semibold text-black outline-none transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Telefon: 0174/6079273
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
