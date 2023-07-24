"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Projects from "@/components/projects";
import Modal from "@/components/modal";

function ProjectGallery() {
  const projects = [
    {
      name: "Project 1",
      type: "UX Design",
      src: "project1.jpg",
      color: "#2E2162",
    },
    {
      name: "Project 2",
      type: "UX Design",
      src: "project2.jpg",
      color: "#512162",
    },
    {
      name: "Project 3",
      type: "UX Design",
      src: "project3.jpg",
      color: "#622148",
    },
    {
      name: "Project 4",
      type: "UX Design",
      src: "project4.jpg",
      color: "#4A0505",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  console.log(modal.index);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {projects.map((item, index) => {
          return (
            <Projects
              key={index}
              index={index}
              name={item.name}
              type={item.type}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}

export default ProjectGallery;
