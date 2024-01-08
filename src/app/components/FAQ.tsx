"use client";

import { useState } from "react";

export default function FAQ() {
  // Array of states for each FAQ item
  const [openStates, setOpenStates] = useState(Array(4).fill(false));

  const toggleFAQ = (index: number) => {
    let updatedStates = [...openStates];
    updatedStates[index] = !updatedStates[index];
    setOpenStates((currentStates) => {
      const updatedStates = [...currentStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start  */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Häufig Gestellte Fragen
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Hier finden Sie Antworten zu den gängigsten Anliegen rund um unseren
            mobilen Kaffeeservice. Erfahren Sie Wissenswertes über unser Angebot
            und unserer Produkte. <br />
            <br /> Sollten Sie weitere Fragen haben, zögern Sie nicht, uns
            anzurufen – wir helfen Ihnen gerne weiter!
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="mx-auto flex max-w-screen-sm flex-col border-t">
          {/* <!-- question - start --> */}
          <div className="border-b">
            <div
              onClick={() => toggleFAQ(0)}
              className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-coffeeAccent active:text-indigo-600"
            >
              <span className="font-semibold transition duration-100 md:text-lg">
                Sind Buchungen für private Veranstaltungen möglich?
              </span>

              <span
                className={`text-coffeeAccent duration-500 transition-transform ${
                  openStates[0] ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            <p
              className={`mb-4 text-gray-500 transition-all duration-900 ease-in-out ${
                openStates[0] ? "block" : "hidden"
              }`}
            >
              <span className="font-bold"> Ja</span>, unser mobiler
              Kaffeeservice bietet flexible Lösungen für private Events aller
              Art. Ob Hochzeiten, Geburtstage oder Familienfeiern, wir sorgen
              für das perfekte Kaffeeerlebnis!
            </p>
          </div>
          {/* <!-- question - end --> */}

          {/* <!-- question - start --> */}
          <div className="border-b">
            <div
              onClick={() => toggleFAQ(1)}
              className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-coffeeAccent active:text-indigo-600"
            >
              <span className="font-semibold transition duration-100 md:text-lg">
                Welche Kaffeevariationen bietet Ihr Service an?
              </span>

              <span
                className={`text-coffeeAccent duration-500 transition-transform ${
                  openStates[1] ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            <p
              className={`mb-4 text-gray-500 transition-all duration-900 ease-in-out ${
                openStates[1] ? "block" : "hidden"
              }`}
            >
              Wir bieten eine Vielzahl von Kaffeespezialitäten an, darunter
              klassischen Espresso, Cappuccino, Latte Macchiato und auch
              individuelle Kreationen nach Ihrem Geschmack.
            </p>
          </div>
          {/* <!-- question - end --> */}

          {/* <!-- question - start --> */}
          <div className="border-b">
            <div
              onClick={() => toggleFAQ(2)}
              className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-coffeeAccent active:text-indigo-600"
            >
              <span className="font-semibold transition duration-100 md:text-lg">
                Wie weit im Voraus muss ich den Service buchen?
              </span>

              <span
                className={`text-coffeeAccent duration-500 transition-transform ${
                  openStates[2] ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            <p
              className={`mb-4 text-gray-500 transition-all duration-900 ease-in-out ${
                openStates[2] ? "block" : "hidden"
              }`}
            >
              Wir empfehlen, unseren Service mindestens vier Wochen im Voraus zu
              buchen, um Ihren Wunschtermin sicherzustellen. Bei kurzfristigen
              Anfragen bemühen wir uns, eine passende Lösung zu finden.
            </p>
          </div>
          {/* <!-- question - end --> */}
        </div>
      </div>
    </div>
  );
}
