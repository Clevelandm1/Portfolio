import { motion } from "motion/react";

function homeButton() {
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
          padding: 4,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="text-neutral-300 font-bold text-5xl flex-auto min-w-30 min-h-30 rounded-xl w-full h-full"
          viewBox="0 0 16 16"
        >
          <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
        </svg>
      </motion.button>
    </>
  );
}

export default homeButton;
