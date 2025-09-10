import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope", 
  subsets: ["latin"],
});

export const metadata = {
  title: "Crooz-Ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${manrope.variable} antialiased`}
      >
         <div className="min-h-screen">
      <div className="lg:flex hidden">
        <Sidebar  />
      </div>
      <div className="py-[17px]  flex flex-col overflow-auto h-full max-h-screen px-[20px] md:px-[32px] ml-auto max-w-full w-full lg:w-[calc(100vw-260px)]">
        <Navbar />
        <main className="overflow-y-auto h-full px-6">{children}</main>
      </div>
    </div>
      </body>
    </html>
  );
}
