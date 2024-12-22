import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import "./NavBar.css";
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
        hellooooooo
      </Drawer>
      <div className="flex justify-around items-center sticky top-0 z-[2] p-[2%] w-full max-h-[8vh] bg-neutral-800 shadow-black shadow-xl bg-opacity-[.65] backdrop-blur-sm ">
        <HomeButton />
        <ShowcaseButton />

        <MenuButton toggle={toggleDrawer} />
      </div>
    </>
  );
}

export default NavBar;

// <div className="flex justify-between sticky top-0 z-[2] items-center p-[.7%] bg-neutral-800 shadow-black shadow-xl bg-opacity-20 backdrop-blur-sm">
//           <ShowcaseButton />
//           <div className="flex items-center gap-3 justify-center flex-wrap p-3 bg-opacity-50 backdrop-blur-sm max-h-max bg-neutral-950 shadow-inner shadow-zinc-950 rounded-3xl smed:max-w-[528px] med:min-w-max smll:max-w-min overflow-x-hidden">
//             {pages.map((page, index) => (
//               <motion.button
//                 key={index}
//                 initial={{
//                   boxShadow: "0px 0px 10px #000",
//                   borderRadius: "13px",
//                   opacity: 0.65,
//                 }}
//                 whileHover={{
//                   boxShadow: "0px 0px 15px #000",
//                   scale: 1.05,
//                   opacity: 1,
//                   transition: { duration: 0.1 },
//                 }}
//                 whileTap={{
//                   boxShadow: "0px 0px 15px #000",
//                   scale: 0.97,
//                   opacity: 1,
//                   transition: { duration: 0.05 },
//                 }}
//               >
//                 <div className="text-neutral-300 bg-neutral-900 font-bold text-5xl flex-auto min-w-60 min-h-16 size-full rounded-xl p-1 ">
//                   {page}
//                 </div>
//               </motion.button>
//             ))}
//           </div>
//           <MenuButton toggle={toggleDrawer} />
//         </div>
