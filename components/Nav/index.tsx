"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Nav() {
  const currentPath = usePathname();
  let opacity = 0.01;

  const paths = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <nav
      className={styles.nav}
      style={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
    >
      <Link href="/">
        <Image src="/images/logo.png" width={24} height={24} alt="logo" />
      </Link>
      <ul style={{ marginRight: "24px" }}>
        {paths.map((item, index) => {
          return (
            <li key={index} className={styles.link}>
              <Link href={item.link}>{item.name}</Link>
              {currentPath === item.link && (
                <motion.span
                  layoutId="underline"
                  className={styles.underline}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
