import { motion } from "motion/react";
import "./App.css";
import Sketch from "./p5/sketchTest";
import { useState } from "react";
import NavBar from "./components/navbar/NavBar";

function App() {
  const button_dark = [
    { boxShadow: "0px 0px 5px #000", backgroundColor: "#262626" },
    {
      boxShadow: "0px 0px 25px #000",
      backgroundColor: "#1f1f1f",
      scale: 1.1,
    },
    { scale: 0.8, y: "30px" },
  ];

  const items = [];

  for (let i = 0; i < 51; i++) {
    items.push(i);
  }

  return (
    <>
      <NavBar />
      <div className="fixed top-0 z-[-2]">
        <Sketch />
      </div>
      <div className="flex justify-center items-center p-10">
        <div className="flex gap-4 flex-wrap justify-center items-center max-w-screen-lg">
          {items.map((item) => (
            <motion.div
              className="testclass"
              initial={button_dark[0]}
              whileHover={button_dark[1]}
              whileTap={button_dark[2]}
            >
              <h3 className="text-stone-600 text-center font-bold">
                Hello, User {item}!
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <NavBar />
  //     <div className="flex justify-center items-center p-10">
  //       <div className="flex gap-4 flex-wrap justify-center items-center max-w-screen-lg">
  //         {items.map((item) => (
  //           <motion.div
  //             className="testclass"
  //             initial={button_dark[0]}
  //             whileHover={button_dark[1]}
  //             whileTap={button_dark[2]}
  //           >
  //             <h3 className="text-stone-600 text-center font-bold">
  //               Hello, User {item}!
  //             </h3>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>

  //     {/*
  //     const [alertVisible, setAlertVisibility] = useState(false);
  //     <Message />
  //     {alertVisible && (
  //       <Alert
  //         look="alert alert-danger alert-dismissible fade show"
  //         showAlert={() => setAlertVisibility(false)}
  //       >
  //         AHHHHHH PANIC!!!
  //         <span>Hello?</span>
  //       </Alert>
  //     )}
  //     {/*Continuing, buttonclicked was called. Now we can execute a function here
  //     that will do something. The function we input here is sent to the button comp,
  //     where the button comp will run it when it is clicked. This is passing a function
  //     as a parameter.
  //     <Button color="dark" buttonclicked={() => setAlertVisibility(true)}>
  //       Show Alert
  //     </Button>
  //     <ListGroup
  //       items={["New York", "Georgia", "Louisiana", "Germany", "Nevada"]}
  //       heading="cities"
  //       onSelectItem={(item: string) => {
  //         console.log(item);
  //       }}
  //     />
  //     <ListGroup
  //       items={["NOTHING", "Butter", "Water", "Air", "Salt", "Ramen"]}
  //       heading="Favorite Food Items"
  //       onSelectItem={(item: string) => {
  //         console.log(item);
  //       }}
  //     />
  //     <Sketch />*/}
  //   </>
  // );
}

export default App;
