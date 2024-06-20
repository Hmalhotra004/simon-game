import Context from "@/Context/Context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./modern.css";
import "./utils.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Simon Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
