import * as React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="">
      <div>
        <div className="fixed bottom-1/2 left-[93%] z-20 flex h-24 w-5 flex-col items-center justify-around md:left-[96%]">
          <Link
            href="/#topBox"
            className="indicator h-3 w-3 rounded-lg bg-yellow-400 duration-1000"
          ></Link>
          <Link
            href="/#activityBox"
            className="indicator h-1.5 w-1.5 rounded-lg bg-zinc-200 duration-1000"
          ></Link>
          <Link
            href="/#contactBox"
            className="indicator uration-1000 h-1.5 w-1.5 rounded-lg bg-zinc-200"
          ></Link>
        </div>
      </div>
    </div>
  );
}
