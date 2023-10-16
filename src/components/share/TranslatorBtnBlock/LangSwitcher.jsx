"use client";
import { useState } from "react"
import styles from "./TranslatorBtnBlock.module.scss"


export const LangSwitcher = ({changeLanguage, currentLanguage}) => {
    const [lang, setLang] = useState(()=>currentLanguage === "ua" ? "Eng" : "Укр")
    
    const onHandleChange = () => {
        setLang((prev) => prev === "Укр" ? "Eng" : "Укр")
        const languageUser = lang === "Укр" ? "ua" : "en";
        changeLanguage(languageUser)
    }
    return (
        <div className={styles.langToggle} onClick={onHandleChange}>
            <div><span>{"Укр"}</span></div>
            <div><span>{"Eng"}</span></div>
            <div className={styles.ball} style={lang ==="Укр" ? {right:0} : {left:0} } ></div>
        </div>
    )
}