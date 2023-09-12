import React from "react";
import styles from "./NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useMenuContext } from "./MenuContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const NavBar = () => {
  const { isActive, setIsActive } = useMenuContext();

  return (
    <div className={styles.Contenedor}>
      <ul
        className={
          isActive ? `${styles.NavBar} ${styles.active}` : styles.NavBar
        }
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="Products">Productos</a>
        </li>
        <li>
          <a href="#">Quienes Somos</a>
        </li>
        <li>
          <a href="FormularioContacto">Contacto</a>
        </li>
      </ul>
      <div className={styles.cart_icon}></div>
      <div className={styles.bar_icon}>
        <AiOutlineMenu onClick={() => setIsActive(!isActive)} />
      </div>
      <div class={styles.cart_container}>
        {/* <div class={styles.cart_item}>
          <img
            src="/monitor.png"
            alt="Imagen de la compra"
          />
          <div class={styles.item_info}>
            <h3 class="item-title">NOMBRE</h3>
            <p class="item-price">$---</p>
          </div>
          <div class="item-handler">
            <span
              class="quantity-handler down"
              data-id="ID"
            >
              -
            </span>
            <span class="item-quantity">CANTIDAD</span>
            <span
              class="quantity-handler up"
              data-id="ID"
            >
              +
            </span>
          </div>
        </div> */}
      </div>

      <div className={styles.envios}>
        <p>¡Tenemos envíos Gratis!</p>
      </div>

      <div
        className={
          isActive ? `${styles.cart_icon} ${styles.active2}` : styles.cart_icon
        }
      >
        <AiOutlineShoppingCart
          onClick={() => setIsActive(!isActive)}
          className={styles.cart_item}
        />
      </div>
    </div>
  );
};
