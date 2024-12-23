import { motion } from "motion/react";
import Sketch from "../../p5/sketchTest";
import { useState } from "react";
import Profile from "../content/Profile";

function HomePage() {
  const button_dark = [
    { boxShadow: "0px 0px 5px #000", backgroundColor: "#262626" },
    {
      boxShadow: "0px 0px 25px #000",
      backgroundColor: "#1f1f1f",
      scale: 1.1,
    },
    { scale: 0.8, y: "30px" },
  ];

  const items = [];

  for (let i = 0; i < 51; i++) {
    items.push(i);
  }

  return (
    <>
      <div className="fixed top-0 z-[-2]">
        <Sketch />
      </div>

      <div className=" bg-neutral-500 w-[100vw]  p-[5%]">
        <Profile />
      </div>

      <div className="flex justify-center items-center p-10">
        <div className="flex gap-4 flex-wrap justify-center items-center max-w-screen-lg">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="testclass"
              initial={button_dark[0]}
              whileHover={button_dark[1]}
              whileTap={button_dark[2]}
            >
              <h3 className="text-stone-600 text-center font-bold">
                Hello, User {item}!
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
