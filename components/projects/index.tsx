import React from "react";
import styles from "./style.module.css";

function Projects({ index, name, type, setModal }: any) {
  return (
    <div
      className={styles.projectItem}
      onMouseOver={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <h2>{name}</h2>
      <p>{type}</p>
    </div>
  );
}

export default Projects;
