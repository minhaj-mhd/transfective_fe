import Head from "next/head";
import Image from "next/image";

import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Localization from "./components/Localization"
import Importance from "./components/Importance";
import Proccess from "./components/Proccess";
import why from "./components/WhyCards";
import WhyCards from "./components/WhyCards";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Localization/>
    <Importance />
    <Proccess />
    <WhyCards />
    <Footer />
    </>
  );
}
