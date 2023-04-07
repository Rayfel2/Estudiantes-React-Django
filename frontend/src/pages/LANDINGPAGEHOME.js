import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import styles from "./LANDINGPAGEHOME.module.css";

const LANDINGPAGEHOME = () => {
  return (
    <div className={styles.landingPageHome}>
      <a className={styles.landingPageHome1}>
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
          <img
            className={styles.heroHeadlineItem}
            alt=""
            src="/ellipse-85.svg"
          />
          <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          <div className={styles.content}>
            <div className={styles.calcularIndiceAcademico}>
              Calcular indice academico
            </div>
            <div className={styles.unaAplicacinPara}>
              Una aplicación para poder calcular el Índice Académico de los
              estudiantes y administración e especificación Del registro, tanto
              para estudiantes como para los profesores
            </div>
            <Button type='button'
              className={styles.ctaContactNow}
              variant="outline-primary"
              
            >
              REGISTRATE AHORA
            </Button>
          </div>
        </div>
        <div className={styles.actividadEstudiantil}>
          <p className={styles.blankLine}>Actividad estudiantil</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.howCanWeHelp}>
          <img
            className={styles.howCanWeHelpChild}
            alt=""
            src="/ellipse-87.svg"
          />
          <img className={styles.howCanWeHelpItem} alt="" src="/group-70.svg" />
          <div className={styles.howCanWeHelpInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.quePodemosBrindarlesParent}>
            <div className={styles.quePodemosBrindarles}>
              Que podemos brindarles?
            </div>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non nisi nibh. Maecenas in hendrerit dui. Quisque aliquet porta ante in fringilla. `}</div>
          </div>
          <div className={styles.loremIpsumDolorSitParent}>
            <div
              className={styles.loremIpsumDolor1}
            >{`Lorem ipsum dolor sit `}</div>
            <div className={styles.frameChild} />
            <div className={styles.wePresentYou}>
              We present you a proposal and discuss niffty-gritty like
            </div>
            <div className={styles.wePresentYou}>
              We present you a proposal and discuss niffty-gritty like
            </div>
            <img
              className={styles.boxSearch1Icon}
              alt=""
              src="/boxsearch-1.svg"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.wePresentYou}>
              Protocols apart from aengage models, pricing billing
            </div>
            <div className={styles.laMejoraContinua}>
              La mejora continua de los estudiantes
            </div>
            <img
              className={styles.ic20TrophyIcon}
              alt=""
              src="/ic20trophy.svg"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.wePresentYou}>
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
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild1} />
            <div className={styles.wePresentYou}>
              Si ocurre algun percance el estudiante puede retirar la materia.
            </div>
            <img className={styles.boxSearch1Icon} alt="" src="/code1-1.svg" />
            <div className={styles.estudiantePuedeRetirar}>
              Estudiante puede retirar materias
            </div>
          </div>
        </div>
        <div className={styles.quePodemosBrindarles1}>
          Que podemos brindarles?
        </div>
        <div className={styles.quePodemosBrindarles1}>
          Que podemos brindarles?
        </div>
        <div className={styles.wePresentYou2}>
          We present you a proposal and discuss niffty-gritty like
        </div>
        <div className={styles.wePresentYou2}>
          We present you a proposal and discuss niffty-gritty like
        </div>
        <div className={styles.greatSince}>
          <img
            className={styles.greatSinceChild}
            alt=""
            src="/ellipse-86.svg"
          />
          <div className={styles.greatSinceItem} />
          <div className={styles.ourBusinessPlan}>
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </div>
          <div className={styles.unaBuenaGestion}>
            Una buena gestion de la informacion
          </div>
          <img
            className={styles.unsplashbzqu01vG54Icon}
            alt=""
            src="/unsplashbzqu01vg54@2x.png"
          />
        </div>
        <div className={styles.happyClient}>
          <img className={styles.dotIcon} alt="" src="/dot.svg" />
          <img
            className={styles.happyClientChild}
            alt=""
            src="/ellipse-87.svg"
          />
          <img
            className={styles.unsplashmtztgvdshfyIcon}
            alt=""
            src="/unsplashmtztgvdshfy@2x.png"
          />
          <div className={styles.variosEstudiantesSeleccionad}>
            Varios estudiantes seleccionados, que ya creen en nuestro servicio
          </div>
          <div className={styles.loQueDicen}>
            Lo que dicen nuestros usuarios
          </div>
          <div className={styles.matthewPaulParent}>
            <div className={styles.matthewPaul}>Matthew Paul</div>
            <div className={styles.perfectoAhoraPuedo}>
              Perfecto! Ahora puedo monitorear mi desempeño académico de una
              manera más clara y efectiva, lo que me ha permitido mejorar mi
              rendimiento. Gracias por hacer que mi vida académica sea mucho más
              fácil y productiva
            </div>
            <Form.Check className={styles.ellipseFormcheck} type="radio" />
            <Form.Check className={styles.frameChild2} type="radio" />
            <Form.Check className={styles.frameChild3} type="radio" />
            <Form.Check className={styles.frameChild4} type="radio" />
            <Form.Check className={styles.frameChild5} type="radio" />
          </div>
        </div>
        <div className={styles.newsletter}>
          <img className={styles.dotIcon1} alt="" src="/dot1.svg" />
          <div className={styles.newsletterChild} />
          <div className={styles.newsletterItem} />
          <img
            className={styles.newsletterInner}
            alt=""
            src="/rectangle-31.svg"
          />
          <div className={styles.newsletterChild1} />
          <Button type="button"
            className={styles.frameButton}
            variant="primary"
            
          >
            REGISTRATE
          </Button>
          <div
            className={styles.loremIpsumDolor2}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          <div className={styles.registrate}>{`REGISTRATE `}</div>
        </div>
        <div className={styles.footer}>
          <b className={styles.estudiante1}>ESTUDIANTE</b>
          <div className={styles.queLesBrindamos1}>Que les brindamos?</div>
          <div className={styles.soporte}>Soporte</div>
          <div className={styles.contactos}>Contactos</div>
          <div className={styles.webDesignAppContainer}>
            <p className={styles.blankLine}>{`Web Design `}</p>
            <p className={styles.blankLine}>App Design</p>
            <p className={styles.blankLine}>Social Media Manage</p>
            <p className={styles.blankLine}>Market Analysis Project</p>
          </div>
          <div className={styles.faqPolicyBusinessContainer}>
            <p className={styles.blankLine}>FAQ</p>
            <p className={styles.blankLine}>Policy</p>
            <p className={styles.blankLine}>Business</p>
          </div>
          <div className={styles.whatsappSupport24Container}>
            <p className={styles.blankLine}>WhatsApp</p>
            <p className={styles.blankLine}>Support 24</p>
          </div>
          <div className={styles.footerChild} />
        </div>
        <div className={styles.loginSignUp}>
          
          <Button
            className={styles.button}
            variant="primary"
            href="/log-in"
          >
            Iniciar Sesion
          </Button>
        </div>
        <div className={styles.groupParent}>
          
          <Form.Select className={styles.dropdownFormselect}>
            <option>Español (Mexico), Ingles</option>
          </Form.Select>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <label className={styles.label6} htmlFor="numeroEstudiantesGraduados">
          2000
        </label>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <div className={styles.estudiantesGraduados}>Estudiantes graduados</div>
        <label className={styles.label6} htmlFor="numeroEstudiantesGraduados">
          2000
        </label>
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <div className={styles.profesoresRegistrados}>
          Profesores registrados
        </div>
        <label className={styles.label8} htmlFor="registroProfesor">
          24333
        </label>
        <div className={styles.materiasDisponibles}>Materias Disponibles</div>
        <label className={styles.label9} htmlFor="numeroMateriasDisponibles">
          24333
        </label>
        <div className={styles.reportesRealizados}>Reportes Realizados</div>
        <label className={styles.label10} htmlFor="numeroReporteRealizados">
          2000
        </label>
        <img className={styles.checkIcon8} alt="" src="/check2.svg" />
        <img
          className={styles.receiptLongIcon}
          alt=""
          src="/receipt-long.svg"
        />
      </a>
    </div>
  );
};

export default LANDINGPAGEHOME;
