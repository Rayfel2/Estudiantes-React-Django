import styles from "./REGISTRARUSUARIO.module.css";
import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


const REGISTRARUSUARIO = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmpassword, setConfirmPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRecovery = async (e) => {
    if (password == confirmpassword){
    e.preventDefault();
  
    
    const {data} = await axios.post("http://localhost:8000/api/v1/students/login/",
    {
      email: email,
      new_password: password,
      confirm_new_password: confirmpassword
    }
    )
    navigate("/dashboard-estudiante2");
  }
  }

  return (
    <div className={styles.registrarUsuario}>
      <div className={styles.homePage}>
        <img
          className={styles.unsplashlpbydenbqqgIcon}
          alt=""
          src="/unsplashlpbydenbqqg@2x.png"
        />
        <div className={styles.content} />
      </div>
      <div className={styles.headerNav}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.links}>
          <div className={styles.home}>Home</div>
          <div className={styles.webDesigns}>Web designs</div>
          <div className={styles.webDesigns}>Mobile designs</div>
          <div className={styles.webDesigns}>Illustrations</div>
        </div>
        <div className={styles.loginSignUp}>
          <div className={styles.search}>
            <div className={styles.iconsParent}>
              <img className={styles.icons} alt="" src="/icons4.svg" />
              <div className={styles.webDesigns}>Search</div>
            </div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.webDesigns}>Español (Mexico)</div>
            <img className={styles.icons1} alt="" src="/icons5.svg" />
          </div>
          <div className={styles.button}>
            <div className={styles.iconsGroup}>
              <img className={styles.icons2} alt="" src="/icons6.svg" />
              <div className={styles.webDesigns}>Log in</div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.iconsContainer}>
             
              <div className={styles.webDesigns}>Sign up</div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
      </div>
      <img className={styles.image9Icon} alt="" src="/image-9@2x.jpg" />
      <form className={styles.component1}>
        <div className={styles.torus2}>

        </div>
        <div className={styles.registro}>
          <div className={styles.form2}>
            <div className={styles.buttons} />
          </div>
          <img className={styles.backColorIcon} alt="" src="/back-color.svg" />
          <div className={styles.pager}>
            <div className={styles.div}>
              <img className={styles.child} alt="" src="/ellipse-3.svg" />
            </div>
            <div className={styles.div1} />
            <div className={styles.div2} />
          </div>
          <div className={styles.bienvenidxCompletaContainer}>
            <p className={styles.bienvenidx}>Bienvenidx !</p>
            <p className={styles.completaLosCampos}>
              Completa los campos necesarios y ya recuperaras tu contraseña
            </p>
          </div>
        </div>
        <div className={styles.component1Inner}>
          <div className={styles.groupChild} />
        </div>
        <a href = "/">
        <a className={styles.payments}>VOLVER</a>
        </a>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <div className={styles.groupParent}>
          <button className={styles.groupWrapper} onClick={handleRecovery}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupItem} />
              <b className={styles.payments1}>RECUPERAR</b>
            </div>
          </button>
          <div className={styles.groupContainer}>
            <div className={styles.paymentsWrapper}>
              <div className={styles.payments2}>CORREO</div>
            </div>
            <input
              className={styles.groupInner}
              type="text" 
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.paymentsFrame}>
              <div className={styles.payments3}>Password</div>
            </div>
            <input
              className={styles.groupChild1}
              type="password" 
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.paymentsFrame}>
              <div className={styles.payments3}>Confirm password</div>
            </div>
            <input
              className={styles.groupChild1}
              type="password" 
              value={confirmpassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>

        <div className={styles.component1Child} />
        <div className={styles.component1Item} />
        <div className={styles.lineDiv} />
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
        <b className={styles.mathewJohn}>RECUPERAR CONTRASEÑA</b>
      </form>
    </div>
  );
};

export default REGISTRARUSUARIO;
