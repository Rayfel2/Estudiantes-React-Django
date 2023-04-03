import styles from "./CalificacionesEstudiante.module.css";
import React, { useState, useEffect } from "react";
import jsonData from "./datos.json";

  const CalificacionesEstudiante = () => {

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
    //Is lab? subject
        const [subjectlab1, setSubjectlab1] = useState("");
        const [subjectlab2, setSubjectlab2] = useState("");
        const [subjectlab3, setSubjectlab3] = useState("");
        const [subjectlab4, setSubjectlab4] = useState("");
        const [subjectlab5, setSubjectlab5] = useState("");
        const [subjectlab6, setSubjectlab6] = useState("");
    //midterm
    const [midterm1, setMidterm1] = useState("");
    const [midterm2, setMidterm2] = useState("");
    const [midterm3, setMidterm3] = useState("");
    const [midterm4, setMidterm4] = useState("");
    const [midterm5, setMidterm5] = useState("");
    const [midterm6, setMidterm6] = useState("");
    //final_grade
    const [finalgrade1, setFinalgrade1] = useState("");
    const [finalgrade2, setFinalgrade2] = useState("");
    const [finalgrade3, setFinalgrade3] = useState("");
    const [finalgrade4, setFinalgrade4] = useState("");
    const [finalgrade5, setFinalgrade5] = useState("");
    const [finalgrade6, setFinalgrade6] = useState("");
    //letter_grade
    const [lettergrade1, setLettergrade1] = useState("");
    const [lettergrade2, setLettergrade2] = useState("");
    const [lettergrade3, setLettergrade3] = useState("");
    const [lettergrade4, setLettergrade4] = useState("");
    const [lettergrade5, setLettergrade5] = useState("");
    const [lettergrade6, setLettergrade6] = useState("");
  
  
  
    //Para asegurarme que la materia sea del estudiante que inicio seccion
    const validEmail = "usuario@email.com";
    const validPassword = "usuario";
    const user = jsonData.Estudiante.find((Login) => Login.email === validEmail);

    const filteredData = jsonData.Materia_Usuario_Ciclo.filter(estudianteid => estudianteid.student_id === user.id);
    const studentRecords = jsonData.AcademicCycle.filter(record => record.student_id === user.id);
    const Estudiante = jsonData.Estudiante.find((Estudiante) => Estudiante.id === user.id);
    const Person = jsonData.Person.find ((Person) => Person.id === Estudiante.person_id);

    //cargando los datos generales
    const nameStudent = (Person.first_name); // Nombre del estudiante
    const lastnameStudent = (Person.last_name); // Apellido del estudiante
    const tuition = (Estudiante.registration_number); // matricula del estudiante
    const generalIndex = (Estudiante.last_gpa); // indice general
    const quarterlyIndex = (Estudiante.overall_gpa); // Indice del trimestre
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
              setSubjectcredit1(subject.credits)
              if (subject.is_lab){
                setSubjectlab1("SI");
              } else {
                setSubjectlab1("NO");
              }
              break;
            case 1:
              setSubjectname2(subject.name);
              setSubjectcode2(subject.code);
              setSubjectname2(subject.name);
      setSubjectcredit2(subject.credits)
      if (subject.is_lab){
        setSubjectlab2("SI");
      } else {
        setSubjectlab2("NO");
      }
              break;
            case 2:
              setSubjectname3(subject.name);
              setSubjectcode3(subject.code);
              setSubjectcredit3(subject.credits)
              if (subject.is_lab){
                setSubjectlab3("SI");
              } else {
                setSubjectlab3("NO");
              }
              break;
            case 3:
              setSubjectname4(subject.name);
              setSubjectcode4(subject.code);
              setSubjectcredit4(subject.credits)
              if (subject.is_lab){
                setSubjectlab4("SI");
              } else {
                setSubjectlab4("NO");
              }
              break;
            case 4:
              setSubjectname5(subject.name);
              setSubjectcode5(subject.code);
              setSubjectcredit5(subject.credits)
              if (subject.is_lab){
                setSubjectlab5("SI");
              } else {
                setSubjectlab5("NO");
              }
              break;
            default:
              break;
          }
        }
      }
    }, [filteredData, jsonData]);
