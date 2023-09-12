import React from "react";
import styles from "./Products.module.css";
import productImg from "./images/1366_2000.jpg";

export const Products = () => {
  return (
    <section className={styles.container_section}>
      <h1 className={styles.productos_tittle}>Nuestros Productos</h1>
      <div id={styles.container_card}>
        <div className={styles.card}>
          <h2 className="">CELULAR MOTOROLA MOTO E32</h2>
          <picture>
            <img
              className={styles.productImg}
              src={productImg}
              alt=""
            />
          </picture>
          <p className={styles.parrafo}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            cumque.
          </p>
          <p class="precio2">Precio $14999</p>
        </div>
        <div className={styles.card}>
          <h2 className="">CELULAR MOTOROLA MOTO E423232</h2>
          <picture>
            <img
              className={styles.productImg}
              src={productImg}
              alt=""
            />
          </picture>
          <p className={styles.parrafo}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            cumque. Modi
          </p>

          <p class="precio2">Precio $14999</p>
        </div>
        <div className={styles.card}>
          <h2 className="">CELULAR MOTOROLA MOTO E32</h2>
          <picture>
            <img
              className={styles.productImg}
              src={productImg}
              alt=""
            />
          </picture>
          <p className={styles.parrafo}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            cumque.
          </p>
          <p class="precio2">Precio $14999</p>
        </div>
      </div>
      <div id={styles.container_card}>
        <div className={styles.card}>
          <h2 className="">CELULAR MOTOROLA MOTO E32</h2>
          <picture>
            <img
              className={styles.productImg}
              src={productImg}
              alt=""
            />
          </picture>
          <p className={styles.parrafo}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            cumque.
          </p>
          <p class="precio2">Precio $14999</p>
        </div>
        <div className={styles.card}>
          <h2 className="">CELULAR MOTOROLA MOTO E423232</h2>
          <picture>
            <img className={styles.productImg}
              src={productImg}
              alt=""
            />
          </picture>
          <p className={styles.parrafo}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            cumque. Modi
          </p>

          <p class="precio2">Precio $14999</p>
        </div>
        <div className={styles.card}>
          <h2 className="">CELULAR MOTOROLA MOTO E32</h2>
          <picture>
            <img
              className={styles.productImg}
              src={productImg}
              alt=""
            />
          </picture>
          <p className={styles.parrafo}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            cumque.
          </p>
          <p class="precio2">Precio $14999</p>
        </div>
        
       
        
      </div>
    </section>
  );
};
