import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h1>Next Playground</h1>
        <div className={styles.pagelinks}>
          <Link href="/project-gallery">Project Gallery</Link>
        </div>
      </section>
    </main>
  );
}
