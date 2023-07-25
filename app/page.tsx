"use client";
import styles from "./page.module.css";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import SlidingHeader from "@/components/SlidingHeader";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);

  function handleScroll() {
    setScrollPos(window.scrollY);
    console.log(scrollPos);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={styles.main}>
      <SlidingHeader />
      <section className={styles.container}>
        <Link href="/project-gallery">
          <div className={styles.pagelinks}>Project Gallery</div>
        </Link>
      </section>
    </div>
  );
}
