import React from "react";
import styles from "./page.module.scss";
import ApartItem from "@/components/ApartItem/ApartItem";
import OrderBtn from "@/components/OrderBtn/OrderBtn";
import CallBtn from "@/components/CallBtn/CallBtn";
import Link from "next/link";


async function getData() {
  const result = await fetch(`${process.env.URL}/api/apartments`, { cache: "no-store" })

  if (!result.ok) {
    throw new Error("Failed to fetch data.")
  }

  return result.json();
}


const Apartments = async () => {
  const data = await getData();
  console.log("data", data);


  return <div className={styles.container}>
    <h1>Apartments</h1>
    <ApartItem />
    <ApartItem />
    <ApartItem />
    <ApartItem />
    <Link href='/apartments/rooms' style={{ backgroundColor: "green" }}>Move to page for choose quantity of rooms</Link>
    <OrderBtn />
    <CallBtn />
  </div>;
};


export default Apartments;