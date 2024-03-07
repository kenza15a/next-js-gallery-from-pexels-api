import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
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
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
