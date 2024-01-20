import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-coffeePrimary pt-4 sm:pt-10 lg:pt-12 ">
      <footer className="mx-auto max-w-screen-3xl mt-auto px-4 md:px-8 ">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-2 lg:pt-12">
          
          {/* Coffee-Bike Hamburg Section */}
          <div className="col-span-full lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-100 md:text-base" aria-label="logo">
              {/* Logo SVG */}
              {/* ... your SVG logo here ... */}
              Coffee-Bike Hamburg
            </a>
            <p className="mb-6 text-slate-100 sm:pr-8">
              Ihr Kaffee Catering im Norden
            </p>
            {/* ... social media links ... */}
          </div>

          {/* "ÜBER" Section */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-slate-100">
              Über
            </div>
            <nav className="flex flex-col gap-4">
              {/* Links */}
              <Link href="/impressum" className="text-slate-300 text-sm transition duration-100 hover:text-coffeeAccent">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-300 text-sm transition duration-100 hover:text-coffeeAccent">
                Datenschutz
              </Link>
            </nav>
          </div>

          {/* "KONTAKT" Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4 font-bold uppercase tracking-widest text-slate-100">
              Kontakt
            </div>
            <nav className="flex flex-col gap-4">
              {/* Contact Details */}
              {/* ... your contact details here ... */}
            </nav>
          </div>

        </div>

        {/* Footer Bottom Text */}
        <div className="py-6 text-center text-sm text-slate-100">
          © {new Date().getFullYear()} - Kaffee-Bike-Hamburg.de <br /> Wir brühen Kaffee mit ❤️
        </div>
      </footer>
    </div>
  );
}
