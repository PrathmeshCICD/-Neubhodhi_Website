 import { TextRevealCard } from "@/components/ui/text-reveal-card";
import Image from "next/image";

export default function ConnectSection(){
    return(
        <section className="relative bg-[#1B1B1B] w-full ">
            <div className="text-center max-w-[760px] mx-auto mb-10 pt-10">
              <span className="inline-flex items-center justify-center gap-2.5 px-4 py-4 sm:py-3 mb-6 rounded-full border border-neutral-200 text-sm sm:text-[15px] text-neutral-300 font-extralight font-['Exo_2']">
                Connect with us today
              </span>
            </div>

            <div className="flex justify-center items-center gap-4 mb-[100px]">
              <TextRevealCard 
              text="You got an idea"
              revealText="I got the solution"
              className="text-1xl md:text-1xl font font-['Exo_2']"
              />
            </div>

           {/* ===== LOWER MAIN BOX === */}
            <div className="max-w-full mx-auto px-20 md:px-20 pb-18 grid grid-cols-1 md:grid-cols-2 md:gap-80 gap-10">

              {/* LEFT CONTENT */}
             <div>
               <h3 className="text-3xl md:text-4xl font-bold font-['Orbitron'] text-white mb-6">
                What you can expect <br /> working with us?
               </h3>

              <ul className="space-y-4 text-[#CFCFCF] text-sm md:text-base">
              {[
              "Deep Engineering Expertise",
              "Robotics and AI services",
              "Custom AI Solutions",
              "Autonomous Systems Development",
              "End-to-End System Integration",
             ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Image
                 src="/tick-circle-icon.svg"
                 alt="tick icon"
                 width={16}
                 height={16}
                 className="mt-1"
                />
                 <span className="text-neutral-200 text-base font-normal font-['Exo_2']">{item}</span>
              </li>
             ))}
             </ul>
            </div>

           {/* RIGHT FORM */}
           <form>
            <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-[#3A3A3A] py-3 text-white placeholder:text-[#7A7A7A] focus:outline-none mb-6"
            />

            <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border-b border-[#3A3A3A] py-3 text-white placeholder:text-[#7A7A7A] focus:outline-none mb-6"
            />

          <textarea
            placeholder="Enter Message"
            className="w-full bg-transparent border-b border-[#3A3A3A] py-3 text-white placeholder:text-[#7A7A7A] focus:outline-none resize-none mb-4"
          />

          <button
           type="submit"
           className="w-full h-16 bg-[#A6A6A6] rounded-2xl flex items-center justify-between px-6 font-['Exo_2']"
          >
          <span className="text-white text-base font-semibold">
           Lets Connect
          </span>

          <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black text-xl font">
           ➜
          </span>
         </button>

          </form>
           </div>

        </section>
    )
}
 

