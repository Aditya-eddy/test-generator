import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";

export function AnimatedCards({ test }) {
  const Emoji = "\u{1F430}";
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <h1></h1>
      {test.map((item, index) => (
        <a href={`testing/${item.href}`}>
          <PinContainer
            key={index} // Add a unique key prop for each PinContainer
            title={item.name}
            href={`testing.${item.href}`}
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-500 sm:basis-1/2 w-[20rem] h-[20rem] bg-gradient-to-r from-orange-200 to-orange-400 rounded-base">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-700">
                Experience the {item.name}..{Emoji}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-600 ">
                  {item.designation} Allows to test online using Keploy. How
                  Awesome is that!{" "}
                </span>
              </div>
            </div>
          </PinContainer>
        </a>
      ))}
    </div>
  );
}
