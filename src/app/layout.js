import "./globals.css";
import TranslatorProvider from "@/translator/i18Provider";
import ToastProvider from "@/context/ToastProvider";
// import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { SiteProvider } from "@/context/SiteContext";
// const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("@/components/Footer/Footer"));

export const metadata = {
  title: "Daily Rent - оренда квартири Суми. Квартири подобово.",
  description:
    "Суми квартири. Зняти квартиру Суми. Оренда квартири Суми. Квартири подобово. Квартири на день",
  keywords: [
    "Суми квартири",
    "Зняти квартиру суми",
    "Квартири на день",
    "Квартири подобово",
    "Оренда квартири суми",
    "Сумы квартиры",
    "Аренда квартир сумы посуточно",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MAIN_URL,
  },
  themeColor: "#373737",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <SiteProvider>
          <ToastProvider>
            <AuthProvider>
              <TranslatorProvider>
                <Header />
                <main>{children}</main>
                {/* <Footer /> */}
                <DynamicFooter />
              </TranslatorProvider>
            </AuthProvider>
          </ToastProvider>
        </SiteProvider>
      </body>
    </html>
  );
}
