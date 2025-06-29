import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AllProvider from "@/components/AllProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RESUME OF LAI CHEE HOONG",
  description: "RESUME OF LAI CHEE HOONG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AllProvider>{children}</AllProvider>
      </body>
    </html>
  );
}
