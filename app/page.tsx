"use client";
import styles from "./page.module.css";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import SlidingHeader from "@/components/SlidingHeader";
import { useEffect, useState, useRef, useCallback } from "react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);
  function handleScroll() {
    setScrollPos(window.scrollY);
    console.log(scrollPos);
  }
  window.onscroll = () => {
    handleScroll();
  };

  // const onScroll = useCallback((e: any) => {
  //   const { scrollY } = window;
  //   console.log(scrollY);
  // }, []);
  // useEffect(() => {
  //   console.log("scroll pos: " + scrollPos);
  //   console.log(document.scrollingElement);
  //   window.addEventListener("scroll", onScroll, false);
  //   return window.removeEventListener("scroll", onScroll);
  // }, []);
  return (
    <PageWrapper>
      <div className={styles.main}>
        <SlidingHeader />
        <section className={styles.container}>
          <Link href="/project-gallery">
            <div className={styles.pagelinks}>Project Gallery</div>
          </Link>
        </section>
        <section className={styles.container}>
          <Link href="/project-gallery">
            <div className={styles.pagelinks}>Project Gallery</div>
          </Link>
        </section>
        <section className={styles.container}>
          <Link href="/project-gallery">
            <div className={styles.pagelinks}>Project Gallery</div>
          </Link>
        </section>
        <section className={styles.container}>
          <Link href="/project-gallery">
            <div className={styles.pagelinks}>Project Gallery</div>
          </Link>
        </section>
        <section className={styles.container}>
          <Link href="/project-gallery">
            <div className={styles.pagelinks}>Project Gallery</div>
          </Link>
        </section>
        <section className={styles.container}>
          <Link href="/project-gallery">
            <div className={styles.pagelinks}>Project Gallery</div>
          </Link>
        </section>
        <section className={styles.container}>
          <Link href="/project-gallery">
            <div className={styles.pagelinks}>Project Gallery</div>
          </Link>
        </section>
      </div>
    </PageWrapper>
  );
}
