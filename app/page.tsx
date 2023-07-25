import styles from "./page.module.css";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import SlidingHeader from "@/components/SlidingHeader";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.main}>
        <SlidingHeader />
        <section className={styles.container}>
          <Link href="/project-gallery">
            <div className={styles.pagelinks}>Project Gallery</div>
          </Link>
        </section>
      </div>
    </PageWrapper>
  );
}
