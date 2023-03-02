import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { DM_Serif_Display, DM_Sans } from "@next/font/google";

const bodyFont = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const headerFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <style jsx global>{`
        html {
          font-family: ${bodyFont.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: ${headerFont.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
