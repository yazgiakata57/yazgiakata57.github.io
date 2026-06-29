import profileImage from "../assets/yazgi.jpeg"

export default function IntroSection() {
    return (
        <section
        id="about"
        className="mx-auto mt-20 flex max-w-7xl items-center justify-between gap-24 px-10"
      >
        {/* Portrait */}
        <div className="w-[360px] shrink-0">
          <div className="overflow-hidden rounded-[2rem] border border-[#B7A8E8]/30 shadow-2xl">
            <img
              src={profileImage}
              alt="Portrait"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl">
          <h2 className="text-[36px] font-semibold leading-tight">
            <span className="text-[#F7F4EE]">Hello! My name is </span>{" "}
            <span className="italic text-[#C9829B]">Yazgı.</span>
          </h2>

          <div className="mt-8 space-y-6 text-[20px] leading-9 text-[#D7CEF2]">
            <p>
              I am an incoming{" "}
              <span className="font-semibold text-[#F7F4EE]">
                Computer Science PhD student
              </span>{" "}
              at{" "}
              <a
              href="https://www.vt.edu/"
              target="_blank"
               rel="noopener noreferrer"
               className="font-semibold text-[#C6A15B] transition hover:underline"
               >
                Virginia Tech
                </a>
              , where I will be advised by{" "}


              <a href="https://people.cs.vt.edu/sanmay/"
                target="_blank"
               rel="noopener noreferrer"
               className="font-semibold text-[#C9829B] transition hover:underline">
                Dr. Sanmay Das
              </a>

              . Recently, I graduated from the{" "}
              <a href="https://www.buffalo.edu/"
                target="_blank"
               rel="noopener noreferrer"
               className="font-semibold text-[#C6A15B] transition hover:underline">
                University at Buffalo (UB)
              </a>{" "}
              with a Bachelor of Science in{" "}
              <span className="font-semibold text-[#F7F4EE]">
                Computer Science
              </span>{" "}
              and a minor in{" "}
              <span className="font-semibold text-[#F7F4EE]">
                Philosophy, Politics and Economics (PPE)
              </span>
              . At UB, I was a{" "}
              <a
              href="https://www.yef.education/"
                target="_blank"
               rel="noopener noreferrer"
                className="font-semibold text-[#C6A15B] transition hover:underline">
                Yıldızlar Education Fund (YEF) Scholar
              </a>{" "}
              , and worked with{" "}
              <a href="https://cse.buffalo.edu/faculty/atri/"
                target="_blank"
               rel="noopener noreferrer"
               className="font-semibold text-[#C9829B] transition hover:underline">
                Dr. Atri Rudra
              </a>
              .
            </p>

            <p>
              I am excited to explore the tradeoff between{" "}
              <span className="font-semibold text-[#F7F4EE]">
                personalization
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#F7F4EE]">
                diversification
              </span>{" "}
              in{" "}
              <span className="font-semibold text-[#F7F4EE]">
                recommendation systems
              </span>
              , grounded in methodologies from{" "}
              <span className="font-semibold text-[#F7F4EE]">
                computational
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#F7F4EE]">
                social sciences
              </span>
              .
            </p>

            <p>
              I am also a proud alumna of{" "}
              <a href="https://www.darussafaka.org/en/schools"
                target="_blank"
               rel="noopener noreferrer"
               className="font-semibold text-[#C6A15B] transition hover:underline">
                Darüşşafaka Schools
              </a>{" "}
              and the{" "}
              <a href="https://www.yesprograms.org/"
                target="_blank"
               rel="noopener noreferrer"
               className="font-semibold text-[#C6A15B] transition hover:underline">
                Kennedy-Lugar Youth Exchange and Study (KL-YES) Program
              </a>
              . I am grateful for the opportunities I have had to explore the
              world beyond my comfort zone from a young age, and I strive to
              create and pass on similar opportunities for others.
              </p>

              <p>
              In my free time, I enjoy hiking, reading, running, spending time with my dog, exploring
              new places, hobbies, and ideas.
            </p>
          </div>
        </div>
      </section>

      )
    }
