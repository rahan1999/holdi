import * as React from "react";
import Top from "../components/top";
import Subpages from "./subpages";

let bufor: number = 0;
let curtainToggle: number = 0;
let toggleLock: number = 0;

const toggle = (id: number) => {
  if (toggleLock == 0) {
    const sections: NodeListOf<Element> = document.querySelectorAll(".section");
    const indicators: NodeListOf<Element> =
      document.querySelectorAll(".indicator");
    const background: NodeListOf<Element> =
      document.querySelectorAll(".bg-box");

    const position: string[] = ["top-[0%]", "top-[-100%]", "top-[-200%]"];
    const backgroundHeights: string[] = ["h-full", "h-0"];
    const indicatorsColor: string[] = ["bg-zinc-200", "bg-yellow-400"];
    const indicatorsHeight: string[] = ["h-1.5", "h-3"];
    const indicatorsWidth: string[] = ["w-1.5", "w-3"];

    let loopElement: number[] = [1, 0];
    const pointer: number[] = [bufor, id];
    const loopThrough: string[][] = [
      indicatorsColor,
      indicatorsHeight,
      indicatorsWidth,
    ];

    sections[0].classList.replace(position[bufor], position[id]);

    for (let i: number = 0; i < 2; i++) {
      background[pointer[i]].classList.replace(
        backgroundHeights[loopElement[1]],
        backgroundHeights[loopElement[0]],
      );
      loopElement.push(loopElement.shift()!);
    }

    for (let i: number = 0; i < 3; i++) {
      for (let j: number = 0; j < 2; j++) {
        indicators[pointer[j]].classList.replace(
          loopThrough[i][loopElement[0]],
          loopThrough[i][loopElement[1]],
        );
        loopElement.push(loopElement.shift()!);
      }
    }

    bufor = id;
  } else {
    return;
  }
};
const curtainSwitch = () => {
  const background: Element = document.querySelectorAll(".bg-box")[bufor];
  const curtains: Element = document.querySelectorAll(".curtain")[bufor - 1];
  const curtainsElements: Element[] = [
    background,
    curtains.children[0],
    curtains.children[1],
    curtains.children[1],
  ];
  const backgroundHeights: string[] = ["h-full", "h-[12%]"];
  const curtainHeights: string[] = ["h-0", "h-[88%]"];
  const display: string[] = ["hidden", "flex"];
  const loopThrough: string[][] = [
    backgroundHeights,
    backgroundHeights,
    curtainHeights,
    display,
  ];
  const timer: number[] = [0, 0, 0, 500];

  if (curtainToggle == 0) {
    for (let i: number = 0; i < 4; i++) {
      curtainsElements[i].classList.replace(
        loopThrough[i][0],
        loopThrough[i][1],
      );
    }

    curtainToggle = 1;
    toggleLock = 1;
  } else {
    for (let i: number = 0; i < 4; i++) {
      setTimeout(() => {
        curtainsElements[i].classList.replace(
          loopThrough[i][1],
          loopThrough[i][0],
        );

        curtainToggle = 0;
        toggleLock = 0;
      }, timer[i]);
    }
  }
};

const onView = (): void => {
  const box = document.querySelectorAll(".box");

  for (let i: number = 0; i < box.length; i++) {
    let rect: DOMRect = box[i].getBoundingClientRect();

    const isInViewport: boolean =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth;

    if (isInViewport === true) {
      toggle(i);
    }
  }
};

export default function Carousel() {
  React.useEffect(() => {
    window.onscroll = function () {
      onView();
    };
  }, []);

  return (
    <div
      className="section fixed top-[0%] z-10 w-full duration-1000"
      data-testid="carousel"
    >
      <Top></Top>
      <Subpages
        mainTitle="Zakres działalności"
        subTitle="Firma Holdi świadczy usługi związane z:"
        content="sprzedażą urządzeń biurowych/sprzedażą komputerów i peryferiów/usuwaniem awarii mechanicznych w urządzeniach biurowych/usuwaniem awarii elektronicznych w urządzeniach biurowych/usuwaniem awarii wewnętrznych sieci komputerowych/dostarczaniem materiałów eksploatacyjnych/montażem i uruchamianiem urządzeń biurowych/doradztwem technicznym"
        link="/#activityBox"
        curtain={curtainSwitch}
      ></Subpages>
      <Subpages
        mainTitle="Kontakt"
        subTitle="Kontakt z firmą Holdi jest możliwy za pomocą:"
        content="tel: 501-603-194/E-mail: holdi@vp.pl"
        link="/#contactBox"
        curtain={curtainSwitch}
      ></Subpages>
    </div>
  );
}
