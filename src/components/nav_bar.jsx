import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#211B65]">
      <nav className="mx-auto flex max-w-6xl items-start justify-between px-6 py-8 md:px-10 md:py-12">
        {/* Logo */}
        <div className="inline-block">
  <Link to="/" onClick={() => setIsOpen(false)}>
    <h1 className="whitespace-nowrap text-[32px] font-bold uppercase tracking-[0.18em] text-[#C6A15B] transition hover:text-[#D6B56D]">
      YAZGI AKATA
    </h1>
  </Link>

  <p className="-mt-1 relative left-[3px] w-full text-right text-[18px] italic leading-none text-[#B7A8E8]">
    yahz-guh&nbsp;&nbsp;ah-KAH-tah
  </p>
</div>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="mt-2 flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-7 bg-[#B7A8E8]" />
          <span className="h-0.5 w-7 bg-[#B7A8E8]" />
          <span className="h-0.5 w-7 bg-[#B7A8E8]" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-16 text-[18px] font-medium uppercase tracking-[0.08em] text-[#B7A8E8] md:flex">
          <li>
            <Link to="/" className="transition duration-300 hover:text-[#F7F4EE]">
              About
            </Link>
          </li>

          <li>
            <Link to="/cv" className="transition duration-300 hover:text-[#F7F4EE]">
              CV
            </Link>
          </li>

          <li>
            <Link to="/contact" className="transition duration-300 hover:text-[#F7F4EE]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="flex flex-col items-center gap-6 pb-8 text-[18px] font-medium uppercase tracking-[0.08em] text-[#B7A8E8] md:hidden">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="transition duration-300 hover:text-[#F7F4EE]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/cv"
              onClick={() => setIsOpen(false)}
              className="transition duration-300 hover:text-[#F7F4EE]"
            >
              CV
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="transition duration-300 hover:text-[#F7F4EE]"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar