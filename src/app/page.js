import HomeSections from "./Components/Home/HomeSections";
import GrowthSection from "./Components/Home/GrowthSection";
import ISACASection from "./Components/Home/ISACASection"

export default function Home() {
  return (
    <>
      <HomeSections />
      <div className="h-20" />
      <GrowthSection />
      <div className="h-20" />
      <ISACASection />

    </>
  );  
}
