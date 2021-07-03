import React from "react";
import Styles from "../styles/Home.module.css";

const about = () => {
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <h1 className={Styles.title}>
          Bienvenido <a>Humano</a>
        </h1>
      </main>
    </div>
  );
};

export default about;
