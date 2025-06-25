"use client"; //animation run in the client

import { motion } from "motion/react";
// import * as motion from "motion/react-client" --> alternative import, just in case

export default function TitleAnimation() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 10 }}
        className="flex justify-center"
      >
        <h1>This is the best rollercoaster website in the world!</h1>
      </motion.div>
    </>
  );
}

//===================================
// Step 1: Install motion `npm i motion`
// Step 2: import motion
// Step 3: add motion to an element in your component
