"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";

function Cursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function MoveMouse(e: MouseEvent) {
      setCursorPos({ x: e.clientX - 50, y: e.clientY - 50 });
    }

    window.addEventListener("mousemove", (e) => MoveMouse(e));
    return window.removeEventListener("mousemove", (e) => MoveMouse(e));
  }, []);

  return (
    <motion.div
      className={styles.cursor}
      style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
    ></motion.div>
  );
}

export default Cursor;
