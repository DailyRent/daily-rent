"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import OrderBtn from "@/components/OrderBtn/OrderBtn";
import CallBtn from "@/components/CallBtn/CallBtn";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import ModalR from "@/components/Modal/Modal";
import OrderForm from "@/components/OrderForm/OrderForm";

import Support from "./Support/Support";

import styles from "./TabletFooter.module.scss";

const TabletFooter = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const router = useRouter();

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        router.replace("/", { scroll: false });
        setModalOpen(true);
    };
    return (
        <footer className={styles.container}>
            <div className={styles.tabletLinksWrapper}>
                <p>Зв’яжіться з нами</p> <SocialLinks />
            </div>

            <Logo className={styles.footerLogo} />

            <div className={styles.contentWrapper}>
                <div className={styles.leftContentWrapper}>
                    <p className={styles.leftContentText}>
                        Lorem ipsum dolor sit amet consectetur. Semper senectus
                        nunc non aenean interdum sit sit. Ultrices habitasse
                        massa pellentesque semper.
                    </p>
                    <div className={styles.contacts}>
                        <Link href='tel:+3803579608'>+3803579608</Link>
                        <Link href='tel:+3803579608'>+3803579608</Link>
                        <Link href='mailto:BoomRoom@gmail.com'>
                            BoomRoom@gmail.com
                        </Link>
                    </div>
                </div>
                <div className={styles.rightContentWrapper}>
                    <div className={styles.navWrapper}>
                        <Navigation className={styles.FooterNavigation} />
                        <Support />
                    </div>
                    <div className={styles.btnsWrapper}>
                        <CallBtn />
                        <OrderBtn openModal={openModal} />
                    </div>
                </div>
            </div>
            <p className={styles.rights}>ⓒ Boom Room. All rights reserved.</p>
            <Link
                href='https://webevery.dev/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.webevery}
            >
                webevery.dev
            </Link>
            <ModalR isOpen={isModalOpen} closeModal={closeModal}>
                <OrderForm isOpen={isModalOpen} closeModal={closeModal} />
            </ModalR>
        </footer>
    );
};

export default TabletFooter;
