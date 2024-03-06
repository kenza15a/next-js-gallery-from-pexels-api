import React from "react";
import Link from "next/link";
import SearchForm from "./SearchForm";
function Navbar() {
  return (
    <>
      <header className="bg-black sticky top-0 z-10">
        <nav className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:justify-between  p-4 max-w-7xl mx-auto text-white">
          <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
            <Link href="/">My next js pexels Gallery</Link>
          </h1>
          <SearchForm />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
