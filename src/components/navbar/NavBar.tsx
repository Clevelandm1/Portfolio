import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import ShowcaseButton from "./ShowcaseButton";
import MenuButton from "./MenuButton";
import Drawer from "./Drawer";
import HomeButton from "./HomeButton";

function NavBar() {
  const pages = ["Home", "Games", "Art", "About"];
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.25]);
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer isDrawerOpen={isOpen} toggle={toggleDrawer}>
        <h2 className="bg-white">hellooooooooo</h2>
      </Drawer>
      <div className="flex justify-around items-center sticky top-0 z-[2] p-[2%] w-full max-h-[8vh] bg-neutral-800 shadow-black shadow-navbar bg-opacity-[.65] backdrop-blur-sm ">
        <HomeButton />
        <ShowcaseButton />

        <MenuButton toggle={toggleDrawer} />
      </div>
    </>
  );
}

export default NavBar;
