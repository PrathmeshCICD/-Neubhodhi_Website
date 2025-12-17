export default function HomeSections() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="container overflow-hidden pt-[120px] px-6 sm:px-10 md:px-20 pb-32 md:pb-80">
        {/* Spline 3D Background */}
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-IP7BPCreV9vG8CUbN1XkQch0/"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="spline-bg"
        ></iframe>

        {/* Hero Content */}
        <div className="content max-w-[544px] w-full">
          <h1 className="text-zinc-900 text-6xl font-bold font-['Orbitron'] mb-4 leading-20">
            Artificial <br />
            Intelligence & <br />
            Robotics
          </h1>

          <div className="max-w-[385px] w-full">
            <p className="text-[#969696] text-xl mb-8">
              NeuBodhi drives innovation in AI to solve complex engineering
              challenges and advance technology.
            </p>
          </div>

          <button className="group relative flex items-center justify-center p-4 gap-2 rounded-xl border-2 border-[#D9D9D9] bg-[#1B1B1B] text-zinc-300 shadow-[4px_4px_10px_rgba(72,74,184,0.25)] hover:bg-gray-900 transition-all duration-300">
            <span className="text-xl pr-6 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-3">
              Learn More
            </span>
            <span className="text-xl absolute top-1/2 -translate-y-1/2 right-4 transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2">
              ➜
            </span>
          </button>
        </div>
      </section>

      {/* SPACING */}
      <div className="w-full mb-[60px]" />

      {/* WHO ARE WE SECTION */}
      <section className="pt-[60px] px-6 sm:px-10 md:px-20 pb-20">
        <h2 className="text-center text-zinc-900 text-4xl sm:text-5xl font-bold font-['Orbitron'] mb-20 pl-12 sm:pl-0">
          Who are we?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 h-auto">
          {/* LEFT */}
          <div className="pt-[39px]">
            <p className="self-stretch mb-8 text-zinc-900 text-xl font-light font-['Exo_2'] leading-8 pl-2 sm:pl-0">
              At NeuBodhi, we believe intelligence is the foundation of progress.
              By combining advanced artificial intelligence with cutting-edge
              robotics, we create solutions that go beyond automation — they
              think, adapt, and evolve.<br />
              Our mission is simple: to solve complex engineering challenges and
              drive innovation that shapes the future of technology. Whether it’s building smarter machines, streamlining industries, or advancing research, NeuBodhi stands at the intersection of science and possibility.
            </p>

            <button className="group relative flex items-center justify-center p-4 gap-2 rounded-xl border-2 border-[#D9D9D9] bg-[#1B1B1B] text-zinc-300 shadow-[4px_4px_10px_rgba(72,74,184,0.25)] hover:bg-gray-900 transition-all duration-300">
              <span className="text-xl pr-6 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-3">
                Connect Now
              </span>
              <span className="text-xl absolute top-1/2 -translate-y-1/2 right-4 transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2">
                ➜
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-14 pl-0 sm:pl-10 md:pl-10">
            {["Intelligence", "Robotics", "Business"].map((item) => (
              <div key={item} className="flex items-end gap-3 max-w-full overflow-hidden">
                <div className="w-10 text-right text-neutral-400 text-base font-light font-['Exo_2']">
                  your
                </div>
                <div className="w-full max-w-full sm:max-w-[384px]">
                  <span className="text-zinc-900 text-5xl sm:text-5xl md:text-6xl font-normal font-['Orbitron']">
                    {item}{" "}
                  </span>
                  <span className="text-neutral-400 text-4xl sm:text-5xl md:text-6xl font-normal font-['Orbitron']">
                    Partners
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


