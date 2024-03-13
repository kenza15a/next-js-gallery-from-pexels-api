import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
import DevSocials from "./components/DevSocials";
export const revalidate = 3600; //change the cach every hour load new pics from the api
export const metadata: Metadata = {
  title: "Pexels Gallery App",
  description: "Developpd with nextjs Kenza Filali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-0">
        <Navbar />
        <main className="max-w-5xl mx-auto h-[80vh] mt-2 ">{children}</main>
        <DevSocials />
      </body>
    </html>
  );
}
