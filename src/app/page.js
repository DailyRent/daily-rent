import Hero from "@/components/Hero/Hero";
import styles from "./page.module.scss";
import Slider from "@/components/Slider/Slider";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import OrderBtn from "@/components/OrderBtn/OrderBtn";
import CallBtn from "@/components/CallBtn/CallBtn";

export default function Home() {
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <Hero />
      <Slider />
      <SocialLinks />
      <OrderBtn />
      <CallBtn />
    </>
  );
}
