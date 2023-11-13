"use client";
import { useState } from "react"
import styles from "./TranslatorBtnBlock.module.scss"


export const LangSwitcher = ({changeLanguage, currentLanguage}) => {
    const [lang, setLang] = useState(()=>currentLanguage === "ua" ? "Укр" : "Eng")
    
    const onHandleChange = () => {
        setLang((prev) => prev === "Укр" ? "Eng" : "Укр")
        const languageUser = lang === "Укр" ? "en" : "ua";
        changeLanguage(languageUser)
    }
    return (
        <div className={styles.langSwitcher}>
            <span className={styles.langIndicator}>{lang}</span>
                <div className={styles.langToggle} onClick={onHandleChange}>
                    {/* <div><span>{"Укр"}</span></div>
                    <div><span>{"Eng"}</span></div> */}
                <div className={lang ==="Укр" ? styles.ball : styles.ball + " " + styles.ballEng} 
                // style={lang ==="Укр" ? {left:20} : {left:-7} } 
                ></div>
            </div>
        </div>
    )
}