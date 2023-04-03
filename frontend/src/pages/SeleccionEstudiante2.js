import styles from "./SeleccionEstudiante2.module.css";
import React, { useState, useEffect } from 'react';
import jsonData from "./datos.json";




const SeleccionEstudiante2 = () => {
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
  
     const validEmail = "usuario@email.com";
     const validPassword = "usuario";
     const user = jsonData.Estudiante.find((Login) => Login.email === validEmail);
  
     const filteredData = jsonData.Materia_Usuario_Ciclo.filter(estudianteid => estudianteid.student_id === user.id);
  
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
              break;
            case 1:
              setSubjectname2(subject.name);
              setSubjectcode2(subject.code);
              break;
            case 2:
              setSubjectname3(subject.name);
              setSubjectcode3(subject.code);
              break;
            case 3:
              setSubjectname4(subject.name);
              setSubjectcode4(subject.code);
              break;
            case 4:
              setSubjectname5(subject.name);
              setSubjectcode5(subject.code);
              break;
              case 5:
              setSubjectname6(subject.name);
              setSubjectcode6(subject.code);
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
          <input
            className={styles.searchBarItem}
            type="text"
            placeholder="Search"
          />
        </section>
        <section className={styles.tanggalanParent}>
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
        </section>
      </div>
      <div className={styles.searchBar1}>
        <div className={styles.searchBarChild} />
        <input
          className={styles.searchBarItem}
          type="text"
          placeholder="Search"
        />
      </div>
      <b className={styles.seleccionAsignatura}>Seleccion asignatura</b>
      <div className={styles.vectorParent}>
        <img className={styles.groupInner} alt="" src="/rectangle-27852.svg" />
        <div className={styles.g1}>
          <div className={styles.g1Child} />
          <div className={styles.ids202AseguramientoDeLaCParent}>
            <div className={styles.ids202Aseguramiento}>
              {subjectcode1} - {subjectname1}
            </div>
            <input className={styles.boxunchecked} type="checkbox" />
          </div>
          <div className={styles.seleccionada}>SELECCIONADA</div>
          <select className={styles.selectSimple} />
        </div>
        <div className={styles.g2}>
          <div className={styles.g2Child} />
          <div className={styles.ids202AseguramientoDeLaCGroup}>
            <div className={styles.ids202Aseguramiento}>
              {subjectcode2} - {subjectname2}
            </div>
            <input className={styles.boxunchecked1} type="checkbox" />
          </div>
          <select className={styles.selectSimple} />
          <div className={styles.seleccionada1}>SELECCIONADA</div>
        </div>
        <div className={styles.g3}>
          <div className={styles.g3Child} />
          <div className={styles.ids202AseguramientoDeLaCContainer}>
            <div className={styles.ids202Aseguramiento}>
              {subjectcode3} - {subjectname3}
            </div>
            <input className={styles.boxunchecked2} type="checkbox" />
          </div>
          <div className={styles.seleccionada2}>SELECCIONADA</div>
          <select className={styles.selectSimple} />
        </div>
        <div className={styles.g4}>
          <select className={styles.selectSimple3} />
          <div className={styles.seleccionada3}>SELECCIONADA</div>
          <div className={styles.groupDiv}>
            <div className={styles.ids202Aseguramiento}>
              {subjectcode4} - {subjectname4}
            </div>
            <input className={styles.boxunchecked1} type="checkbox" />
          </div>
        </div>
        <div className={styles.g5}>
          <div className={styles.g3Child} />
          <div className={styles.ids202AseguramientoDeLaCParent1}>
            <div className={styles.ids202Aseguramiento4}>
              {subjectcode5} - {subjectname5}
            </div>
            <input className={styles.boxunchecked1} type="checkbox" />
          </div>
          <div className={styles.seleccionada4}>SELECCIONADA</div>
          <select className={styles.selectSimple} />
        </div>
        <div className={styles.g6}>
          <div className={styles.g6Child} />
          <div className={styles.ids202AseguramientoDeLaCGroup}>
            <div className={styles.ids202Aseguramiento}>
              {subjectcode6} - {subjectname6}
            </div>
            <input className={styles.boxunchecked1} type="checkbox" />
          </div>
          <div className={styles.seleccionada5}>SELECCIONADA</div>
          <select className={styles.selectSimple} />
        </div>
        <b className={styles.tuSeleccion}>TU SELECCION</b>
      </div>
      <div className={styles.cancelar}>CANCELAR</div>
      <button className={styles.button}>
        <div className={styles.text}>GUARDAR</div>
      </button>
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
            <b className={styles.signOut}>Sign Out</b>
            </a>
            <img
              className={styles.vuesaxlinearlogoutIcon}
              alt=""
              src="/vuesaxlinearlogout1.svg"
            />
          </div>
          <a href="/calificaciones-estudiante">
          <div className={styles.calificacionesWrapper}>
            <b className={styles.calificaciones}>Calificaciones</b>
          </div>
          </a>
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
          <a href="/materias-estudiante">
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
            src="/rectangle-27821.svg"
          />
          <img
            className={styles.vuesaxlinearuserCirlceAddIcon}
            alt=""
            src="/vuesaxlinearusercirlceadd1.svg"
          />
          <div className={styles.seleccionWrapper}>
            <b className={styles.seleccion}>{`Seleccion `}</b>
          </div>
          <div className={styles.rectangleDiv} />     
          <a href = "/seleccion-estudiante1">
          <b className={styles.retiroDeMateria}>Retiro de materia</b>
          </a>
          <img
            className={styles.vuesaxlinearprofile2userIcon}
            alt=""
            src="/vuesaxlinearprofile2user.svg"
          />
          <div className={styles.groupChild1} />
          <a href = "/seleccion-estudiante">
          <b className={styles.revisionDeMateria}>Revision de materia</b>
          <img
            className={styles.vuesaxlinearprofile2userIcon1}
            alt=""
            src="/vuesaxlinearprofile2user.svg"
          />
          </a>
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

export default SeleccionEstudiante2;