/*
    // cargando los datos especificos
    if (filteredData[0]) {
      setMidterm1(filteredData[0].midterm_grade);
      setFinalgrade1(filteredData[0].final_grade);
      setLettergrade1(filteredData[0].final_grade_letter);
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = data.Subject.find((subject) => subject.id === filteredData[0].subject_id);
      setSubjectname1(subject.name);
      setSubjectcode1(subject.code);
      setSubjectcredit1(subject.credits)
      if (subject.is_lab){
        setSubjectlab1("SI");
      } else {
        setSubjectlab1("NO");
      }
      
    } else if (filteredData[1]) {
      setMidterm2(filteredData[1].midterm_grade);
      setFinalgrade2(filteredData[1].final_grade);
      setLettergrade2(filteredData[1].final_grade_letter);
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = data.Subject.find((subject) => subject.id === filteredData[1].subject_id);
      setSubjectname2(subject.name);
      setSubjectcode2(subject.code);
      setSubjectcredit2(subject.credits)
      if (subject.is_lab){
        setSubjectlab2("SI");
      } else {
        setSubjectlab2("NO");
      }
  
    } else if (filteredData[2]) {
          setMidterm3(filteredData[2].midterm_grade);
      setFinalgrade3(filteredData[2].final_grade);
      setLettergrade3(filteredData[2].final_grade_letter);
      
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = data.Subject.find((subject) => subject.id === filteredData[2].subject_id);
      setSubjectname3(subject.name);
      setSubjectcode3(subject.code);
      setSubjectcredit3(subject.credits)
      if (subject.is_lab){
        setSubjectlab3("SI");
      } else {
        setSubjectlab3("NO");
      }
  
    } else if (filteredData[3]) {
          setMidterm4(filteredData[3].midterm_grade);
      setFinalgrade4(filteredData[3].final_grade);
      setLettergrade4(filteredData[3].final_grade_letter);
      
      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = data.Subject.find((subject) => subject.id === filteredData[3].subject_id);
      setSubjectname4(subject.name);
      setSubjectcode4(subject.code);
      setSubjectcredit4(subject.credits)
      if (subject.is_lab){
        setSubjectlab4("SI");
      } else {
        setSubjectlab4("NO");
      }
  
    } else if (filteredData[4]) {
          setMidterm5(filteredData[4].midterm_grade);
      setFinalgrade5(filteredData[4].final_grade);
      setLettergrade5(filteredData[4].final_grade_letter);

      // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
      const subject = data.Subject.find((subject) => subject.id === filteredData[5].subject_id);
      setSubjectname5(subject.name);
      setSubjectcode5(subject.code);
      setSubjectcredit5(subject.credits)
      if (subject.is_lab){
        setSubjectlab5("SI");
      } else {
        setSubjectlab5("NO");
      }
      
  
    } else if (filteredData[5]) {
      setMidterm6(filteredData[5].midterm_grade);
  setFinalgrade6(filteredData[5].final_grade);
  setLettergrade6(filteredData[5].final_grade_letter);

  
  // Pasando el id de la tabla puente a la tabla subject para obtener el nombre
  const subject = data.Subject.find((subject) => subject.id === filteredData[5].subject_id);
  setSubjectname6(subject.name);
  setSubjectcode6(subject.code);
  setSubjectcredit6(subject.credits)
  if (subject.is_lab){
    setSubjectlab6("SI");
  } else {
    setSubjectlab6("NO");
  }
    }
    */
  return (
    <div className={styles.calificacionesEstudiante}>
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
          <img className={styles.groupChild} alt="" src="/group-341601.svg" />
        </div>
      </div>
      <img
        className={styles.calificacionesEstudianteChild}
        alt=""
        src="/rectangle-27853.svg"
      />
      <div className={styles.g1Parent}>
        <div className={styles.g1}>
          <div className={styles.calificacion}>Calificacion</div>
          <img className={styles.backgroundIcon} alt="" src="/background.svg" />
          <p className={styles.ins32602}>{subjectcode1}</p>
          <div className={styles.estructuraDeDatos}>{subjectname1}</div>
          <b className={styles.a}>{lettergrade1}</b>
          <div className={styles.puntos}>Laboratorio</div>
          <b className={styles.b}>{subjectlab1}</b>
          <div className={styles.notaFinal}>Nota final</div>
          <b className={styles.b1}>{midterm1}</b>
          <div className={styles.creditos}>Creditos</div>
          <b className={styles.b2}>{subjectcredit1}</b>
          <div className={styles.medioTermino}>Medio termino</div>
          <b className={styles.b3}>{finalgrade1}</b>
        </div>
        <div className={styles.g2}>
          <div className={styles.calificacion1}>Calificacion</div>
          <b className={styles.i}>{lettergrade2}</b>
          <b className={styles.b4}>{subjectlab2}</b>
          <div className={styles.notaFinal1}>Nota final</div>
          <b className={styles.b5}>{midterm2}</b>
          <b className={styles.b6}>{subjectcredit2}</b>
          <b className={styles.b7}>{finalgrade2}</b>
          <img
            className={styles.backgroundIcon1}
            alt=""
            src="/background1.svg"
          />
          <p className={styles.ins32601}>{subjectcode2}</p>
          <div className={styles.laboratorioDeEstructura}>
            {subjectname2}
          </div>
          <div className={styles.puntos1}>Laboratorio</div>
          <div className={styles.creditos1}>Creditos</div>
          <div className={styles.medioTermino1}>Medio termino</div>
        </div>
        <div className={styles.g4}>
          <img
            className={styles.backgroundIcon1}
            alt=""
            src="/background2.svg"
          />
          <p className={styles.ins32601}>{subjectcode3}</p>
          <div className={styles.laboratorioDeEstructura}>
            {subjectname3}
          </div>
          <div className={styles.calificacion1}>Calificacion</div>
          <b className={styles.i}>{lettergrade3}</b>
          <div className={styles.puntos1}>Laboratorio</div>
          <b className={styles.b4}>{subjectlab3}</b>
          <div className={styles.notaFinal1}>Nota final</div>
          <b className={styles.b5}>{midterm3}</b>
          <div className={styles.creditos1}>Creditos</div>
          <b className={styles.b6}>{subjectcredit3}</b>
          <b className={styles.b7}>{finalgrade3}</b>
          <div className={styles.medioTermino1}>Medio termino</div>
        </div>
        <div className={styles.g3}>
          <img
            className={styles.backgroundIcon1}
            alt=""
            src="/background3.svg"
          />
          <p className={styles.ins32601}>{subjectcode4}</p>
          <div className={styles.laboratorioDeEstructura}>
            {subjectname4}
          </div>
          <div className={styles.calificacion1}>Calificacion</div>
          <b className={styles.i1}>{lettergrade4}</b>
          <div className={styles.puntos1}>Laboratorio</div>
          <b className={styles.b4}>{subjectlab4}</b>
          <div className={styles.notaFinal1}>Nota final</div>
          <b className={styles.b5}>{midterm4}</b>
          <div className={styles.creditos1}>Creditos</div>
          <b className={styles.b6}>{subjectcredit4}</b>
          <b className={styles.b7}>{finalgrade4}</b>
          <div className={styles.medioTermino1}>Medio termino</div>
        </div>
        <select className={styles.selectSimple} autoFocus />
        <div className={styles.trimestre3}>Trimestre 3</div>
        <button className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.eldownloadAltParent}>
            <img
              className={styles.eldownloadAltIcon}
              alt=""
              src="/eldownloadalt.svg"
            />
            <b className={styles.pdf}>PDF</b>
          </div>
        </button>
      </div>
      <b className={styles.calificaciones}>Calificaciones</b>
      <div className={styles.chartCardWithIcon} />
      <div className={styles.weather}>
        <div className={styles.rectangle} />
        <b className={styles.b16}>{quarterlyIndex}</b>
        <div className={styles.sunny}>Indice Trimestral</div>
      </div>
      <div className={styles.weather1}>
        <div className={styles.rectangle} />
        <div className={styles.sunny1}>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.id}>{`ID: `}</span>
              <span>{tuition}</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.id}>{`Nombre: `}</span>
              <span>{nameStudent} {lastnameStudent}</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.estatus}>{`Estatus: `}</span>
            </span>
            <span className={styles.activo}>ACTIVO</span>
            <span>
              <span className={styles.span}>{` `}</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.estatus}>Creditos aprobados:</span>
              <span> {totalCredits}</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.estatus}>Creditos programa:</span>
              <span className={styles.span1}> 279</span>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.weather2}>
        <div className={styles.rectangle} />
        <b className={styles.b16}>{generalIndex}</b>
        <div className={styles.sunny2}>Índice Acumulado</div>
      </div>
      <div className={styles.menuPrincipal}>
        <img
          className={styles.menuPrincipalChild}
          alt=""
          src="/rectangle-2769.svg"
        />
        <button className={styles.menuPrincipalItem} />
        <div className={styles.groupParent}>
          <div className={styles.iconoirheadsetHelpParent}>
            <img
              className={styles.iconoirheadsetHelp}
              alt=""
              src="/iconoirheadsethelp2.svg"
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
              src="/vuesaxlinearlogout2.svg"
            />
          </div>
          <div className={styles.menuPrincipal1}>MENU PRINCIPAL</div>
          <div className={styles.support}>SUPPORT</div>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.vuesaxlineardocumentTextParent}>
          <img
            className={styles.vuesaxlinearlogoutIcon}
            alt=""
            src="/group-341761.svg"
          />
          <a href="/materias-estudiante">
              <b className={styles.materias}>Materias</b>
          </a>
        </div>
        <div className={styles.seleccionParent}>
          <a href = "/seleccion-estudiante2">
          <b className={styles.seleccion}>{`Seleccion `}</b>
          </a>
          <img
            className={styles.vuesaxlinearuserCirlceAddIcon}
            alt=""
            src="/vuesaxlinearusercirlceadd3.svg"
          />
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
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <h1 className={styles.calificaciones1}>Calificaciones</h1>
          <img
            className={styles.vuesaxlineartaskSquareIcon}
            alt=""
            src="/vuesaxlineartasksquare1.svg"
          />
        </div>
        <a href="/dashboard-estudiante2">
        <div className={styles.dashboardParent}>
          <b className={styles.dashboard}>Dashboard</b>
          <img
            className={styles.vuesaxlinearhome2Icon}
            alt=""
            src="/vuesaxlinearhome21.svg"
          />         
        </div>
        </a>
      </div>
    </div>
  );
};
  
export default CalificacionesEstudiante;
