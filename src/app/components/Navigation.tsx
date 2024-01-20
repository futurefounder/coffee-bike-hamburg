"use client";
import { useEffect } from "react";

type NavigationProps = {
  bgClass: string; // Assuming bgClass is a string
  shouldChangeOnScroll: boolean; // Assuming shouldChangeOnScroll is a boolean
};
export default function Navigation({
  bgClass,
  shouldChangeOnScroll,
}: NavigationProps) {
  useEffect(() => {
    const handleScroll = () => {
      if (!shouldChangeOnScroll) return;

      const nav = document.getElementById("nav");
      if (nav) {
        const scrollPosition = window.scrollY;
        if (scrollPosition > window.innerHeight * 0.1) {
          nav.classList.add("bg-coffeePrimary");
        } else {
          nav.classList.remove("bg-coffeePrimary");
        }
      }
    };

    if (shouldChangeOnScroll) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (shouldChangeOnScroll) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [shouldChangeOnScroll]);

  return (
    <header
      id="nav"
      className={`fixed top-0 w-full transition-colors duration-1000 z-20 flex justify-between items-center py-4 md:py-8 ${bgClass}`}
    >
      {/* <!-- logo - start --> */}
      <a
        href="/"
        className="inline-flex items-center ml-6 gap-2.5 text-xs font-bold text-white md:text-base"
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
        Coffee Bike Hamburg
      </a>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav className="hidden gap-12 lg:flex ">
        <a href="/" className="text-lg font-semibold text-coffeeAccent">
          Home
        </a>
        <a
          href="#benefits"
          className="text-lg font-semibold text-white transition duration-100 hover:text-coffeeAccent active:text-coffeeAccentDark"
        >
          Über uns
        </a>
        <a
          href="#anfragen"
          className="text-lg font-semibold text-white transition duration-100 hover:text-coffeeAccent active:text-coffeeAccentDark"
        >
          Kontaktformular
        </a>
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <div className="flex flex-row">
        <a
          href="tel:+491746079273"
          className="mr-6 hidden uppercase bg-coffeeAccent px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-coffeeAccent hover:text-black focus-visible:ring active:text-black md:text-base lg:inline-block"
        >
          {" "}
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

        <button
          type="button"
          className="inline-flex items-center mr-6 gap-2 rounded-lg bg-transparent px-2.5 py-2 text-sm font-semibold text-white ring-indigo-300 hover:bg-coffeeAccent hover:text-white focus-visible:ring active:text-white md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* <!-- buttons - end --> */}
    </header>
    // </div>
  );
}
