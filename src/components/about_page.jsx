const aboutCards = [
  {
    title: "Darüşşafaka Schools",
    text: "Founded in 1873, Darüşşafaka provides full-scholarship, boarding education to talented but financially disadvantaged students who have lost a parent. Today, over 1,000 students across Turkey receive English-language education from 5th grade through high school graduation.",
  },
  {
    title: "Yıldızlar Education Fund",
    text: "YEF supports gifted Turkish students pursuing higher education in the United States. Through its partnership with SUNY and the University at Buffalo, the fund helps students access UB with in-state tuition and supports educational bridges between Turkey and the U.S.",
  },
  {
    title: "Kennedy-Lugar YES Program",
    text: "The YES Program, sponsored by the U.S. Department of State, gives high school students the opportunity to live and study in the United States for an academic year while building cross-cultural understanding, leadership, and community.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#211B65] px-6 py-24 text-[#F7F4EE]">
      <section className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-semibold">About</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#D7CEF2]">
            My journey has been shaped by institutions and programs that opened
            doors to education, community, and possibility. These experiences
            continue to influence the kind of researcher, mentor, and person I
            hope to become.
          </p>
        </div>

       <div className="grid justify-center gap-10 md:grid-cols-2 xl:grid-cols-3">
  {aboutCards.map((card) => (
    <div
      key={card.title}
      className="
        group
        mx-auto
        flex
        min-h-[440px]
        w-[360px]
        flex-col
        items-center
        justify-center
        rounded-[2.25rem]
        border
        border-[#B7A8E8]/25
        bg-[#2E2788]
        p-8
        text-center
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#C6A15B]
        hover:bg-[#3B34A3]
        hover:shadow-[0_0_45px_rgba(198,161,91,0.35)]
        active:scale-[0.98]
      "
    >
      <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-[#C9829B] transition-all duration-300 group-hover:w-24" />

      <h2 className="mb-5 text-2xl font-semibold leading-tight text-white">
        {card.title}
      </h2>

      <p className="text-[15.5px] leading-7 text-[#F8F6FF]">
        {card.text}
      </p>
    </div>
  ))}
</div>
      </section>
    </main>
  );
}