"use client";

import React, { useState, useEffect, startTransition } from "react";

import Image from "next/image";
import { HorizontalScrollCarousel } from "./cards";
import { Heart } from "iconsax-react";
import { getLikeCount, LikePage } from "./action";
import { cn } from "@/utils";

const Main = () => {
  const [open, setOpen] = useState(true);
  const [likes, setLikes] = useState<number | null>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      startTransition(() => {
        getLikeCount().then((res) => {
          setLikes(res.likes ?? 0);
        });
      });
    };
    fetchCount();

    const liked = localStorage.getItem("hasLiked");
    if (liked) {
      setHasLiked(true);
    }
  }, []);

  const handleLike = async () => {
    if (!hasLiked) {
      startTransition(() => {
        LikePage().then((res) => {
          if (res !== undefined) {
            setLikes(res.likes ?? 0);
            localStorage.setItem("hasLiked", "true");
            setHasLiked(true);
          }
        });
      });
    }
  };
  return (
    <>
      {open ? (
        <section className="bg-gray-950 h-screen w-full flex justify-center items-center select-none overflow-hidden fixed z-[9999999999]">
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-10 loader-con">
            <div className="span loader">
              <span className="m">HNG</span>
              <span className="m">11</span>
              <span className="m">&nbsp;</span>
              <span className="m">A</span>
              <span className="m">P</span>
              <span className="m">O</span>
              <span className="m">L</span>
              <span className="m">O</span>
              <span className="m">G</span>
              <span className="m">Y</span>
              <span className="m">&nbsp;</span>
              <span className="m">A</span>
              <span className="m">P</span>
              <span className="m">P</span>
            </div>
          </div>
        </section>
      ) : (
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
              specialize in securing digital landscapes while crafting dynamic
              and user-friendly web experiences. <br className=" " />I made a
              few mistakes during my journey <br />
              <span className="text-secondary text-2xl">
                IN HNG11
              </span> <br /> and this was made as an apology for my mistakes.
              <span>
                {" "}
                I will be stating the rules and my offences so you{" "}
                <span className="text-2xl">🫵 🫵</span> won&apos;t make the same
                mistakes
              </span>
            </h2>

            <div className="flex items-center justify-center gap-4 mt-5">
              <button
                className={cn(
                  "bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2",
                  hasLiked ? "cursor-not-allowed opacity-50 " : ""
                )}
                onClick={handleLike}
                disabled={hasLiked}
              >
                <Heart size={24} />
                Like ({likes})
              </button>
            </div>
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
      )}
    </>
  );
};

export { Main };
