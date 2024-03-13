"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function SearchForm() {

  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };
  return (
    <form
      className="flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-[250px] sm:w-80 text-xl rounded-xl text-[#000000] outline-none mobile:w-[90%] mx-auto	"
      />
    </form>
  );
}

export default SearchForm;
