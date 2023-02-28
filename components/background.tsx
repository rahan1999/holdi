import * as React from "react";

export default function Background() {
  return (
    <div>
      <div className="fixed  z-0 h-screen w-full">
        <div
          id="top"
          className="bg-box h-full w-full bg-cover bg-fixed bg-center duration-500"
        ></div>
        <div
          id="activity"
          className="bg-box h-0 w-full bg-cover bg-fixed bg-center duration-500"
        ></div>
        <div
          id="contact"
          className="bg-box h-0 w-full bg-cover bg-fixed bg-center duration-500"
        ></div>
        <div className="bg-box h-0 w-full"></div>
      </div>
      <div id="topBox" className="-z-10 h-screen">
        <div className="box relative bottom-0 h-10 w-10"></div>
      </div>
      <div id="activityBox" className="z-70 h-screen">
        <div className="box relative top-1/2 h-10 w-10"></div>
      </div>
      <div id="contactBox" className="z-70 h-screen">
        <div className="box relative top-0 h-10 w-10"></div>
      </div>
    </div>
  );
}
