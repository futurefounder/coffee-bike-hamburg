import Image from "next/image";
export default function Gallery() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start  */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center uppercase text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Coffee Bike Hamburg Im Einsatz{" "}
          </h2>
        </div>
        {/* text - end  */}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* image - start  */}
          <a
            href="#"
            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg  shadow-lg md:h-96"
          >
            <Image
              height={300}
              width={300}
              src="/img/coffee-bike-hamburg-coffee.webp"
              loading="lazy"
              alt="Coffee"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
              Event
            </span>
          </a>
          {/* image - end  */}

          {/* image - start */}
          <a
            href="#"
            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
          >
            <Image
              height={300}
              width={300}
              src="/img/coffee-bike-hamburg-coffee-2.webp"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
              Team
            </span>
          </a>
          {/* image - end */}

          {/* image - start  */}
          <a
            href="#"
            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
          >
            <Image
              width={300}
              height={300}
              src="/img/coffee-bike-hamburg-coffee-3.webp"
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
              Stand
            </span>
          </a>
          {/*  image - end */}
        </div>
      </div>
    </div>
  );
}
