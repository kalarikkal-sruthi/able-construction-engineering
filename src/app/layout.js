import Header from "@/componets/layout/Header";
import "./globals.css";
import Footer from "@/componets/layout/Footer";

export const metadata = {
  title:"Able Group",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialised text-gray-500 ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
