import React from "react";
import styles from "./page.module.scss";
import ApartItem from "@/components/ApartItem/ApartItem";
import OrderBtn from "@/components/OrderBtn/OrderBtn";
import CallBtn from "@/components/CallBtn/CallBtn";


const Apartments = () => {
  return <div className={styles.container}>
    <h1>Apartments</h1>
    <ApartItem />
    <ApartItem />
    <ApartItem />
    <ApartItem />
    <OrderBtn />
    <CallBtn />
  </div>;
};


export default Apartments;