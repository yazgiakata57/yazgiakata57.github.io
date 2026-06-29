import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-10 pb-6 pt-14">
        <div className="relative">
          <Link to="/">
            <h1 className="text-[32px] font-bold uppercase tracking-[0.18em] text-[#C6A15B]">
              YAZGI AKATA
            </h1>
          </Link>

          <p className="absolute left-17 top-full mt-1 flex gap-3 text-[18px] italic text-[#B7A8E8]">
            <span>yahz-guh</span>
            <span>ah-KAH-tah</span>
          </p>
        </div>

        <ul className="flex items-center gap-16 text-[18px] font-medium uppercase tracking-[0.08em] text-[#B7A8E8]">
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
    </header>
  )
}

export default Navbar