"use client";
import React from "react";
import styles from "./pagewrapper.module.css";
import { motion } from "framer-motion";

const fadeAnimation = {
  initial: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      onScroll={(e) => onScroll()}
      className={styles.pagewrapper}
      variants={fadeAnimation}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
