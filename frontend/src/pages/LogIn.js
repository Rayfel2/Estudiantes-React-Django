import styles from "./LogIn.module.css";
import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
  e.preventDefault();
  
  try {
    const {data} = await axios.post("http://localhost:8000/api/v1/students/login/", {
      username: username,
      password: password
    });
    setUser("student");
  
    localStorage.setItem('token', JSON.stringify(data));
    navigate("/dashboard-estudiante2");
  } catch (error) {
    try {
      const {data} = await axios.post("http://localhost:8000/api/v1/professor/login/", {
        username: username,
        password: password
      });
      setUser("profesor");
  
      localStorage.setItem('token', JSON.stringify(data));
      navigate("/dashboard-profesor");
    } catch (error) {
      window.alert("El correo o la contraseña esta incorrecta");
    }
  }
};
  //const validEmail = "usuario@email.com";
  //const validPassword = "usuario";
  
  /*
  // Validación del email y contraseña aquí
  if (email === validEmail && password === validPassword) {
    // Inicio de sesión exitoso
    setErrorMessage("");
    setLoginSuccess(true);
    console.log("Login successful!");
    window.location.assign("/dashboard-estudiante2") 
  } else {
    // Inicio de sesión fallido
    setErrorMessage("Email o contraseña incorrectos");
  }
  console.log("handleLogin function executed!"); // Agregar este console.log
*/


