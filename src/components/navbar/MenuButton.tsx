import { motion } from "motion/react";

interface menuButtonProps {
  toggle: () => void;
}

function MenuButton(props: menuButtonProps) {
  return (
    <>
      <motion.button
        initial={{
          boxShadow: "0px 0px 10px #000",
          borderRadius: "13px",
          opacity: 0.65,
          backgroundColor: "#171717",
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
        style={{
          width: "6vh",
          height: "6vh",
        }}
        onClick={props.toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="text-neutral-300 font-bold text-5xl flex-auto min-w-30 min-h-30 rounded-xl w-full h-full"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </motion.button>
    </>
  );
}

export default MenuButton;
