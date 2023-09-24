import "./globals.css";
import TranslaterProvider from "@/translater/i18Provider";
// import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily Rent",
  description: "Daily Rent description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <AuthProvider>
          <TranslaterProvider>
          <Header />
          <main>{children}</main>
            <Footer />
            </TranslaterProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
