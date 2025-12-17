import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function GrowthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B1B1B] py-14 sm:py-20 md:py-24">

      
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        
        
        <Image
          src="/Rectangle 21.svg"
          alt="background glow"
          width={700}
          height={700}
          className="absolute top-1/2 left-1/2 opacity-80 blur-md -translate-x-full -translate-y-1/2"
        />

        
        <Image
          src="/Rectangle 22.svg"
          alt="background glow"
          width={700}
          height={700}
          className="absolute top-1/2 left-1/2 opacity-80 blur-md translate-x-0 -translate-y-1/2 "
        />
      </div>
      
      
      {/* CONTENT*/} 
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-20">
        <div className="text-center max-w-[760px] mx-auto  mb-10 sm:mb-14">
          <span className="inline-flex items-center justify-center gap-2.5 px-4 py-4 sm:py-3 mb-6 rounded-full border border-neutral-200 text-sm sm:text-[15px] text-neutral-300 font-extralight font-['Exo_2']">
            What we offer?
          </span>

          <h2 className="text-[28px] sm:text-[34px] md:text-[30px] font-normal font-['Orbitron'] text-neutral-200 mb-[70px] leading-tight">
            Power your growth with scalable solutions
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <CardSpotlight className="rounded-3xl bg-[#202020] p-8 min-h-[260px] text-white shadow-[0_0_40px_rgba(0,0,0,0.4)] ">
            <div className="flex items-center gap-3 mt-4 mb-4 flex-wrap">
             <h3 className="text-neutral-200 text-3xl font-normal font-['Exo_2']">
                Innovation
             </h3>
             <Image 
             src="/Idea-icon.svg"
             width={30} 
             height={30} 
             alt="Neubodhi Logo"/>
            </div>
            <p className="self-stretch text-neutral-400 text-base font-normal font-['Exo_2']">
              In AI and robotics, innovation drives progress. From predictive analytics to real-time vision systems, we build transformative solutions.that push the boundaries of what's possible—empowering businesses to lead in a competitive world.
            </p>
          </CardSpotlight>

          <CardSpotlight className="rounded-3xl bg-[#202020] p-8 min-h-[260px] text-white shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-3 mt-4 mb-4 flex-wrap">
             <h3 className="text-neutral-200 text-3xl font-normal font-['Exo_2']">
                Dedicated Team
             </h3>
             <Image 
             src="/Dedicated-team-icon.svg"
             width={30} 
             height={30} 
             alt="Dedicated-team-icon"/>
            </div>
            <p className="text-neutral-400 text-base font-normal font-['Exo_2']">
              Our strength lies in our people. With a multidisciplinary team of researchers, engineers, designers, software developers, and domain experts, we combine deep technical expertise with a shared passion for innovation. Every project is handled with care, collaboration, and a relentless focus on quality and results.
            </p>
          </CardSpotlight>

          <CardSpotlight className="rounded-3xl bg-[#202020] p-8 min-h-[260px] text-white shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-3 mt-4 mb-4 flex-wrap">
             <h3 className="text-neutral-200 text-3xl font-normal font-['Exo_2']">
                Customer Driven Tech
             </h3>
             <Image 
             src="/Customer Driven Tech icon.svg"
             width={30} 
             height={30} 
             alt="Customer Driven Tech icon"/>
            </div>
            <p className="text-neutral-400 text-base font-normal font-['Exo_2']">
              Our solutions are centered around you. We continuously adapt and iterate based on real user feedback to build technologies that truly solve client-specific problems and drive success.
            </p>
          </CardSpotlight>

          <CardSpotlight className="rounded-3xl bg-[#202020] p-8 min-h-[260px] text-white shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-3 mt-4 mb-4 flex-wrap">
             <h3 className="text-neutral-200 text-3xl font-normal font-['Exo_2']">
                Performance
             </h3>
             <Image 
             src="/Performance-icon.svg"
             width={30} 
             height={30} 
             alt="Performance-icon"/>
            </div>
            <p className="text-neutral-400 text-base font-normal font-['Exo_2']">
              In AI and robotics, performance is everything. Whether it's real-time data processing, autonomous navigation, or system scalability, we engineer for excellence. Our solutions are rigorously tested and optimized to ensure speed, precision, reliability, and long-term value—so our client’s business can move faster and smarter. 
            </p>
          </CardSpotlight>

        </div>
      </div>

    </section>


  );
}
