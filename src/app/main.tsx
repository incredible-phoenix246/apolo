"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { HorizontalScrollCarousel } from "./cards";

const Main = () => {
  return (
    <main className="relative sm:min-h-screen w-full xl:overflow-hidden ">
      <Image
        width={1200}
        height={1200}
        src="/gradient.svg"
        alt="gradient"
        className="inset-0 fixed min-h-screen object-cover w-full opacity-90"
      />
      <div
        className="fixed inset-0  "
        style={{
          backgroundImage: `url('/square.svg')`,
          backgroundSize: "120px",
        }}
      />

      <div className="2xl:pt-5 pt-4 min-h-screen relative z-10 flex justify-center flex-col items-center !overflow-hidden transition-all duration-700">
        <div className="flex items-center max-md:flex-col justify-center w-full gap-3 max-sm:text-center">
          <Image
            width={736}
            height={981}
            src="/me.jpeg"
            alt="gradient"
            className="max-w-[300px] object-cover aspect-[2/3] max-h-[250px] rounded-2xl"
          />
          <div className="">
            <span className="text-secondary"> Hi, my name is</span>
            <h1 className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
              PHOENIX.
            </h1>
            <h2 className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
              I breath life into your ideas
            </h2>
          </div>
        </div>
        <h2 className="text-gray-400 font-Header text-base md:text-lg sm:text-md mt-10 tracking-wider text-center">
          I&apos;m a{" "}
          <span className="text-secondary">Full-Stack Developer</span>, I
          specialize in securing digital landscapes while crafting dynamic and
          user-friendly web experiences. <br className=" " />I made a few
          mistakes during my journey <br />
          <span className="text-secondary text-2xl">IN HNG11</span> <br /> and
          this was made as an apology for my mistakes.
          <span>
            {" "}
            I will be stating the rules and my offences so you{" "}
            <span className="text-2xl">🫵 🫵</span> won&apos;t make the same
            mistakes
          </span>
        </h2>
      </div>
      <section className="z-10 relative">
        <div className="flex items-center justify-center">
          <span className="font-semibold uppercase text-white text-4xl">
            Mistakes I made
          </span>
        </div>
        <HorizontalScrollCarousel />

        <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          I HOPE THIS SERVES AS A WARNING TO YOU 🫵 🫵 <br /> ENJOY YOUR HNG
          JOURNEY
        </div>
      </section>
    </main>
  );
};

// 736x981

export { Main };
