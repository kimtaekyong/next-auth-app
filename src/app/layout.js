import React from "../style/globals.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-screen-md m-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
