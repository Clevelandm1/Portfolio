import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

type Props = {
  src: string;
};

function ImageComponent(props: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = props.src;
  }, [props.src]);

  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
      <motion.div className="w-screen h-screen fixed overflow-hidden z-10 top-0 bg-[#F5F5DC] left-0 flex justify-center items-center">
          <h1 className="font-gabRegular font-bold h1-1 text-6xl pt-3 px-4">Loading...</h1>
        </motion.div>
      </div>

      <div style={{ display: !imageLoaded ? "none" : "inline" }}>
        <motion.img
          initial={{ borderColor: "#461D7C", borderWidth: 5 }}
          transition={{ duration: 0.75, type: "spring" }}
          whileHover={{
            scale: 1.1,
            borderColor: "#FDD023",
            borderWidth: 10,
            opacity: 0.5,
          }}
          className="rounded-full border-opacity-100 max-w-[400px]"
          src={props.src}
        />
        </div>
    </>
  );
}

export default ImageComponent;
