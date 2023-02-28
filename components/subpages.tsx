import * as React from "react";
import Link from "next/link";
import Footer from "./footer";

export default function Subpages({
  mainTitle,
  subTitle,
  content,
  link,
  curtain,
}: any) {
  const contentArray = content
    .split("/")
    .map((item: string) => <li>{item}</li>);

  return (
    <div data-testid="subpages">
      <div className="curtain bg-no-repea h-screen w-full bg-cover bg-fixed bg-center text-center">
        <div className="flex h-full w-full items-center justify-center duration-500 md:mr-20 md:justify-end md:pr-20">
          <Link href={`${link}`} className="cursor-default" onClick={curtain}>
            <h1 className="relative cursor-pointer text-3xl font-semibold text-white duration-300 hover:text-yellow-400 md:my-8 md:text-5xl">
              {mainTitle}
            </h1>
          </Link>
        </div>
        <div className="hidden h-0 w-full flex-col items-center duration-500">
          <div className="w-full px-[5%] pt-[5%] md:pt-[2%]">
            <div
              className="h-5 w-5 rotate-45 cursor-pointer border-l-4 border-b-4 border-black duration-300 hover:border-yellow-400 md:h-8 md:w-8"
              onClick={curtain}
            ></div>
          </div>
          <div className="flex h-[90%] w-full flex-col justify-center md:mr-20 md:w-[90%] md:p-5">
            <div className="flex h-full flex-col items-center justify-evenly p-1 md:justify-center md:p-0">
              <h1 className="mb-3 text-xl md:mb-9 md:text-3xl">{subTitle}</h1>

              <ul className="list-inside list-disc text-left text-sm md:text-lg">
                {contentArray}
              </ul>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
