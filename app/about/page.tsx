import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";

function About() {
  return (
    <PageWrapper>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.column}>
            <div className={styles.columnHalf}>
              <Image
                src="/images/meInLA_low.jpg"
                width={200}
                height={200}
                className={styles.image}
                alt="picture of me"
              />
            </div>
            <div className={styles.columnHalf}>
              <h1>About Me</h1>
              <p>
                Hello and welcome to my coding playground! My name is Jak and
                I&apos;m a UX Designer passion for bridging people’s experiences
                with technology and delivering impact to real people through
                design.
              </p>
              <p>
                As a part of my quest to leveling up my skills in coding and
                design, I dedicated this space for experimenting with them both!
                Here you can find all sorts of mini projects that I&apos;ve
                attempted over the years. Please enjoy!
              </p>
              <p>
                Please feel free to also check out my work on{" "}
                <a href="https://jaksiri.me">my portfolio</a> as well!
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}

export default About;
