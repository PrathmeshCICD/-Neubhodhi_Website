import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full pt-20 px-20 pb-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 ">

        {/* Left block */}
        <div className="max-w-xs flex flex-col gap-6">

          <div className="flex items-center gap-1 shrink-0">
            <Image
              src="/neubodhi-logo.png"
              width={30}
              height={36}
              alt="Neubodhi Logo"
            />
            <span className="text-zinc-900 text-base font-light font-['Exo_2'] whitespace-nowrap">
              Neubodhi
            </span>
          </div>

          <p className="w-[234.753px] text-gray-600 text-[15px] font-normal leading-[26px] font-gilroy">
            With lots of unique blocks, you can easily build a page without coding.
            Build your next landing page.
          </p>

          <div className="flex">
            <Image
            src="/Social.svg"
            alt="Social Media Icons"
            width={160}
            height={24}
            />
          </div>

        </div>

        {/* Links */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-24 mt-6 md:mt-0">

          <div className="flex flex-col md:block">
            <p className="font-gilroy text-gray-600 mb-3">Company</p>
            <ul className="space-y-2 text-gray-900 text-base font-normal font-['Exo_2'] leading-10">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="flex flex-col md:block">
            <p className="font-gilroy text-gray-600 mb-3">Product</p>
            <ul className="space-y-2 text-gray-900 text-base font-normal font-['Exo_2'] leading-10">
              <li>Features</li>
              <li>Pricing</li>
              <li>Help desk</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="flex flex-col md:block">
            <p className="font-gilroy text-gray-600 mb-3">Services</p>
            <ul className="space-y-2 text-gray-900 text-base font-normal font-['Exo_2'] leading-10">
              <li>Robotics</li>
              <li>Digital</li>
              <li>Mechanical</li>
            </ul>
          </div>

          <div className="flex flex-col md:block">
            <p className="font-gilroy text-gray-600 mb-3">Legal</p>
            <ul className="space-y-2 text-gray-900 text-base font-normal font-['Exo_2'] leading-10">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}

