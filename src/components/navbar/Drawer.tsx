import { motion, useAnimationControls } from "motion/react";
import { useEffect, useState, ReactNode } from "react";

interface drawerProps {
  isDrawerOpen: boolean;
  toggle: () => void;
  children?: ReactNode;
}

const drawerVariants = {
  close: {
    width: "40vw",
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
    width: "40vw",
    height: "100%",
    transition: {
      type: "spring",
      damping: 16,
      duration: 0.1,
    },
    x: "60vw",
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
  console.log("scrolled");
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
        className="bg-neutral-800 top-0 fixed"
      >
        <button onClick={props.toggle}>Toggle</button>
        {props.children}
      </motion.div>
      {/* <div className="overflow-x-hidden">
          <div
            className={
              props.isDrawerOpen == 0 ? overlayStyleClose : overlayStyleOpen
            }
          />
          <div
            className={
              props.isDrawerOpen == 0 ? drawerStyleClose : drawerStyleOpen
            }
          >
            Drawer
          </div>
        </div> */}
    </>
  );
}

export default Drawer;
