import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
function DevSocials() {
  return (
    <div
      className=" h-1 grid z-10 grid-cols-auto justify-start mx-6 p-2 sticky top[40vh]  left-0  gap-11  mobile:h-8 rounded-lg mobile:bg-black mobile:py-2  mobile:flex mobile:flex-row mobile:gap-4 mobile:sticky mobile:bottom-1 mobile:bg-opacity-50 after:content
      after:w-px after:h-8 after:bg-blue-400 after:grid after:m-1 mobile:after:hidden"
    >
      <a
        className=" text-blue-400"
        href="https://www.linkedin.com/in/kenza-fil/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className=" text-blue-400"
        href="https://github.com/kenza15a"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareGithub />
      </a>
      <a
        className=" text-blue-400"
        href="https://www.behance.net/kenzafilali?log_shim_removal=1"
        target="_blank"
        rel="noreferrer"
      >
        <FaBehanceSquare />
      </a>
      <a
        className="text-blue-400 mt-8 absolute right-[2.3rem] top-4 [rotate:90deg]  font-light text-[1rem]  text-blue-400 mobile:[rotate:0deg] mobile:absolute mobile:top-0 mobile:mt-0 mobile:text-base ] "
        href="https://www.linkedin.com/in/kenza-fil/"
        target="_blank"
        rel="noreferrer"
      >
        Contact Me{" "}
      </a>
    </div>
  );
}

export default DevSocials;
