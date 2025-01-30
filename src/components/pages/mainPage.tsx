import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { Blurhash } from "react-blurhash";
import ImageComponent from "../tools/imageComponent";


function MainPage() {
  const button_dark = [
    { boxShadow: "0px 0px 5px #000", backgroundColor: "#262626" },
    {
      boxShadow: "0px 0px 25px #000",
      backgroundColor: "#1f1f1f",
      scale: 1.1,
    },
    { scale: 0.8, y: "30px" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);



  return (
    <>
      <div className="p-[5%] flex flex-col items-center gap-4 ">
        <ImageComponent src="https://github.com/Clevelandm1/Portfolio/blob/HomePage/public/images/IMG_8850.JPG?raw=true"/>

        <motion.div
          className="rounded-[40px]"
          initial={{ borderWidth: 0, background: "#F5F5DC" }}
          whileHover={{
            background: "#e6e6c1",
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          <h1 className="font-gabRegular font-bold h1-1 text-6xl pt-2 px-4">
            Cleveland Martin IV
          </h1>
        </motion.div>
        <motion.div
          className="rounded-[40px] max-w-[800px]"
          initial={{ borderWidth: 0, background: "#F5F5DC" }}
          whileHover={{
            background: "#e6e6c1",
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          <h1 className="font-gabRegular font-bold h1-1 text-4xl pt-2 px-4">
            Hey, I'm Cleveland...
          </h1>
          <h1 className="font-gabRegular font-bold h1-1 text-2xl pt-3 px-4">
            Welcome to my Portfolio! Here, you'll find some of my projects, my skills, and some experiences. Scroll to continue!
          </h1>
        </motion.div>
        <motion.div
          className="h-[600px] w-3/4 flex items-center justify-center rounded-3xl"
          initial={{ opacity: 0, y: 75, background: "#461D7C" }}
          whileInView={{ opacity: 1, y: 0, background: "#7d4bbf" }}
          viewport={{ amount: "some", once: true, margin: "-20px" }}
          transition={{ duration: 0.5, type: "tween", delay: 0.1 }}
        >
          <p className="font-gabRegular text-5xl font-extrabold">
            UNDER CONSTRUCTION...
          </p>
        </motion.div>
        <motion.div
          className=" bg-black h-[4000px]"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          ok
        </motion.div>
      </div>
    </>
  );
}

export default MainPage;
