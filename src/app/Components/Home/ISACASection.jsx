import Link from "next/link";

export default function ISACASection() {
  return (
    <section className="w-full py-20 px-6 sm:px-10 md:px-20">
      
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="text-gray-400 text-4xl font-semibold font-['Exo_2'] mb-4">
          Intelligent Situational Awareness and Collision Avoidance
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-wide">
          ISACA
        </h2>
      </div>

      {/* Video Card */}
      <div className="flex justify-center">
        <div className="relative w-[280px] sm:w-[340px] md:w-[380px] aspect-3/4 rounded-[40px] overflow-hidden shadow-xl bg-black">
          
          <video
            src="/videos/ISACA PROJECT DEMO VIDEO.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
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
  );
}