const handleShowLoginForm = () => {
  const loginForm = document.querySelector('#loginForm');
  loginForm.style.display = 'flex';
  console.log("handleShowLogin function executed!");
};
 
  
  const handleHideButton = () => {
    const loginForm = document.querySelector('#loginForm');
    loginForm.style.display = 'none';
    console.log("function executed!");
  };


  
  return (
    <div className={styles.logIn}>
      <b className={styles.estudiante}>ESTUDIANTE</b>
      <div className={styles.home}>Home</div>
      <div className={styles.queLesBrindamos}>Que les brindamos?</div>
      <div className={styles.sevicios}>Sevicios</div>
      <div className={styles.heroHeadline}>
        <img
          className={styles.dotOrnamentIcon}
          alt=""
          src="/dot-ornament.svg"
        />
        <div className={styles.heroHeadlineChild} />
        <img className={styles.heroHeadlineItem} alt="" src="/ellipse-85.svg" />
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <div className={styles.content}>
          <div className={styles.calcularIndiceAcademico}>
            CALCULAR INDICE ACADEMICO
          </div>
          <div className={styles.unaAplicacinPara}>
            Una aplicación para poder calcular el Índice Académico de los
            estudiantes y administración e especificación Del registro, tanto
            para estudiantes como para los profesores
          </div>
          <div className={styles.ctaContactNow}>
            <div className={styles.registrateAhora}>REGISTRATE AHORA</div>
          </div>
        </div>
      </div>
      <div className={styles.ourClient}>
        <div className={styles.unaAplicacinPara1}>
          Una aplicación para poder calcular el Índice Académico de los
          estudiantes y administración e especificación Del registro, tanto para
          estudiantes como para los profesores
        </div>
        <div className={styles.alcance}>ALCANCE</div>
      </div>
        <img
          className={styles.howCanWeHelpChild}
          alt=""
          src="/ellipse-87.svg"
        />
        <img className={styles.howCanWeHelpItem} alt="" src="/group-70.svg" />
        <div className={styles.howCanWeHelpInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.loremIpsumDolorSitAmetCoParent}>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non nisi nibh. Maecenas in hendrerit dui. Quisque aliquet porta ante in fringilla. `}</div>
          <div className={styles.quePodemosBrindarlesWrapper}>
            <div className={styles.quePodemosBrindarles}>
              Que podemos brindarles?
            </div>
          </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit `}</div>
          <div className={styles.groupItem} />
          <div className={styles.wePresentYou}>
            We present you a proposal and discuss niffty-gritty like
          </div>
          <img
            className={styles.boxSearch1Icon}
            alt=""
            src="/boxsearch-1.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.groupChild1} />
          <div className={styles.protocolsApartFrom}>
            Protocols apart from aengage models, pricing billing
          </div>
          <div className={styles.laMejoraContinua}>
            La mejora continua de los estudiantes
          </div>
          <img className={styles.ic20TrophyIcon} alt="" src="/ic20trophy.svg" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.groupChild3} />
          <div className={styles.siOcurreAlgun}>
            Protocols apart from aengage models, pricing billing
          </div>
          <img
            className={styles.boxSearch1Icon}
            alt=""
            src="/chartsquare-1.svg"
          />
          <div className={styles.registroDeLas}>
            Registro de las calificaciones
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild} />
          <div className={styles.groupChild5} />
          <div className={styles.siOcurreAlgun}>
            Si ocurre algun percance el estudiante puede retirar la materia.
          </div>
          <img className={styles.boxSearch1Icon} alt="" src="/code1-1.svg" />
          <div className={styles.estudiantePuedeRetirar}>
            Estudiante puede retirar materias
          </div>
        </div>
      </div>
      <div className={styles.greatSince}>
        <img className={styles.greatSinceChild} alt="" src="/ellipse-86.svg" />
        <div className={styles.greatSinceItem} />
        <div className={styles.ourBusinessPlan}>
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </div>
        <div className={styles.unaBuenaGestionDeLaInformWrapper}>
          <div className={styles.unaBuenaGestion}>
            Una buena gestion de la informacion
          </div>
        </div>
        <img
          className={styles.unsplashbzqu01vG54Icon}
          alt=""
          src="/image-8@2x.png"
        />
      </div>
      <div className={styles.happyClient}>
        <img className={styles.dotIcon} alt="" src="/dot.svg" />
        <img className={styles.happyClientChild} alt="" src="/ellipse-87.svg" />
        <img
          className={styles.unsplashmtztgvdshfyIcon}
          alt=""
          src="/image-8@2x.png"
        />
        <div className={styles.variosEstudiantesSeleccionad}>
          Varios estudiantes seleccionados, que ya creen en nuestro servicio
        </div>
        <div className={styles.loQueDicen}>Lo que dicen nuestros usuarios</div>
        <div className={styles.matthewPaulParent}>
          <div className={styles.matthewPaul}>Matthew Paul</div>
          <div className={styles.perfectoAhoraPuedo}>
            Perfecto! Ahora puedo monitorear mi desempeño académico de una
            manera más clara y efectiva, lo que me ha permitido mejorar mi
            rendimiento. Gracias por hacer que mi vida académica sea mucho más
            fácil y productiva
          </div>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-88.svg" />
          <img className={styles.groupChild6} alt="" src="/ellipse-89.svg" />
          <img className={styles.groupChild7} alt="" src="/ellipse-89.svg" />
          <img className={styles.groupChild8} alt="" src="/ellipse-89.svg" />
          <img className={styles.groupChild9} alt="" src="/ellipse-89.svg" />
        </div>
      </div>
      <div className={styles.newsletter}>
        <img className={styles.newsletterChild} alt="" src="/group-73.svg" />
        <div className={styles.newsletterItem} />
        <div className={styles.newsletterInner} />
        <img className={styles.rectangleIcon} alt="" src="/rectangle-31.svg" />
        <div className={styles.newsletterInner1}>
          <div className={styles.groupChild10} />
        </div>
        <div className={styles.registrateWrapper}>
          <div className={styles.registrateAhora}>REGISTRATE</div>
        </div>
        <div
          className={styles.loremIpsumDolor2}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        <div className={styles.registrate1}>{`REGISTRATE `}</div>
      </div>
      <div className={styles.footer}>
        <b className={styles.estudiante1}>ESTUDIANTE</b>
        <div className={styles.queLesBrindamos1}>Que les brindamos?</div>
        <div className={styles.soporte}>Soporte</div>
        <div className={styles.contactos}>Contactos</div>
        <div className={styles.webDesignAppContainer}>
          <p className={styles.webDesign}>{`Web Design `}</p>
          <p className={styles.webDesign}>App Design</p>
          <p className={styles.webDesign}>Social Media Manage</p>
          <p className={styles.webDesign}>Market Analysis Project</p>
        </div>
        <div className={styles.faqPolicyBusinessContainer}>
          <p className={styles.webDesign}>FAQ</p>
          <p className={styles.webDesign}>Policy</p>
          <p className={styles.webDesign}>Business</p>
        </div>
        <div className={styles.whatsappSupport24Container}>
          <p className={styles.webDesign}>WhatsApp</p>
          <p className={styles.webDesign}>Support 24</p>
        </div>
        <div className={styles.footerChild} />
        <div className={styles.footerItem} />
        <div className={styles.unaAplicacinPara2}>
          Una aplicación para poder calcular el Índice Académico de los
          estudiantes y administración e especificación Del registro
        </div>
        <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
        <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
        <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
        <div className={styles.footerInner} />
        <div className={styles.copyright2023}>Copyright © 2023</div>
      </div>
      <div className={styles.loginSignUp} />
      <div className={styles.dropdown}>
        <div className={styles.text}>Español (Mexico)</div>
        <img className={styles.icons} alt="" src="/icons.svg" />
      </div>
      <button className={styles.button} onClick={handleShowLoginForm}>
        
        <div className={styles.iconsParent}>
          <img className={styles.icons1} alt="" src="/icons1.svg" />
          <div className={styles.text123}>Iniciar sesion</div>
        </div>
      </button>
      <div >
        <form id="loginForm" className={styles.overlaySignIn}>
          <div className={styles.frameParent}>
            <div className={styles.iniciaSesionParent}>
              <div className={styles.iniciaSesion}>Inicia sesion</div>
              <div className={styles.email}>
                <div className={styles.labelParent}>
                  <div className={styles.label}>Email o ID</div>
                  <div className={styles.passwordHideSee}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.hide}>Hide</div>
                  </div>
                </div>
                <input className={styles.textField} type="text" 
                value={username}
                onChange={handleEmailChange}
                /> 
                <div className={styles.errorMessage}>{errorMessage}</div>
              </div>
              <div className={styles.email}>
                <div className={styles.labelParent}>
                  <div className={styles.label}>Password</div>
                  <div className={styles.passwordHideSee1}>
                    <div className={styles.hide}>Hide</div>
                  </div>
                </div>
                <input className={styles.textField} type="password" 
                value={password}
                onChange={handlePasswordChange}
                />
                <div className={styles.errorMessage}>Error message</div>
              </div>
              <div className={styles.buttonParent}>

                <button className={styles.button2} onClick={handleLogin}>
                  <div className={styles.iconsContainer}>
                    <img className={styles.icons1} alt="" src="/icons3.svg" />
                    <div className={styles.signUp2}>Log in</div>
                  </div>
                </button>
                <div className={styles.checkBoxWrapper}>
                  <div className={styles.checkBox}>
                    <input className={styles.checkBox1} type="checkbox" />
                    <div className={styles.iWantTo}>Recordar sesion</div>
                  </div>
                </div>
              </div>
            </div>
            <a className={styles.haveAnAccountLogin}>
              <div className={styles.alreadyHaveAnContainer}>
                <span
                  className={styles.noTeAcuerdas}
                >{`No te acuerdas de tu contraseña? `}</span>
                <a href = "/recuperar-contraseña">
                <span className={styles.recuperala}>Recuperala</span>
                </a>
              </div>
            </a>
            <div />
          </div>
          <button type="button"className={styles.exiticon} onClick={handleHideButton}>
            <img className={styles.vectorIcon1} alt="" src="/icon.svg" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
