import React, { useLayoutEffect, useRef } from "react";
import styles from "./modal.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1.0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

function Modal({ modal, projects }: any) {
  const modalContainer = useRef(null);
  const modalCursor = useRef(null);

  useLayoutEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    let xMoveCursor = gsap.quickTo(modalCursor.current, "left", {
      duration: 0.1,
      ease: "linear",
    });
    let yMoveCursor = gsap.quickTo(modalCursor.current, "top", {
      duration: 0.1,
      ease: "linear",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial={"initial"}
        animate={modal.active ? "open" : "close"}
        className={styles.modalContainer}
      >
        <div className={styles.modalSlider} style={{ top: -300 * modal.index }}>
          {projects.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={styles.modal}
                style={{ backgroundColor: item.color }}
              >
                <Image
                  src={`/images/${item.src}`}
                  width={300}
                  height={200}
                  aria-hidden
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={modalCursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={modal.active ? "open" : "close"}
        className={styles.modalCursor}
      >
        <p>View</p>
      </motion.div>
    </>
  );
}

export default Modal;
