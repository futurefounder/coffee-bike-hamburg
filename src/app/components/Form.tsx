"use client";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Link from "next/link";

const FORMSPARK_FORM_ID = "D4h1P6YvE";

export default function Form() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit({ message, name, email, phone, date, guests });
    setSubmitted(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  function getFieldClassNames(isSubmitted: boolean) {
    return `w-full rounded border px-3 py-2 text-gray-800 outline-none transition duration-100 focus:ring ${
      isSubmitted
        ? "bg-gray-300 text-gray-500 cursor-not-allowed border-gray-200"
        : "bg-gray-50 ring-coffeeAccent"
    }`;
  }

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      {showModal && ( // Render the modal if showModal is true
        <>
          <div className="modal-backdrop"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
              <p className="mb-4 text-center text-l">
                {" "}
                <br />
                Danke! 😊 <br /> Ich werde mich schnellstmöglich bei Ihnen
                melden! <br /> <br />- Benjamin Stoltenberg{" "}
              </p>

              <p className="font-bold text-center">
                <a onClick={closeModal} className="cursor-pointer">
                  Schließen{" "}
                </a>
              </p>
            </div>
          </div>
        </>
      )}

      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Kontaktformular{" "}
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Kontaktieren Sie uns unverbindlich, und wir beraten Sie gerne zu
            allen Details und Möglichkeiten, um Ihr Ereignis zu einem besonderen
            Erlebnis zu machen!
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Name*
            </label>
            <input
              required
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitted}
              className={getFieldClassNames(submitted)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              required
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitted}
              className={getFieldClassNames(submitted)}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Telefonnummer
            </label>
            <input
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={submitted}
              className={getFieldClassNames(submitted)}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="guests"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Gäste
            </label>
            <input
              name="guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              disabled={submitted}
              className={getFieldClassNames(submitted)}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Datum des Events
            </label>
            <input
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={submitted}
              className={getFieldClassNames(submitted)}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Nachricht*
            </label>
            <textarea
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={submitted}
              className={getFieldClassNames(submitted)}
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            {!submitted ? (
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-coffeeAccent transition duration-300 ease-out border-2 border-coffeeAccent shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-coffeeAccent group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-coffeeAccent transition-all duration-300 transform group-hover:translate-x-full ease">
                  Senden
                </span>
                <span className="relative invisible">Senden</span>
              </button>
            ) : (
              <span className="text-lg font-medium text-green-500">
                Gesendet!
              </span>
            )}

            <span className="text-sm text-gray-500">*Erforderlich</span>
          </div>
        </form>
      </div>
    </div>
  );
}
