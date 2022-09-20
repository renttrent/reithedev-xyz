import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center mx-10 p-4">
        <button className="cursor-pointer text-2xl text-zima-500 font-bold logo">
          reithedev<span className="text-zima-400">.</span>
        </button>
        <div className="text-xl text-white w-1/3 flex flex-row justify-between items-center">
          <a>home</a>
          <a>about</a>
          <a>blog</a>
          <a>projects</a>
        </div>
      </div>
      <div className="w-1/4 absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="font-extrabold text-5xl playfair text-blue-50/90">
          Hi, I am Rei
        </div>
        <div className="text-3xl text-blue-50/70">
          I am a software engineer with a passion for frontend.
        </div>
        <div className="text-2xl text-blue-50/70">
          Making useful systems with beautiful designs.
        </div>
        <button className="mt-10 w-full text-2xl p-3 text-zima-500 border-2 border-zima-300 rounded-sm action-shadow hover:text-white">
          hire me.
        </button>
      </div>
      <div className="absolute top-1/3 -translate-y-10 left-1/3 translate-x-96">
        <div className="relative w-96 -z-20 h-80">
          <div className="absolute top-2 grid gap-4 w-full">
            {[...Array(10)].map((_, i) => (
              <div className="w-full h-4 bg-zima-200/5" />
            ))}
          </div>
          <div className="absolute grid left-4 grid-cols-10 gap-4 w-11/12 h-80">
            {[...Array(10)].map((_, i) => (
              <div className="w-4 h-full bg-zima-200/5" />
            ))}
          </div>
          <div className="playfair font-extrabold italic text-white text-3xl grid gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div>github</div>
            <div>linkedin</div>
            <div>twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
