import Navbar from "./nav_bar.jsx";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "./Footer.jsx";

export default function ContactPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden pb-32"
      style={{
        backgroundColor: "var(--color-paper)",
        color: "var(--color-ink)",
      }}
    >
      <Navbar />

      <section className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          <h1
            className="text-5xl font-semibold"
            style={{ color: "var(--color-ink)" }}
          >
            Contact
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-xl leading-9"
            style={{ color: "var(--color-muted)" }}
          >
            I am always happy to connect regarding research, collaborations,
            opportunities or ideas. Feel free to reach out! :)
          </p>

          <div className="mt-16 space-y-6">
            {/* Email */}
            <a
              href="mailto:yazgi@vt.edu"
              className="group flex items-center rounded-2xl border bg-transparent p-6 transition duration-300 hover:shadow-lg"
              style={{
                borderColor: "var(--color-border)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  "var(--color-accent-blue)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "var(--color-border)")
              }
            >
              <div className="flex w-16 shrink-0 justify-center">
                <MdEmail
                  className="text-4xl transition"
                  style={{ color: "var(--color-accent-magenta)" }}
                />
              </div>

              <div className="ml-5 text-left">
                <p
                  className="text-sm uppercase tracking-[0.15em]"
                  style={{ color: "var(--color-accent-magenta)" }}
                >
                  Email
                </p>

                <p
                  className="text-xl"
                  style={{ color: "var(--color-ink)" }}
                >
                  yazgi@vt.edu
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yazgiakata57"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center rounded-2xl border bg-transparent p-6 transition duration-300 hover:shadow-lg"
              style={{
                borderColor: "var(--color-border)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  "var(--color-accent-blue)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "var(--color-border)")
              }
            >
              <div className="flex w-16 shrink-0 justify-center">
                <FaGithub
                  className="text-4xl transition"
                  style={{ color: "var(--color-accent-magenta)" }}
                />
              </div>

              <div className="ml-5 text-left">
                <p
                  className="text-sm uppercase tracking-[0.15em]"
                  style={{ color: "var(--color-accent-magenta)" }}
                >
                  GitHub
                </p>

                <p
                  className="text-xl"
                  style={{ color: "var(--color-ink)" }}
                >
                  github.com/yazgiakata57
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yazgiakata/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center rounded-2xl border bg-transparent p-6 transition duration-300 hover:shadow-lg"
              style={{
                borderColor: "var(--color-border)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  "var(--color-accent-blue)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "var(--color-border)")
              }
            >
              <div className="flex w-16 shrink-0 justify-center">
                <FaLinkedin
                  className="text-4xl transition"
                  style={{ color: "var(--color-accent-magenta)" }}
                />
              </div>

              <div className="ml-5 text-left">
                <p
                  className="text-sm uppercase tracking-[0.15em]"
                  style={{ color: "var(--color-accent-magenta)" }}
                >
                  LinkedIn
                </p>

                <p
                  className="text-xl"
                  style={{ color: "var(--color-ink)" }}
                >
                  linkedin.com/in/yazgiakata
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}