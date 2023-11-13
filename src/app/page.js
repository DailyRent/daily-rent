import Hero from "@/components/Hero/Hero";
// import HomeSlider from "@/components/HomeSlider/HomeSlider";
import dynamic from "next/dynamic";

const DynamicHomeSlider = dynamic(() =>
  import("@/components/HomeSlider/HomeSlider")
);

export default function Home() {
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <Hero />
      {/* <HomeSlider /> */}
      <DynamicHomeSlider />
    </>
  );
}
