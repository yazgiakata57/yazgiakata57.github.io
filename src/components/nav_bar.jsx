import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
    >
      <nav className="mx-auto flex max-w-6xl items-start justify-between px-6 py-8 md:px-10 md:py-12">
        {/* Logo */}
        <div className="inline-block">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h1
              className="whitespace-nowrap text-[32px] font-bold uppercase tracking-[0.1em] transition"
              style={{ color: "var(--color-accent-magenta)" }}
            >
              YAZGI AKATA
            </h1>
          </Link>

          <p
            className="-mt-1 text-right text-[15px] italic leading-none"
            style={{ color: "var(--color-muted)" }}
          >
            yahz-guh&nbsp;&nbsp;ah-kah-tah
          </p>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="mt-2 flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className="h-0.5 w-7"
            style={{ backgroundColor: "var(--color-muted)" }}
          />
          <span
            className="h-0.5 w-7"
            style={{ backgroundColor: "var(--color-muted)" }}
          />
          <span
            className="h-0.5 w-7"
            style={{ backgroundColor: "var(--color-muted)" }}
          />
        </button>

        {/* Desktop nav */}
        <ul
          className="mt-3 hidden items-center gap-16 text-[20px] font-medium uppercase tracking-[0.08em] md:flex"
          style={{ color: "var(--color-muted)" }}
        >
          <li>
            <Link
              to="/"
              className="transition duration-300 hover:text-white"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/cv"
              className="transition duration-300 hover:text-white"
            >
              CV
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="transition duration-300 hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul
          className="flex flex-col items-center gap-6 pb-8 text-[17px] font-medium uppercase tracking-[0.08em] md:hidden"
          style={{ color: "var(--color-muted)" }}
        >
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="transition duration-300 hover:text-white"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/cv"
              onClick={() => setIsOpen(false)}
              className="transition duration-300 hover:text-white"
            >
              CV
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="transition duration-300 hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;