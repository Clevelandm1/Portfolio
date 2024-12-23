import { motion } from "motion/react";

function Profile() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-[75%] mx-auto">
        <img
          className="bg-slate-600 col-span-1 min-w-0"
          src={"../../../public/images/IMG_8850.jpg"}
        ></img>

        <div className="bg-slate-500 col-span-2">ok</div>
        <div className="col-span-3 bg-slate-400">ok</div>
      </div>
    </>
  );
}

export default Profile;
