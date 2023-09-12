import React from "react";
import imageDesktop from "./images/Celular.jpg";
import styles from "./MainView.module.css";

export const MainView = () => {
  return (
    <section className={styles.container_section}>
      <picture>
        <img
          className={styles.MainView}
          src={imageDesktop}
          alt="Imagen principal"
        />
      </picture>
      <div className={styles.tittle_1}>
        <h1 className={styles.tittle_separate}>
          CeluTech | Una Empresa de Celulares
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
          cupiditate assumenda voluptates natus sint deserunt, eos velit sit
          dolor repellat hic quasi sed, voluptatum illo? Delectus reprehenderit
          illo optio sapiente!
        </p>
      </div>
    </section>
  );
};
