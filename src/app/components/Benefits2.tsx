export default function Benefits2() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/*  text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Coffee-Bike Hamburg ist Ihr Kaffee-Partner im Nordern
          </h2>

          {/*  <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>*/}
        </div>
        {/*  text - end */}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {/*  feature - start */}
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-coffeeAccent md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Mobilität
              </h3>
              <p className="text-gray-500">
                Mit unserem Coffee-Bike sind wir überall in Hamburg{" "}
                <strong> flexibel und schnell </strong>einsatzbereit.
              </p>
            </div>
          </div>
          {/*  feature - end */}

          {/*  feature - start */}
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-coffeeAccent md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Leidenschaft
              </h3>
              <p className="text-gray-500">
                Wir bieten <strong> erstklassigen Kaffee</strong>, frisch
                zubereitet mit hochwertigen, lokal bezogenen Zutaten.
              </p>
            </div>
          </div>
          {/*  feature - end */}

          {/*  feature - start */}
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-coffeeAccent md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Individualität
              </h3>
              <p className="text-gray-500">
                Jedes Event wird mit unserem Coffee-Bike zu einem{" "}
                <strong> einzigartigen und persönlichen</strong> Erlebnis.
              </p>
            </div>
          </div>
          {/*  feature - end */}
        </div>
      </div>
    </div>
  );
}
