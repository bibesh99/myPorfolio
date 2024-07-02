import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navigation/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bibesh Gurung",
  description: "Welcome To My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col md:flex md:flex-col bg-black`}>
        {/* <div className="md:flex  md:absolute md:z-50 md:bg-transparent md:text-xl md:w-full md:justify-end">
          <Navbar/>
        </div> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
