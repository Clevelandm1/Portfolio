import { motion, useAnimationControls } from "motion/react";
import { useEffect, useState, ReactNode } from "react";

interface drawerProps {
  isDrawerOpen: boolean;
  toggle: () => void;
  children?: ReactNode;
}

let drawerVariants = {
  close: {
    width: window.innerWidth >= 1050 ? "20vw" : "40vw",
    height: "100%",
    transition: {
      type: "spring",
      damping: 16,
      duration: 0.1,
    },
    x: "100vw",
    opacity: 0,
  },

  open: {
    width: window.innerWidth >= 1050 ? "20vw" : "40vw",
    height: "100%",
    transition: {
      type: "spring",
      damping: 16,
      duration: 0.1,
    },
    x: window.innerWidth >= 1050 ? "80vw" : "60vw",
    opacity: 1,
    zIndex: 10,
  },

  hide: {
    opacity: 0,
  },
};

const overlayVariants = {
  OBlur: {
    height: "100vh",
    width: "100vw",
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.2,
    },
    opacity: 1,
    zIndex: 9,
  },

  OClear: {
    height: "100vh",
    width: "100vw",
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.2,
    },
    opacity: 0,
  },

  ODisable: {
    opacity: 0,
    zIndex: -2,
  },
};

let x: number,
  y: number = 0;
function disableScroll() {
  window.addEventListener("scroll", scrollFunction);
  x = window.scrollX;
  y = window.scrollY;
}

function enableScroll() {
  window.removeEventListener("scroll", scrollFunction);
}

function scrollFunction() {
  window.scrollTo({ top: y, left: x, behavior: "auto" });
}

function Drawer(props: drawerProps) {
  const drawerContols = useAnimationControls();
  const overlayControls = useAnimationControls();
  useEffect(() => {
    props.isDrawerOpen
      ? (drawerContols.start("open"),
        overlayControls.start("OBlur"),
        disableScroll())
      : (drawerContols.start("close"),
        overlayControls.start("OClear"),
        enableScroll());
  }, [props.isDrawerOpen]);

  useEffect(() => {
    drawerVariants = {
      close: {
        width: window.innerWidth >= 1050 ? "20vw" : "40vw",
        height: "100%",
        transition: {
          type: "spring",
          damping: 16,
          duration: 0.1,
        },
        x: "100vw",
        opacity: 0,
      },

      open: {
        width: window.innerWidth >= 1050 ? "20vw" : "40vw",
        height: "100%",
        transition: {
          type: "spring",
          damping: 16,
          duration: 0.1,
        },
        x: window.innerWidth >= 1050 ? "80vw" : "60vw",
        opacity: 1,
        zIndex: 10,
      },

      hide: {
        opacity: 0,
      },
    };
  }, [window.innerWidth]);

  return (
    <>
      <motion.div
        variants={overlayVariants}
        animate={overlayControls}
        initial={{ opacity: 0 }}
        className="backdrop-brightness-[.60] backdrop-blur-sm top-0 fixed"
        onAnimationComplete={(latest) => {
          latest == "OClear" && overlayControls.start("ODisable");
        }}
        onClick={props.toggle}
      />
      <motion.div
        variants={drawerVariants}
        initial="close"
        animate={drawerContols}
        className="bg-neutral-800 top-0 fixed p-1 shadow-neutral-950 shadow-drawer"
      >
        <div className="flex justify-center items-center bg-neutral-900 pe-3 pt-1 pb-1">
          <h2 className="text-neutral-950 ">Menu</h2>
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
              width: "4vh",
              height: "4vh",
              marginLeft: "auto",
            }}
            onClick={props.toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-300 font-bold text-5xl flex-auto min-w-30 min-h-30 rounded-xl w-full h-full"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
        {props.children}
      </motion.div>
    </>
  );
}

export default Drawer;
