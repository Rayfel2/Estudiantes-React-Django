import styles from "./SeleccionEstudiante2.module.css";
import React, { useState, useEffect } from 'react';
import jsonData from "./datos.json";
import axios from 'axios';


const SeleccionEstudiante2 = () => {
  //code subject
  const [subjectcode1, setSubjectcode1] = useState("");
  const [subjectcode2, setSubjectcode2] = useState("");
  const [subjectcode3, setSubjectcode3] = useState("");
  const [subjectcode4, setSubjectcode4] = useState("");
  const [subjectcode5, setSubjectcode5] = useState("");
  const [subjectcode6, setSubjectcode6] = useState("");
  const [subjectcode7, setSubjectcode7] = useState("");
  const [subjectcode8, setSubjectcode8] = useState("");
  const [subjectcode9, setSubjectcode9] = useState("");
  //Name subject
  const [subjectname1, setSubjectname1] = useState("");
  const [subjectname2, setSubjectname2] = useState("");
  const [subjectname3, setSubjectname3] = useState("");
  const [subjectname4, setSubjectname4] = useState("");
  const [subjectname5, setSubjectname5] = useState("");
  const [subjectname6, setSubjectname6] = useState("");
  const [subjectname7, setSubjectname7] = useState("");
  const [subjectname8, setSubjectname8] = useState("");
  const [subjectname9, setSubjectname9] = useState("");
  //credits subject
  const [subjectcredit1, setSubjectcredit1] = useState("");
  const [subjectcredit2, setSubjectcredit2] = useState("");
  const [subjectcredit3, setSubjectcredit3] = useState("");
  const [subjectcredit4, setSubjectcredit4] = useState("");
  const [subjectcredit5, setSubjectcredit5] = useState("");
  const [subjectcredit6, setSubjectcredit6] = useState("");
  const [subjectcredit7, setSubjectcredit7] = useState("");
  const [subjectcredit8, setSubjectcredit8] = useState("");
  const [subjectcredit9, setSubjectcredit9] = useState("");
  //Is lab? subject
  const [subjectlab1, setSubjectlab1] = useState("");
  const [subjectlab2, setSubjectlab2] = useState("");
  const [subjectlab3, setSubjectlab3] = useState("");
  const [subjectlab4, setSubjectlab4] = useState("");
  const [subjectlab5, setSubjectlab5] = useState("");
  const [subjectlab6, setSubjectlab6] = useState("");
  const [subjectlab7, setSubjectlab7] = useState("");
  const [subjectlab8, setSubjectlab8] = useState("");
  const [subjectlab9, setSubjectlab9] = useState("");


  const [username, setUsername] = useState("");
  const [userlastname, setUserlastname] = useState("");


  const [jValue, setJValue] = useState(0);
  const [datalength, setDatalength] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState(0);
  const [selectedId, setSelectedId] = useState(null);


  function handleChange(e) {
    setInputValue(e.target.value);
    setJValue(0);
  }

  function handleNextClick() {
    setJValue(jValue + 6);
  }

  function handlePrevClick() {
    setJValue(jValue - 6);
  }

  const { access } = JSON.parse(localStorage.getItem('token'));
  const config = {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  };


  function handleSaveButtonClick() {

    if (selectedId === null) {

      window.alert('Debes seleccionar una asignatura');
      return;
    }
    setSelectedId(null);
    window.alert(selectedId);
    axios.post(`http://localhost:8000/api/v1/academic-cycles/${selectedId}/subjects/`,
      {
        subject: selectedId
      },
      config
    )

      .then(response => {

        window.alert('La materia se selecciono correctamente');
        setButtonValue(buttonValue + 1);
      })
      .catch(error => {
        window.alert('Ocurrio un error al seleccionar la materia');
        console.error('Ocurrió un error al seleccionar el recurso:', error);
      })

  }

  useEffect(() => {


    async function getSubjects() {


      const { data } = await axios.get(
        'http://localhost:8000/api/v1/students/profile/grades/',
        config
      );
      const filteredData = data.filter(item => item.subject.code.startsWith(inputValue.toUpperCase()));

      let DataLength = {};
      if (inputValue != "") {
        DataLength = filteredData.length;
      } else {
        DataLength = data.length;
      }
      setDatalength(DataLength);

      for (let i = jValue; i < DataLength; i++) {

        let subjectData = {};
        if (inputValue != "") {
          subjectData = filteredData[i];
        } else {
          subjectData = data[i];
        }

        const { subject: { code, name, is_lab, credits } } = subjectData;


        // Asignar valores correspondientes a las variables de estado para cada materia
        switch (i) {
          case jValue + 0:
            setSubjectname1(name);
            setSubjectcode1(code);
            setSubjectcredit1(credits);
            setSubjectlab1(is_lab);
            break;
          case jValue + 1:
            setSubjectname2(name);
            setSubjectcode2(code);
            setSubjectcredit2(credits);
            setSubjectlab2(is_lab);
            break;
          case jValue + 2:
            setSubjectname3(name);
            setSubjectcode3(code);
            setSubjectcredit3(credits);
            setSubjectlab3(is_lab);

            break;
          case jValue + 3:
            setSubjectname4(name);
            setSubjectcode4(code);
            setSubjectcredit4(credits);
            setSubjectlab4(is_lab);
            break;
          case jValue + 4:
            setSubjectname5(name);
            setSubjectcode5(code);
            setSubjectcredit5(credits);
            setSubjectlab5(is_lab);
            break;
          case jValue + 5:
            setSubjectname6(name);
            setSubjectcode6(code);
            setSubjectcredit6(credits);
            setSubjectlab6(is_lab);
            break;
          case jValue + 6:
            setSubjectname7(name);
            setSubjectcode7(code);
            setSubjectcredit7(credits);
            setSubjectlab7(is_lab);
            break;
          case jValue + 7:
            setSubjectname8(name);
            setSubjectcode8(code);
            setSubjectcredit8(credits);
            setSubjectlab8(is_lab);
            break;
          case jValue + 8:
            setSubjectname9(name);
            setSubjectcode9(code);
            setSubjectcredit9(credits);
            setSubjectlab9(is_lab);
            break;
          default:
            break;
        }
      }


    }
    getSubjects();

    async function getProfile() {
      const { data } = await axios.get(
        'http://localhost:8000/api/v1/students/profile/',
        config
      );
      const subjectData = data;
      const { career, user: { id, first_name, last_name } } = subjectData;
      setUsername(first_name);
      setUserlastname(last_name);

    }
    getProfile();


  }, [jValue, inputValue, buttonValue]);

  return (
    <div className={styles.seleccionEstudiante}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <section className={styles.searchBar}>
          <div className={styles.searchBarChild} />
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
          className={styles.searchBar}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <b className={styles.seleccionAsignatura}>Seleccion asignatura</b>
      <div className={styles.vectorParent}>

        <img className={styles.groupInner} alt="" src="/rectangle-27851.svg" />
        {(jValue + 0 < datalength) && (
          <div className={styles.g1}>
            <div className={styles.g1Child} />
            <div className={styles.ids202Aseguramiento}>
              {subjectcode1} - {subjectname1}
            </div>
            <div className={styles.seleccionada}>Cr.{subjectcredit1} - {subjectlab1 ? 'Si' : 'No'} lab</div>
            <select className={styles.selectSimple} />
          </div>)}
        {(jValue + 1 < datalength) && (
          <div className={styles.g2}>
            <div className={styles.g2Child} />
            <div className={styles.ids202Aseguramiento1}>
              {subjectcode2} - {subjectname2}
            </div>
            <select className={styles.selectSimple} />
            <div className={styles.seleccionada1}>Cr.{subjectcredit2} - {subjectlab2 ? 'Si' : 'No'} lab</div>
          </div>)}
        {(jValue + 2 < datalength) && (
          <div className={styles.g3}>
            <div className={styles.g3Child} />
            <div className={styles.ids202AseguramientoDeLaCWrapper}>
              <div className={styles.ids202Aseguramiento2}>
                {subjectcode3} - {subjectname3}
              </div>
            </div>
            <div className={styles.seleccionada2}>Cr.{subjectcredit3} - {subjectlab3 ? 'Si' : 'No'} lab</div>
            <select className={styles.selectSimple} />
          </div>)}
        {(jValue + 3 < datalength) && (
          <div className={styles.g4}>
            <select className={styles.selectSimple3} />
            <div className={styles.seleccionada3}>Cr.{subjectcredit4} - {subjectlab4 ? 'Si' : 'No'} lab</div>
            <div className={styles.ids202AseguramientoDeLaCContainer}>
              <div className={styles.ids202Aseguramiento2}>
                {subjectcode4} - {subjectname4}
              </div>
            </div>
          </div>)}
        {(jValue + 4 < datalength) && (
          <div className={styles.g5}>
            <div className={styles.g3Child} />
            <div className={styles.ids202AseguramientoDeLaCWrapper}>
              <div className={styles.ids202Aseguramiento2}>
                {subjectcode5} - {subjectname5}
              </div>
            </div>
            <div className={styles.seleccionada4}>Cr.{subjectcredit5} - {subjectlab5 ? 'Si' : 'No'} lab</div>
            <select className={styles.selectSimple} />
          </div>)}
        {(jValue + 5 < datalength) && (
          <div className={styles.g6}>
            <div className={styles.g6Child} />
            <div className={styles.groupDiv}>
              <div className={styles.ids202Aseguramiento2}>
                {subjectcode6} - {subjectname6}
              </div>
            </div>
            <div className={styles.seleccionada5}>Cr.{subjectcredit6} - {subjectlab6 ? 'Si' : 'No'} lab</div>
            <select className={styles.selectSimple} />
          </div>)}
        {(jValue + 6 < datalength) && (
          <div className={styles.g7}>
            <div className={styles.g3Child} />
            <div className={styles.ids202Aseguramiento6}>
              {subjectcode7} - {subjectname7}
            </div>
            <div className={styles.seleccionada4}>Cr.{subjectcredit7} - {subjectlab7 ? 'Si' : 'No'} lab</div>
            <select className={styles.selectSimple} />
          </div>)}
        {(jValue + 7 < datalength) && (
          <div className={styles.g8}>
            <div className={styles.g6Child} />
            <div className={styles.groupDiv}>
              <div className={styles.ids202Aseguramiento2}>
                {subjectcode8} - {subjectname8}
              </div>
            </div>
            <div className={styles.seleccionada5}>Cr.{subjectcredit8} - {subjectlab8 ? 'Si' : 'No'} lab</div>
            <select className={styles.selectSimple} />
          </div>)}
        {(jValue + 8 < datalength) && (
          <div className={styles.g9}>
            <div className={styles.g3Child} />
            <div className={styles.ids202AseguramientoDeLaCWrapper}>
              <div className={styles.ids202Aseguramiento2}>
                {subjectcode9} - {subjectname9}
              </div>
            </div>
            <div className={styles.seleccionada4}>Cr.{subjectcredit9} - {subjectlab9 ? 'Si' : 'No'} lab</div>
            <select className={styles.selectSimple} />
          </div>)}
        <b className={styles.selecciona}>SELECCIONA</b>
        <div className={styles.verSeleccion}>Ver seleccion</div>
        {(datalength > (jValue + 6)) && (
          <b className={styles.siguiente} onClick={handleNextClick}>
            {'Siguiente >'}
          </b>
        )}
        {jValue > 0 && (
          <b className={styles.anterior} onClick={handlePrevClick}>
            {'< Anterior'}
          </b>
        )}
        <input className={styles.boxunchecked} type="checkbox" />
      </div>
      <div className={styles.cancelar}></div>
      <button className={styles.button} onClick={handleSaveButtonClick}>
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
            <a href="/"><b className={styles.signOut}>Sign Out</b></a>
            <img
              className={styles.vuesaxlinearlogoutIcon}
              alt=""
              src="/vuesaxlinearlogout1.svg"
            />
          </div>
          <div className={styles.calificacionesWrapper}>
            <a href="calificaciones-estudiante"><b className={styles.calificaciones}>Calificaciones</b></a>
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
            src="/vuesaxlineardocumenttext1.svg"
          />
          <a href="seleccion-estudiante1"><b className={styles.retiro}>Retiro</b></a>
        </div>
        <a href="ver-perfil"><div className={styles.ellipseParent}>
          <img className={styles.ellipseIcon} alt="" />
          <div className={styles.davidFelixParent}>
            <h2 className={styles.davidFelix}>{username} {userlastname}</h2>
            <div className={styles.estudiante}>Estudiante</div>
          </div>
        </div> </a>
        <h1 className={styles.estudiante1}>ESTUDIANTE</h1>
        <div className={styles.vectorGroup}>
          <img
            className={styles.rectangleIcon}
            alt=""
          />
          <img
            className={styles.vuesaxlinearuserCirlceAddIcon}
            alt=""
            src="/vuesaxlinearusercirlceadd2.svg"
          />
          <div className={styles.seleccionWrapper}>
            <a href="/seleccion-estudiante2"> <b className={styles.seleccion}>{`Seleccion `}</b></a>
          </div>
        </div>
        <div className={styles.dashboardParent}>
          <a href="/dashboard-estudiante2"> <b className={styles.dashboard}>Dashboard</b></a>
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
