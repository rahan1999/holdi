import * as React from "react";

export default function Footer() {
  return (
    <div
      id="footer"
      className="flex h-[8%] w-full items-center justify-center bg-holdi-footer text-[60%] tracking-widest text-white md:text-xs"
    >
      <p className="">
        <span className="text-zinc-400 ">&#169; 2023 BY </span>
        <span className="text-zinc-100 hover:text-yellow-400 ">
          <a href="https://pp-portfolio.vercel.app" target={"_blank"}>
            PAWEŁ PODOLAK
          </a>
        </span>
      </p>
    </div>
  );
}
