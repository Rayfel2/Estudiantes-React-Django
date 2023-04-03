import styles from "./VerPerfil.module.css";
import React, { useState, useEffect } from "react";
import jsonData from "./datos.json";

const VerPerfil = () => {
  const validEmail = "usuario@email.com";
  const validPassword = "usuario";
  const user = jsonData.Estudiante.find((Login) => Login.email === validEmail);
  const PersonId = jsonData.Estudiante.find((Person) => Person.id === user.id);
  const Perfil = jsonData.Person.find((Perfil) => Perfil.id === PersonId.person_id);


  const name = Perfil.first_name;
  const lastname = Perfil.last_name;
  const email = Perfil.email;
  const cumple = Perfil.birth_date;
  const id = PersonId.registration_number;  


  return (
    <div className={styles.verPerfil}>
      <div className={styles.verPerfil1}>
        <div className={styles.verPerfilChild} />
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <input
              className={styles.groupChild}
              type="text"
              placeholder="Email no encontrado"
              defaultValue={email}
              readOnly
            />
            <div className={styles.cumpleaos}>Cumpleaños</div>
          </div>
          <div className={styles.groupDiv}>
            <input
              className={styles.groupItem}
              type="text"
              placeholder="fecha de nacimiento no encontrada"
              defaultValue={cumple}
              readOnly
            />
            <div className={styles.email}>{`Email `}</div>
          </div>
          <div className={styles.groupParent1}>
            <input
              className={styles.groupInner}
              type="text"
              placeholder="Apellido no encontrado"
              defaultValue={lastname}
              readOnly
            />
            <div className={styles.apellido}>Apellido</div>
          </div>
          <div className={styles.groupParent2}>
            <input
              className={styles.groupInput}
              type="text"
              placeholder="Nombre no encontrado"
              defaultValue={name}
              readOnly
            />
            <div className={styles.apellido}>Nombre</div>
          </div>
          <div className={styles.groupParent3}>
            <input
              className={styles.groupChild1}
              type="text"
              placeholder="ID no encontrado"
              defaultValue={id}
              readOnly
            />
            <div className={styles.id}>ID</div>
          </div>
          <button className={styles.frameWrapper}>
            <a href = "/dashboard-estudiante2">
            <button className={styles.regresarWrapper}>
              <div className={styles.regresar}>REGRESAR</div>
            </button>
            </a>
          </button>
        </div>
        <div className={styles.configuracion}>Configuracion</div>
        <div className={styles.verPerfilItem} />
      </div>
      <b className={styles.estudiante}>ESTUDIANTE</b>
    </div>
  );
};

export default VerPerfil;
