import React from "react";
import styles from "./FormularioContacto.module.css";

export const FormularioContacto = () => {
  return (
    <div>
      <section id={styles.contactanos}>
        <div className={styles.formulario}>
          <h1 id={styles.titulo_formulario}>Envia un mensaje</h1>
          <input
            className={styles.recuadros}
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Ingrese con sus Nombres"
          />
          <input
            className={styles.recuadros}
            type="text"
            name="telefono/celular"
            id="telefono/celular"
            placeholder="Ingrese su Telefono/Celular"
          />
          <input
            className={styles.recuadros}
            type="text"
            name="correo"
            id="correo"
            placeholder="Ingrese su Correo"
          />

          <label for="mensaje">Mensaje </label>
          <textarea id={styles.mensaje}></textarea>
          <input
            type="button"
            value="Enviar Mensaje"
            id="btnSend"
          />

          <p id={styles.terminos_condiciones}>
            Estoy de acuerdo con
            <a
              id="#"
              href="#"
            >
              Términos y Condiciones
            </a>
            <input
              type="checkbox"
              id="menu-toggle2"
            />
          </p>
        </div>
      </section>
    </div>
  );
};
