import Navbar from "./nav_bar.jsx"
import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Footer from "./Footer.jsx"

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#211B65] pb-32 text-[#F7F4EE]">
      <Navbar />

      <section className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-5xl font-semibold">Contact</h1>

          <p className="mx-auto mt-6 max-w-xl text-xl leading-9 text-[#D7CEF2]">
            I am always happy to connect regarding research, collaborations,
            opportunities or ideas. Feel free to reach out! :)
          </p>

          <div className="mt-16 space-y-6">
            <a
              href="mailto:yazgi@vt.edu"
              className="flex items-center justify-center gap-5 rounded-2xl border border-[#B7A8E8]/30 bg-[#2B2574] p-6 transition hover:border-[#C9829B] hover:shadow-lg"
            >
              <MdEmail className="text-4xl text-[#C6A15B]" />

              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.15em] text-[#C6A15B]">
                  Email
                </p>
                <p className="text-xl text-[#F7F4EE]">
                  yazgi@vt.edu
                </p>
              </div>
            </a>

            <a
              href="https://github.com/yazgiakata57"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-5 rounded-2xl border border-[#B7A8E8]/30 bg-[#2B2574] p-6 transition hover:border-[#C9829B] hover:shadow-lg"
            >
              <FaGithub className="text-4xl text-[#C6A15B]" />

              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.15em] text-[#C6A15B]">
                  GitHub
                </p>
                <p className="text-xl text-[#F7F4EE]">
                  github.com/yazgiakata57
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/yazgiakata/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-5 rounded-2xl border border-[#B7A8E8]/30 bg-[#2B2574] p-6 transition hover:border-[#C9829B] hover:shadow-lg"
            >
              <FaLinkedin className="text-4xl text-[#C6A15B]" />

              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.15em] text-[#C6A15B]">
                  LinkedIn
                </p>
                <p className="text-xl text-[#F7F4EE]">
                  linkedin.com/in/yazgiakata
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}