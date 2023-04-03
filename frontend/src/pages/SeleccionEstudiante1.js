import styles from "./SeleccionEstudiante1.module.css";
import React, { useState, useEffect } from 'react';
import jsonData from "./datos.json";




const SeleccionEstudiante1 = () => {
      //code subject
      const [subjectcode1, setSubjectcode1] = useState("");
      const [subjectcode2, setSubjectcode2] = useState("");
      const [subjectcode3, setSubjectcode3] = useState("");
      const [subjectcode4, setSubjectcode4] = useState("");
      const [subjectcode5, setSubjectcode5] = useState("");
      const [subjectcode6, setSubjectcode6] = useState("");
      //Name subject
      const [subjectname1, setSubjectname1] = useState("");
      const [subjectname2, setSubjectname2] = useState("");
      const [subjectname3, setSubjectname3] = useState("");
      const [subjectname4, setSubjectname4] = useState("");
      const [subjectname5, setSubjectname5] = useState("");
      const [subjectname6, setSubjectname6] = useState("");
          //credits subject
          const [subjectcredit1, setSubjectcredit1] = useState("");
          const [subjectcredit2, setSubjectcredit2] = useState("");
          const [subjectcredit3, setSubjectcredit3] = useState("");
          const [subjectcredit4, setSubjectcredit4] = useState("");
          const [subjectcredit5, setSubjectcredit5] = useState("");
          const [subjectcredit6, setSubjectcredit6] = useState("");
  
     const validEmail = "usuario@email.com";
     const validPassword = "usuario";
     const user = jsonData.Estudiante.find((Login) => Login.email === validEmail);
  
     const filteredData = jsonData.Materia_Usuario_Ciclo.filter(estudianteid => estudianteid.student_id === user.id);
     const subjectCount = filteredData.length; // Asinagturas cursadas
  
     useEffect(() => {
      const filteredDataLength = filteredData.length; // cantidad de materias filtradas

      for (let i = 0; i < filteredDataLength; i++) {
        const subjectData = filteredData[i];
        const {subject_id} = subjectData;
    
           // Obtener el nombre y código de la materia correspondiente
        const subject = jsonData.Subject.find((subject) => subject.id === subject_id);
        if (subject) {
          switch (i) {
            case 0:
              setSubjectname1(subject.name);
              setSubjectcode1(subject.code);
              setSubjectcredit1(subject.credits);
              break;
            case 1:
              setSubjectname2(subject.name);
              setSubjectcode2(subject.code);
              setSubjectcredit2(subject.credits);
              break;
            case 2:
              setSubjectname3(subject.name);
              setSubjectcode3(subject.code);
              setSubjectcredit3(subject.credits);
              break;
            case 3:
              setSubjectname4(subject.name);
              setSubjectcode4(subject.code);
              setSubjectcredit4(subject.credits);
              break;
            case 4:
              setSubjectname5(subject.name);
              setSubjectcode5(subject.code);
              setSubjectcredit5(subject.credits);
              break;
              case 5:
              setSubjectname6(subject.name);
              setSubjectcode6(subject.code);
              setSubjectcredit6(subject.credits);
              break;
            default:
              break;
          }
        }
      }
    }, [filteredData, jsonData]);


  return (
    <div className={styles.seleccionEstudiante}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <section className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <input className={styles.searchBarItem} type="text" />
        </section>
        <div className={styles.tanggalanParent}>
          <div className={styles.tanggalan}>
            <div className={styles.tanggalanChild} />
            <div className={styles.marzo202023}>Marzo 20 2023 . 09:00 AM</div>
          </div>
          <button className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.vuesaxlinearnotificationIcon}
              alt=""
              src="/vuesaxlinearnotification1.svg"
            />
            <img className={styles.groupItem} alt="" src="/ellipse-48.svg" />
          </button>
        </div>
      </div>
      <section className={styles.searchBar1}>
        <div className={styles.searchBarChild} />
        <input
          className={styles.searchBarItem}
          type="text"
          placeholder="Search"
        />
      </section>
      <b className={styles.retiroDeMaterias}>Retiro de materias</b>
      <div className={styles.cancelar}>CANCELAR</div>
      <button className={styles.button}>
        <div className={styles.text}>RETIRAR</div>
      </button>
      <section className={styles.weather}>
        <div className={styles.rectangle} />
        <b className={styles.b}>{subjectCount}</b>
        <div className={styles.sunny}>Inscritas</div>
      </section>
      <div className={styles.weather1}>
        <div className={styles.rectangle} />
        <h1 className={styles.h1}>0</h1>
        <div className={styles.sunny}>Retiradas</div>
      </div>
      <section className={styles.weather2}>
        <div className={styles.rectangle} />
        <h1 className={styles.h1}>{subjectCount}</h1>
        <div className={styles.sunny2}>Continua</div>
      </section>
      <div className={styles.vectorParent}>
        <img className={styles.groupInner} alt="" src="/rectangle-27851.svg" />
        <div className={styles.parent}>
          <div className={styles.div}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.div1}>{subjectcredit1}</div>
              <div className={styles.div2}>02</div>
              <div className={styles.ids202Aseguramiento}>
              {subjectcode1} - {subjectname1}
              </div>
            </div>
            <button className={styles.ic20Close}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </button>
          </div>
          <div className={styles.div3}>
            <div className={styles.rectangleDiv} />
            <div className={styles.ids202AseguramientoDeLaCParent}>
              <div className={styles.ids202Aseguramiento1}>
              {subjectcode2} - {subjectname2}
              </div>
              <div className={styles.div4}>{subjectcredit2}</div>
              <div className={styles.div5}>02</div>
            </div>
            <button className={styles.ic20Close1}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </button>
          </div>
          <div className={styles.div6}>
            <div className={styles.rectangleDiv} />
            <div className={styles.ids202AseguramientoDeLaCParent}>
              <div className={styles.ids202Aseguramiento1}>
              {subjectcode3} - {subjectname3}
              </div>
              <div className={styles.div7}>02</div>
              <div className={styles.div8}>{subjectcredit3}</div>
            </div>
            <button className={styles.ic20Close1}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </button>
          </div>
          <div className={styles.div9}>
            <div className={styles.inner} />
            <div className={styles.ids202Aseguramiento}>
            {subjectcode4} - {subjectname4}
            </div>
            <div className={styles.div10}>{subjectcredit4}</div>
            <div className={styles.div11}>02</div>
            <button className={styles.ic20Close3}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </button>
          </div>
          <div className={styles.div12}>
            <div className={styles.child1} />
            <div className={styles.ids202AseguramientoDeLaCWrapper}>
              <div className={styles.ids202Aseguramiento4}>
              {subjectcode5} - {subjectname5}
              </div>
            </div>
            <div className={styles.div13}>02</div>
            <div className={styles.div14}>{subjectcredit5}</div>
            <button className={styles.ic20Close4}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </button>
          </div>
          <div className={styles.div15}>
            <div className={styles.child2} />
            <div className={styles.ids202Aseguramiento5}>
            {subjectcode6} - {subjectname6}
            </div>
            <div className={styles.div16}>02</div>
            <div className={styles.div17}>{subjectcredit6}</div>
            <button className={styles.ic20Close5}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </button>
          </div>
          <b className={styles.retiroDeMateria}>Retiro de materia</b>
        </div>
        <div className={styles.creditos}>Creditos</div>
        <div className={styles.seccion}>Seccion</div>
        <div className={styles.retirar}>Retirar</div>
      </div>
      <div className={styles.menuPrincipal}>
        <img
          className={styles.menuPrincipal}
          alt=""
          src="/rectangle-2769.svg"
        />
        <button className={styles.menuPrincipalItem} />
        <div className={styles.groupParent}>
          <div className={styles.iconoirheadsetHelpParent}>
            <img
              className={styles.iconoirheadsetHelp}
              alt=""
              src="/iconoirheadsethelp1.svg"
            />
            <b className={styles.help}>Help</b>
          </div>
          <div className={styles.signOutParent}>
          <a href = "/">
          <a href = "/">
            <b className={styles.signOut}>Sign Out</b>
            </a>
            </a>
            <img
              className={styles.vuesaxlinearlogoutIcon}
              alt=""
              src="/vuesaxlinearlogout1.svg"
            />
          </div>
          <div className={styles.calificacionesWrapper}>
            <a href = "/calificaciones-estudiante">
            <b className={styles.calificaciones}>Calificaciones</b>
            </a>
          </div>
          <img className={styles.groupIcon} alt="" src="/group-341661.svg" />
          <div className={styles.menuPrincipal1}>MENU PRINCIPAL</div>
          <div className={styles.support}>SUPPORT</div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.vuesaxlineardocumentTextParent}>
          <img
            className={styles.vuesaxlinearlogoutIcon}
            alt=""
            src="/group-34176.svg"
          />
          <a href = "/materias-estudiante">
          <b className={styles.materias}>Materias</b>
          </a>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.ellipseIcon} alt="" />
          <div className={styles.davidFelixParent}>
          <a href = "/ver-perfil">
            <h2 className={styles.davidFelix}>David Felix</h2>
            <div className={styles.estudiante}>Estudiante</div>
            </a>
          </div>
        </div>
        <h1 className={styles.estudiante1}>ESTUDIANTE</h1>
        <div className={styles.vectorGroup}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-2782.svg"
          />
          <img
            className={styles.vuesaxlinearuserCirlceAddIcon}
            alt=""
            src="/vuesaxlinearusercirlceadd1.svg"
          />
          <div className={styles.seleccionWrapper}>
            <a href = "seleccion-estudiante2">
            <b className={styles.seleccion}>{`Seleccion `}</b>
            </a>
          </div>
          <div className={styles.groupChild1} />
          <b className={styles.retiroDeMateria1}>Retiro de materia</b>
          <img
            className={styles.vuesaxlinearprofile2userIcon}
            alt=""
            src="/vuesaxlinearprofile2user.svg"
          />
          <div className={styles.groupChild2} />
          <a href = "/seleccion-estudiante">
          <b className={styles.revisionDeMateria}>Revision de materia</b>
          </a>
          <img
            className={styles.vuesaxlinearprofile2userIcon1}
            alt=""
            src="/vuesaxlinearprofile2user.svg"
          />
        </div>
        <div className={styles.dashboardParent}>
          <a href = "/dashboard-estudiante2">
          <b className={styles.dashboard}>Dashboard</b>
          </a>
          <img
            className={styles.vuesaxlinearhome2Icon}
            alt=""
            src="/vuesaxlinearhome21.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SeleccionEstudiante1;
