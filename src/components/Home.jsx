import React from 'react'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, we are</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          codeComet
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className='mr-2'>We Build</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Flawless Websites")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Business Internal Tools")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Inventory Management System")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("1000 more")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
We're the tech magicians who wave our wands at India's unconnected sectors. Our mission? To sprinkle digital stardust, turn old-school into cool, and help businesses soar on the wings of custom-made wizardry!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold">
            {"Let World Know You "}
            <span className="group-hover:translate-x-1 duration-300">
              {" "}

            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;