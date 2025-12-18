import HomeSections from "./Components/Home/HomeSections";
import GrowthSection from "./Components/Home/GrowthSection";
import ISACASection from "./Components/Home/ISACASection";
import ConnectSection from "./Components/Home/ConnectSection";

export default function Home() {
  return (
    <>
      <HomeSections />
      <div className="h-20" />
      <GrowthSection />
      <div className="h-20" />
      <ISACASection />
      <div className="h-20" />
      <ConnectSection />

    </>
  );  
}
