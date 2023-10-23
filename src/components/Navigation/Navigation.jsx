// import React from "react";
// import styles from "./Navigation.module.scss";
// import { navigationData } from "@/data/navigation.data";
// import Link from "next/link";

// const Navigation = ({ className, onClick }) => {
//   return (
//     <ul className={styles.container + " " + `${className}`}>
//       {navigationData.slice(0, 4).map((item) => {
//         return (
//           <li key={item.id} onClick={onClick}>
//             <Link href={item.path}>{item.title}</Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Navigation;

// временныйе ко - для отображения oldApartments. постоянный выше. разница в navigationData.slice(0, 5)
import React from "react";
import styles from "./Navigation.module.scss";
import { navigationData } from "@/data/navigation.data";
import Link from "next/link";

const Navigation = ({ className, onClick }) => {
  return (
    <ul className={styles.container + " " + `${className}`}>
      {navigationData.slice(0, 4).map((item) => {
        return (
          <li key={item.id} onClick={onClick}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
