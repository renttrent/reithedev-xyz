import type { NextPage } from "next";
import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

var scroll = 0;

const subscribe = (callback: any) => {};

const Home: NextPage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);
  const [scrollLevel, setScrollLevel] = useState(0);
  const ref = useRef<number>(0);
  // useSyncExternalStore()
  ref.current = scroll;
  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      //@ts-ignore
      if (e.wheelDelta > 0) {
        scroll--;
      } else {
        scroll++;
      }
    });
  }, []);

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <div className="">
      <motion.div
        className="absolute w-screen h-screen z-50 bg-zima-50"
        initial={{ opacity: 1 }}
        animate={{
          y: -4000,
        }}
        transition={{
          duration: 1.5,
          delay: 2,
        }}
      >
        <div className="w-full h-full relative">
          <button className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer text-5xl text-zima-500 font-bold">
            reithedev<span className="text-zima-400">.</span>
          </button>
        </div>
      </motion.div>
      <div className="fixed w-full z-40">
        <div className="flex flex-row justify-between items-center mx-10 p-4">
          <button className="cursor-pointer text-2xl text-zima-500 font-bold logo">
            reithedev<span className="text-zima-400">.</span>
          </button>
          <div className="text-xl font-semibold text-white w-1/3 flex flex-row justify-between items-center">
            <Link href="/">
              <button className="cursor-pointer hover:text-zima-400 transition-all ease-in-out duration-300 border-b-2 border-transparent outline-none focus-visible:outline-none focus:border-zima-400">
                home
              </button>
            </Link>
            <Link href="/about">
              <button className="cursor-pointer hover:text-zima-400 transition-all ease-in-out duration-300 border-b-2 border-transparent outline-none focus-visible:outline-none focus:border-zima-400">
                about
              </button>
            </Link>
            <Link href="/blog">
              <button className="cursor-pointer hover:text-zima-400 transition-all ease-in-out duration-300 border-b-2 border-transparent outline-none focus-visible:outline-none focus:border-zima-400">
                blog
              </button>
            </Link>
            <Link href="/projects">
              <button className="cursor-pointer hover:text-zima-400 transition-all ease-in-out duration-300 border-b-2 border-transparent outline-none focus-visible:outline-none focus:border-zima-400">
                projects
              </button>
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        className="fixed w-screen h-1/2 top-1/4 xl:top-0 xl:h-screen"
        style={{ opacity: 1 - scrollLevel * 0.003 }}
      >
        <div className="absolute w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 xl:grid-cols-2 gap-20">
          <div className="grid xl:w-5/6 gap-4">
            <div className="font-extrabold text-3xl xl:text-5xl playfair text-blue-50/90 test">
              Hi, I am Rei
            </div>
            <div className="text-xl xl:text-3xl text-blue-50/70">
              I am a software engineer with a passion for frontend.
            </div>
            <div className="text-lg xl:text-2xl text-blue-50/70">
              Making useful systems with beautiful designs.
            </div>
            <Link href="mailto:reiballa@gmail.com">
              <button className="mt-10 w-full text-lg xl:text-2xl p-3 text-zima-500 border-2 border-zima-300 rounded-sm action-shadow hover:text-white">
                hire me.
              </button>
            </Link>
          </div>
          <div className="relative w-full h-fit border-2 border-zima-200/10 rounded-md">
            {/* <div className="w-72 xl:w-96 -z-20 h-52 xl:h-80"> */}
            {/* <div className="absolute top-2 grid gap-3 xl:gap-4 w-full">
                  {[...Array(10)].map((_, i) => (
                    <div className="w-full h-2 xl:h-4 bg-zima-200/5" />
                  ))}
                </div>
                <div className="absolute grid left-4 grid-cols-10 gap-3 xl:gap-4 w-11/12 h-52 xl:h-80">
                  {[...Array(10)].map((_, i) => (
                    <div className="w-2 xl:w-4 h-full bg-zima-200/5" />
                  ))}
                </div> */}
            <motion.div
              className="absolute w-10 h-10 rounded-full bg-zima-400/70"
              initial={{ x: 40, y: 50 }}
              whileDrag={{ scale: 1.4 }}
              drag
              dragConstraints={{ left: 10, right: 150, top: 10, bottom: 180 }}
            />
            <motion.div
              className="absolute w-10 h-10 rounded-full bg-zima-400/70"
              initial={{ x: 60, y: 50 }}
              whileDrag={{ scale: 1.4 }}
              drag
              dragConstraints={{ left: 10, right: 150, top: 10, bottom: 180 }}
            />
            <div className="playfair font-extrabold italic text-white/90 text-xl xl:text-3xl grid gap-4 w-full text-center p-10">
              <Link href="https://www.github.com/renttrent">
                <button className="w-1/3 m-auto social">github</button>
              </Link>
              <Link href="https://www.linkedin.com/in/reiballa">
                <button className="w-1/3 m-auto social">linkedin</button>
              </Link>
              <Link href="https://www.twitter.com/reithedev">
                <button className="w-1/3 m-auto social">twitter</button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="playfair font-extrabold italic text-zima-50 absolute -bottom-52 xl:bottom-10 text-2xl left-1/2 -translate-x-1/2">
          scroll
        </div> */}
      </motion.div>
      <div className="absolute top-full w-90 left-1/2 -translate-x-1/2 h-90 bg-red-500">
        <motion.div
          className="text-4xl text-black"
          initial={{ opacity: 0 }}
          variants={{
            visible: { opacity: 1 },
          }}
        >
          This is a test
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
