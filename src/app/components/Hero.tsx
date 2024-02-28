"use client";
import Link from "next/link";
import Navigation from "./Navigation";
import Head from "next/head";

export default function Hero() {
  return (
    <>
      {" "}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="relative mb-4 overflow-hidden">
        {/* Navigation Component */}
        {/* <Navigation /> */}
        <div
          className="relative w-full overflow-hidden h-screen"
          style={{ paddingTop: "56.25%" }}
        >
          {" "}
          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover absolute top-0 left-0 z-0 md:hidden"
          >
            <source
              src="/video/coffee-bike-hamburg-bg-video-mobile.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Desktop and Tablet Video */}
          <video
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover absolute top-0 left-0 z-0 md:h-auto lg:h-screen"
          >
            <source src="/video/coffee-bike-hero-new.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute top-0 left-0 right-0 mt-48 z-10 flex flex-col justify-center items-center pb-4">
          <p className="text-slate-100 animate-fade-up mb-8 tracking-wide font-base md:text-base uppercase text-center">
            Coffee-Bike Hamburg
          </p>
          <p className="font-fuggles text-white animate-fade-up text-6xl font-sans mb-12 tracking-wide font-extrabold md:text-4xl text-center">
            Ihr
            <br />
            <span className="font-fuggles text-6xl font-extrabold block mt-6">
              mobiles Kaffee-Catering
            </span>{" "}
            <br />
            <span className="font-fuggles text-6xl">im Norden</span>
          </p>{" "}
          <Link
            href="#anfragen"
            className="relative  animate-fade-up
             px-6 py-3 font-bold text-black group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-coffeeAccent group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-white group-hover:"></span>
            <span className="relative text-3xl text-white group-hover:text-black">
              Jetzt Anfragen
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}
