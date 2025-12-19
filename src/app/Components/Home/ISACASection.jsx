import Link from "next/link";

export default function ISACASection() {
  return (
    <section className="w-full py-10 px-6 sm:px-10 md:px-20 bg-[#F7F8FB]">

      {/* Heading */}
      <div className="text-center max-w-5xl mx-auto mb-12">
        <p className="text-gray-400 text-3xl sm:text-4xl font-medium font-['Exo_2'] mb-6 sm:whitespace-nowrap">
          Intelligent Situational Awareness and Collision Avoidance
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold font-['Orbitron'] tracking-wide text-black">
          ISACA
        </h2>
      </div>

      {/* Video Card */}
      <div className="flex justify-center">
        <Link href="/Projects">
          <div className="group relative w-[280px] sm:w-[340px] md:w-[380px] aspect-3/4 rounded-[40px] overflow-hidden bg-black cursor-pointer">

            {/* Video */}
            <video
              src="/videos/ISACA PROJECT DEMO VIDEO.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

              {/* Circular Arrow */}
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-4xl  -rotate-45 leading-none">→</span>
              </div>

            </div>
          </div>
        </Link>
      </div>

      {/* Learn More Button */}
      <div className="flex justify-center mt-12">
        <Link href="/Projects">
          <button className="group relative flex items-center justify-center px-8 py-4 gap-2 rounded-xl border-2 border-[#D9D9D9] bg-[#1B1B1B] text-zinc-300 shadow-[4px_4px_10px_rgba(72,74,184,0.25)] hover:bg-gray-900 transition-all duration-300">

            <span className="text-lg pr-6 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-3">
              Learn More
            </span>

            <span className="text-xl absolute top-1/2 -translate-y-1/2 right-6 transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2">
              ➜
            </span>

          </button>
        </Link>
      </div>

    </section>
  );
}
