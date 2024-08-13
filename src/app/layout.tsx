import Context from "@/Context/Context";
import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./modern.css";
import "./utils.scss";
require("dotenv").config();

const inter = Inter({ subsets: ["latin"] });

const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--press",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simon Game",
};

const fonts = `${press.variable} ${inter.className}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
