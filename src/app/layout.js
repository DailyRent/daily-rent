import "./globals.css";
import TranslatorProvider from "@/translator/i18Provider";
// import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { SiteProvider } from "@/context/SiteContext";

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
        <SiteProvider>
          <AuthProvider>
            <TranslatorProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </TranslatorProvider>
          </AuthProvider>
        </SiteProvider>
      </body>
    </html>
  );
}
