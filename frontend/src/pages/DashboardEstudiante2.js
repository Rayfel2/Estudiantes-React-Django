import styles from "./DashboardEstudiante2.module.css";
import React, { useState, useEffect } from 'react';
import jsonData from "./datos.json";

const DashboardEstudiante2 = () => {
    //code subject
    const [subjectcode1, setSubjectcode1] = useState("");
    const [subjectcode2, setSubjectcode2] = useState("");
    const [subjectcode3, setSubjectcode3] = useState("");
    const [subjectcode4, setSubjectcode4] = useState("");
    const [subjectcode5, setSubjectcode5] = useState("");
    //Name subject
    const [subjectname1, setSubjectname1] = useState("");
    const [subjectname2, setSubjectname2] = useState("");
    const [subjectname3, setSubjectname3] = useState("");
    const [subjectname4, setSubjectname4] = useState("");
    const [subjectname5, setSubjectname5] = useState("");
    //midterm
    const [midterm1, setMidterm1] = useState("");
    const [midterm2, setMidterm2] = useState("");
    const [midterm3, setMidterm3] = useState("");
    const [midterm4, setMidterm4] = useState("");
    const [midterm5, setMidterm5] = useState("");
    //final_grade
    const [finalgrade1, setFinalgrade1] = useState("");
    const [finalgrade2, setFinalgrade2] = useState("");
    const [finalgrade3, setFinalgrade3] = useState("");
    const [finalgrade4, setFinalgrade4] = useState("");
    const [finalgrade5, setFinalgrade5] = useState("");
    //letter_grade
    const [lettergrade1, setLettergrade1] = useState("");
    const [lettergrade2, setLettergrade2] = useState("");
    const [lettergrade3, setLettergrade3] = useState("");
    const [lettergrade4, setLettergrade4] = useState("");
    const [lettergrade5, setLettergrade5] = useState("");
  
  
  
    //Para asegurarme que la materia sea del estudiante que inicio seccion
    const validEmail = "usuario@email.com";
    const validPassword = "usuario";
    const user = jsonData.Estudiante.find((Login) => Login.email === validEmail);

    
    const filteredData = jsonData.Materia_Usuario_Ciclo.filter(estudianteid => estudianteid.student_id === user.id);
    const studentRecords = jsonData.AcademicCycle.filter(record => record.student_id === user.id);
    const Estudiante = jsonData.Estudiante.find((Estudiante) => Estudiante.id === user.id);
  
    //cargando los datos generales
    const generalIndex = (Estudiante.last_gpa); // indice general
    const quarterlyIndex = (Estudiante.overall_gpa); // Indice del trimestre
    const recordCount = studentRecords.length; // cantidad de trimestres
    const subjectCount = filteredData.length; // cantidad de asignatura cursadas
    const totalCredits = studentRecords.reduce((accumulator, record) => accumulator + record.taken_credits, 0); //suma de los creditos
  
    useEffect(() => {
    const filteredDataLength = filteredData.length; // cantidad de materias filtradas
  
    for (let i = 0; i < filteredDataLength; i++) {
      const subjectData = filteredData[i];
      const { midterm_grade, final_grade, final_grade_letter, subject_id } = subjectData;
  
      // Asignar valores correspondientes a las variables de estado para cada materia
      switch (i) {
        case 0:
          setMidterm1(midterm_grade);
          setFinalgrade1(final_grade);
          setLettergrade1(final_grade_letter);
          break;
        case 1:
          setMidterm2(midterm_grade);
          setFinalgrade2(final_grade);
          setLettergrade2(final_grade_letter);
          break;
        case 2:
          setMidterm3(midterm_grade);
          setFinalgrade3(final_grade);
          setLettergrade3(final_grade_letter);
          break;
        case 3:
          setMidterm4(midterm_grade);
          setFinalgrade4(final_grade);
          setLettergrade4(final_grade_letter);
          break;
        case 4:
          setMidterm5(midterm_grade);
          setFinalgrade5(final_grade);
          setLettergrade5(final_grade_letter);
          break;
        default:
          break;
      }
  
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
          default:
            break;
        }
      }
    }
  }, [filteredData, jsonData]);
    // cargando los datos especificos
    /*
    for (let i = 0; i < filteredData.Length; i++) {
    useEffect(()=>{
    if (filteredData[0]) {
      
      setMidterm1(filteredData[0].midterm_grade);
      setFinalgrade1(filteredData[0].final_grade);
      setLettergrade1(filteredData[0].final_grade_letter);
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = jsonData.Subject.find((subject) => subject.id === filteredData[0].subject_id);
      setSubjectname1(subject.name);
      setSubjectcode1(subject.code);
      
      
    } else if (filteredData[1]) {
      setMidterm2(filteredData[1].midterm_grade);
      setFinalgrade2(filteredData[1].final_grade);
      setLettergrade2(filteredData[1].final_grade_letter);
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = jsonData.Subject.find((subject) => subject.id === filteredData[1].subject_id);
      setSubjectname2(subject.name);
      setSubjectcode2(subject.code);
  
    } else if (filteredData[2]) {
          setMidterm3(filteredData[2].midterm_grade);
      setFinalgrade3(filteredData[2].final_grade);
      setLettergrade3(filteredData[2].final_grade_letter);
      
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = jsonData.Subject.find((subject) => subject.id === filteredData[2].subject_id);
      setSubjectname3(subject.name);
      setSubjectcode3(subject.code);
  
    } else if (filteredData[3]) {
          setMidterm4(filteredData[3].midterm_grade);
      setFinalgrade4(filteredData[3].final_grade);
      setLettergrade4(filteredData[3].final_grade_letter);
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = jsonData.Subject.find((subject) => subject.id === filteredData[3].subject_id);
      setSubjectname4(subject.name);
      setSubjectcode4(subject.code);
  
    } else if (filteredData[4]) {
          setMidterm5(filteredData[4].midterm_grade);
      setFinalgrade5(filteredData[4].final_grade);
      setLettergrade5(filteredData[4].final_grade_letter);
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = jsonData.Subject.find((subject) => subject.id === filteredData[4].subject_id);
      setSubjectname5(subject.name);
      setSubjectcode5(subject.code);
  
    }
    
  
  }, []) }*/
  return (
    <div className={styles.dashboardEstudiante2}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <input
            className={styles.searchBarItem}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className={styles.tanggalanParent}>
          <div className={styles.tanggalan}>
            <div className={styles.tanggalanChild} />
            <div className={styles.marzo202023}>Marzo 20 2023 . 09:00 AM</div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="/rectangle-2772.svg"
            />
            <button className={styles.vuesaxlinearnotification}>
              <img
                className={styles.vuesaxlinearnotificationIcon}
                alt=""
                src="/vuesaxlinearnotification.svg"
              />
            </button>
            <img className={styles.groupItem} alt="" src="/ellipse-48.svg" />
          </div>
        </div>
      </div>
      <div className={styles.menuPrincipal}>
        <img
          className={styles.menuPrincipal}
          alt=""
          src="/rectangle-2769.svg"
        />
        <a href = "/ver-perfil">
        <button className={styles.menuPrincipalItem} />
        </a>
        <div className={styles.groupParent}>
          <div className={styles.iconoirheadsetHelpParent}>
            <img
              className={styles.iconoirheadsetHelp}
              alt=""
              src="/iconoirheadsethelp.svg"
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
              src="/vuesaxlinearlogout.svg"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.dashboardParent}>
              <h1 className={styles.dashboard}>Dashboard</h1>
              <img
                className={styles.vuesaxlinearhome2Icon}
                alt=""
                src="/vuesaxlinearhome2.svg"
              />
            </div>
          </div>
          <a href="/calificaciones-estudiante">
          <div className={styles.calificacionesWrapper}>
            <b className={styles.calificaciones}>Calificaciones</b>
          </div>
          </a>
          <img className={styles.groupIcon} alt="" src="/group-34166.svg" />
          <div className={styles.menuPrincipal1}>MENU PRINCIPAL</div>
          <div className={styles.support}>SUPPORT</div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.vuesaxlineardocumentTextParent}>
          <img
            className={styles.vuesaxlinearlogoutIcon}
            alt=""
            src="/vuesaxlineardocumenttext.svg"
          />
           <a href="/materias-estudiante">
              <b className={styles.materias}>Materias</b>
          </a> 
        </div>
        <div className={styles.seleccionParent}>
          <a href="/seleccion-estudiante2">
          <b className={styles.seleccion}>{`Seleccion `}</b>
          <img
            className={styles.vuesaxlinearuserCirlceAddIcon}
            alt=""
            src="/vuesaxlinearusercirlceadd.svg"
          />
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
      </div>
      <div className={styles.dashboardButtom}>
        <section className={styles.chart37}>
          <div className={styles.overview}>
            <div className={styles.trophy}>{generalIndex}</div>
            <div className={styles.trophy1}>Indice general</div>
          </div>
        </section>
        <div className={styles.chart36}>
          <div className={styles.overview}>
            <div className={styles.trophy2}>{subjectCount}</div>
            <div className={styles.trophy3}>
              <p className={styles.asignaturas}>{`Asignaturas `}</p>
              <p className={styles.asignaturas}>{`de cursadas `}</p>
              <p className={styles.asignaturas}>de 110</p>
            </div>
          </div>
        </div>
        <div className={styles.chart36}>
          <div className={styles.overview}>
            <div className={styles.trophy4}>{recordCount}</div>
            <div className={styles.trophy5}>
              <p className={styles.asignaturas}>Trimestres</p>
              <p className={styles.asignaturas}>cursados de 21</p>
            </div>
          </div>
        </div>
        <section className={styles.chart37}>
          <div className={styles.overview}>
            <div className={styles.trophy6}>{totalCredits}</div>
            <div className={styles.trophy7}>
              <p className={styles.asignaturas}>Creditos</p>
              <p className={styles.asignaturas}>aprobados</p>
              <p className={styles.asignaturas}>de 279</p>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.dashboard1}>
        <div className={styles.dashboard2}>
          <div className={styles.dashboardChild} />
          <a href="/calificaciones-estudiante">
          <button className={styles.verDetallesParent} autoFocus>
            <div className={styles.verDetalles}>Ver detalles</div>
            <img
              className={styles.bxbxsChevronRightIcon}
              alt=""
              src="/bxbxschevronright.svg"
            />
          </button> </a>
          <div className={styles.dashboardItem} />
          <div className={styles.indiceAcademicoParent}>
            <b className={styles.indiceAcademico}>Indice Academico</b>
            <img className={styles.groupChild1} alt="" src="/group-136.svg" />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            
            <b className={styles.b}>{finalgrade1}</b>
            <b className={styles.b1}>{finalgrade2}</b>
            <b className={styles.b2}>{finalgrade3}</b>
            <b className={styles.b3}>{finalgrade4}</b>
            <b className={styles.b4}>{finalgrade5}</b>
            <b className={styles.asignaturasSeleccionadas}>
              Asignaturas seleccionadas
            </b>
            <div className={styles.parent}>
              <b className={styles.b5}>{midterm1}</b>
              <div className={styles.basesDeDatoWrapper}>
                <div className={styles.basesDeDato}>{subjectname1}</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-68.svg"
                />
                <b className={styles.b6}>{lettergrade1}</b>
              </div>
            </div>
            <div className={styles.group}>
              <b className={styles.b7}>{midterm2}</b>
              <div className={styles.labBasesDeWrapper}>
                <div className={styles.labBasesDe}>{subjectname2}</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-68.svg"
                />
                <b className={styles.b8}>{lettergrade2}</b>
              </div>
            </div>
            <div className={styles.container}>
              <b className={styles.b9}>{midterm3}</b>
              <div className={styles.algebraYGeoWrapper}>
                <div className={styles.algebraYGeo}>{subjectname3}</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-68.svg"
                />
                <b className={styles.a}>{lettergrade3}</b>
              </div>
            </div>
            <div className={styles.parent1}>
              <b className={styles.b10}>{midterm4}</b>
              <div className={styles.ciudadaniaYWrapper}>
                <div className={styles.ciudadaniaY}>{subjectname4}</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-68.svg"
                />
                <b className={styles.a1}>{lettergrade4}</b>
              </div>
            </div>
            <div className={styles.parent2}>
              <b className={styles.b11}>{midterm5}</b>
              <div className={styles.electivaMedioWrapper}>
                <div className={styles.electivaMedio}>{subjectname5}</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-68.svg"
                />
                <b className={styles.a1}>{lettergrade5}</b>
              </div>
              <div className={styles.trophy8}>Calif</div>
            </div>
            <div className={styles.trophy9}>Medio termino</div>
          </div>
          <img
            className={styles.dashboardInner}
            alt=""
            src="/rectangle-90.svg"
          />
        </div>
        <b className={styles.dashboard3}>Dashboard</b>
      </div>
      <div className={styles.horario}>
        <div className={styles.ladeboard}>
          <img
            className={styles.ladeboardChild}
            alt=""
            src="/rectangle-585.svg"
          />
          <button className={styles.rectangleContainer}>
            <div className={styles.groupChild7} />
            <img className={styles.groupChild8} alt="" src="/group-53.svg" />
          </button>
          <div className={styles.horarioDeClases}>Horario de clases</div>
          <div className={styles.clase}>Clase</div>
          <div className={styles.horario1}>Horario</div>
          <div className={styles.fecha}>Fecha</div>
          <div className={styles.estructuraDeDatosYAlgoritmParent}>
            <div className={styles.estructuraDeDatosContainer}>
              <span className={styles.estructuraDeDatosContainer1}>
                <p className={styles.estructuraDeDatos}>
                  {subjectname1}
                </p>
                <p className={styles.computerScience}>{subjectcode1}</p>
              </span>
            </div>
            <section className={styles.rectangleSection} />
            <div className={styles.am100pm}>8:30am-1:00pm</div>
            <div className={styles.maana09AbrilContainer}>
              <p className={styles.asignaturas}>Mañana</p>
              <p className={styles.p}>
                <span>
                  <b>09</b>
                </span>
              </p>
              <p className={styles.abril}>
                <span>
                  <span>Abril</span>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.estructuraDeDatosYAlgoritmGroup}>
            <div className={styles.definicionYIdeacionContainer}>
              <span className={styles.estructuraDeDatosContainer1}>
                <p className={styles.estructuraDeDatos}>
                  {subjectname2}
                </p>
                <p className={styles.ins32501}>{subjectcode2}</p>
              </span>
            </div>
            <section className={styles.rectangleSection} />
            <div className={styles.am1200pm}>9:30am-12:00pm</div>
            <div className={styles.miercoles10AbrilContainer}>
              <p className={styles.asignaturas}>Miercoles</p>
              <p className={styles.p1}>
                <span>
                  <b>10</b>
                </span>
              </p>
              <p className={styles.asignaturas}>
                <span>
                  <span>Abril</span>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.definicionYIdeacionIds322Parent}>
            <div className={styles.definicionYIdeacionContainer}>
              <span className={styles.estructuraDeDatosContainer1}>
                <p className={styles.estructuraDeDatos}>
                  {subjectname3}
                </p>
                <p className={styles.ins32501}>{subjectcode3}</p>
              </span>
            </div>
            <section className={styles.rectangleSection} />
            <div className={styles.am1200pm}>3:30pm-7:00pm</div>
            <div className={styles.miercoles10AbrilContainer1}>
              <p className={styles.asignaturas}>Miercoles</p>
              <p className={styles.p1}>
                <b>10</b>
              </p>
              <p className={styles.asignaturas}>Abril</p>
            </div>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.line1} />
      </div>
      <div className={styles.reporte}>
        <div className={styles.reporteChild} />
        <div className={styles.groupContainer}>
          <div className={styles.parent3}>
            <div className={styles.div}>{quarterlyIndex}</div>
            <div className={styles.indiceTrimestral}>Indice trimestral</div>
          </div>
          <div className={styles.rectangleWrapper}>
            <div className={styles.groupChild11} />
          </div>
        </div>
        <div className={styles.listItems}>
          <button className={styles.constructorOverflowMenu}>
            <div className={styles.textElementsTitle}>
              <p className={styles.title}>Download report</p>
            </div>
            <div className={styles.elementsOverflowMenus}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </button>
          <div className={styles.constructorOverflowMenu1}>
            <div className={styles.textElementsTitle1}>
              <div className={styles.title1}>Report</div>
            </div>
            <div className={styles.elementsOverflowMenus1}>
              <img className={styles.reportIcon} alt="" src="/report.svg" />
            </div>
          </div>
          <div className={styles.constructorOverflowMenu1}>
            <div className={styles.textElementsTitle}>
              <div className={styles.title1}>Upload</div>
            </div>
            <div className={styles.elementsOverflowMenus}>
              <img
                className={styles.reportIcon}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </div>
          <div className={styles.constructorOverflowMenu1}>
            <div className={styles.textElementsTitle}>
              <div className={styles.title1}>Delete</div>
            </div>
            <div className={styles.elementsOverflowMenus}>
              <img
                className={styles.reportIcon}
                alt=""
                src="/arrow-right1.svg"
              />
            </div>
          </div>
        </div>
        <img className={styles.reporteItem} alt="" src="/rectangle-901.svg" />
      </div>
      <section className={styles.alertas}>
        <div className={styles.flag}>
          <div className={styles.content}>
            <div className={styles.base}>
              <img
                className={styles.ic20WarningIcon}
                alt=""
                src="/ic20warning.svg"
              />
            </div>
            <div className={styles.content1}>
              <div className={styles.alertas1}>Alertas</div>
              <div className={styles.description}>
                Pay attention, ya se acerca la seleccion.
              </div>
              <div className={styles.actions}>
                <div className={styles.link}>
                  <div className={styles.link1}>Understood</div>
                </div>
                <img
                  className={styles.ic16userInterfacedotIcon}
                  alt=""
                  src="/ic16user-interfacedot.svg"
                />
                <div className={styles.link2}>
                  <div className={styles.link3}>No thanks</div>
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <img
                className={styles.ic20CloseIcon}
                alt=""
                src="/ic20close.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.flag1}>
          <div className={styles.content}>
            <div className={styles.base1}>
              <img
                className={styles.ic20WarningIcon}
                alt=""
                src="/ic20warning1.svg"
              />
            </div>
            <div className={styles.content1}>
              <div className={styles.alertas1}>Uh oh!</div>
              <div className={styles.description1}>
                Pay attention, ya se acerca la seleccion.
              </div>
              <div className={styles.actions1}>
                <div className={styles.link}>
                  <div className={styles.link1}>Understood</div>
                </div>
                <img
                  className={styles.ic16userInterfacedotIcon}
                  alt=""
                  src="/ic16user-interfacedot1.svg"
                />
                <div className={styles.link2}>
                  <div className={styles.link3}>No thanks</div>
                </div>
              </div>
            </div>
            <button className={styles.icon}>
              <img
                className={styles.ic20CloseIcon}
                alt=""
                src="/ic20close1.svg"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


export default DashboardEstudiante2;
