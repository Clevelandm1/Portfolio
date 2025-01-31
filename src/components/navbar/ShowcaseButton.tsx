import { motion } from "motion/react";

function ShowcaseButton() {
  return (
    <>
      <motion.button
        initial={{
          boxShadow: "0px 0px 10px #000",
          borderRadius: "13px",
          opacity: 0.65,
          paddingLeft: "1%",
          paddingRight: "1.2%",
          paddingBottom: ".5%",
          backgroundColor: "#262626",
        }}
        whileHover={{
          boxShadow: "0px 0px 15px #000",
          scale: 1.05,
          opacity: 1,
          transition: { duration: 0.1 },
        }}
        whileTap={{
          boxShadow: "0px 0px 15px #000",
          scale: 0.97,
          opacity: 1,
          transition: { duration: 0.05 },
        }}
      >
        <div className="text-neutral-300 pl-[1%] pr-[1%] pt-[.1%]text-center font-bold text-4xl flex-auto rounded-xl ">
          SHOWCASE
        </div>
      </motion.button>
    </>
  );
}

export default ShowcaseButton;
