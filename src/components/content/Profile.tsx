import { motion } from "motion/react";
import { useState } from "react";

function Profile() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="grid grid-cols-4 grid-rows-2 gap-4 w-[75%] mx-auto bg-zinc-900 border-neutral-950 border-2 p-3 rounded-xl"
      >
        <motion.img
          className="col-span-1 row-span-1 min-w-0 rounded-md"
          src={
            "https://github.com/Clevelandm1/Portfolio/blob/HomePage/public/images/IMG_8850.JPG?raw=true"
          }
          onLoad={() => setLoaded(true)}
          whileHover={{ scale: 1.02 }}
        />

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-neutral-800 col-span-3 row-span-2 rounded-md p-2"
        >
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus mauris metus, id facilisis sem rutrum a. Suspendisse
            potenti. Nulla pharetra neque ut urna lacinia tempor eget vel eros.
            Sed dapibus sagittis enim, aliquam aliquet risus hendrerit ac.
            Maecenas eget metus vel turpis consequat interdum. Fusce venenatis
            est vitae libero ultricies, at lacinia diam ornare. Vestibulum
            rutrum aliquet eros, vitae maximus ligula consequat dapibus.
            Pellentesque faucibus tempor dui, non dapibus ipsum lobortis sed.
            Sed luctus rutrum metus, non dictum ante porta et. Cras ac interdum
            dui, luctus venenatis nunc.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-neutral-800 col-span-1 row-span-1 rounded-md p-2"
        >
          <p className="text-neutral-400 ">Cleveland Martin</p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Profile;
