import React from "react";
import Link from "next/link";
import SearchForm from "./SearchForm";
function Navbar() {
  return (
    <>
      <header className="bg-[#406EA8] sticky top-0 z-10 bg-opacity-80">
        <nav className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:justify-between  p-4 max-w-7xl mx-auto text-white mobile:px-2">
          <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap mobile:text-xl">
            <Link href="/">My next js pexels Gallery</Link>
          </h1>
          <SearchForm />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
