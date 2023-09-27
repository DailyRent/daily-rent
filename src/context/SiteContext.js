"use client";
import React, { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [state, setState] = useState(false);
  // console.log(state);
  const [language, setLanguage] = useState("en");
  console.log(language);

  return (
    <SiteContext.Provider
      value={{
        state,
        setState,
        language,
        setLanguage,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

//=========================================
// ex/Button/Button.jsx
//
// "use client";

// import { SiteContext } from "@/siteContext/SiteContext";
// import React, { useContext } from "react";
// import styles from "./Button.module.scss";

// const Button = ({ classname, type, title }) => {
//   const { state, setState } = useContext(SiteContext);
//   return (
//     <button
//       type={type}
//       className={styles.button + " " + `${classname}`}
//       onClick={() => {
//         console.log("Button is clicked"), setState(!state);
//       }}
//     >
//       {title}
//     </button>
//   );
// };
// export default Button;
