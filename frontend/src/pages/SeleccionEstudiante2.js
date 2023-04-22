import styles from "./SeleccionEstudiante2.module.css";
import React, { useState, useEffect } from 'react';
import jsonData from "./datos.json";
import axios from 'axios';


const SeleccionEstudiante2 = () => {
    //id subject
    const [subjectid1, setSubjectid1] = useState("");
    const [subjectid2, setSubjectid2] = useState("");
    const [subjectid3, setSubjectid3] = useState("");
    const [subjectid4, setSubjectid4] = useState("");
    const [subjectid5, setSubjectid5] = useState("");
    const [subjectid6, setSubjectid6] = useState("");
    const [subjectid7, setSubjectid7] = useState("");
    const [subjectid8, setSubjectid8] = useState("");
    const [subjectid9, setSubjectid9] = useState("");
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
    //professor name
    const  [professorname1, setProfessorname1] = useState("");
     const [professorname2, setProfessorname2] = useState("");
     const [professorname3, setProfessorname3] = useState("");
     const [professorname4, setProfessorname4] = useState("");
     const [professorname5, setProfessorname5] = useState("");
     const [professorname6, setProfessorname6] = useState("");
     const [professorname7, setProfessorname7] = useState("");
     const [professorname8, setProfessorname8] = useState("");
     const [professorname9, setProfessorname9] = useState("");
         //professor last name
    const  [professorlastname1, setProfessorlastname1] = useState("");
    const [professorlastname2, setProfessorlastname2] = useState("");
    const [professorlastname3, setProfessorlastname3] = useState("");
    const [professorlastname4, setProfessorlastname4] = useState("");
    const [professorlastname5, setProfessorlastname5] = useState("");
    const [professorlastname6, setProfessorlastname6] = useState("");
    const [professorlastname7, setProfessorlastname7] = useState("");
    const [professorlastname8, setProfessorlastname8] = useState("");
    const [professorlastname9, setProfessorlastname9] = useState("");



  const [username, setUsername] = useState("");
  const [userlastname, setUserlastname] = useState("");


  const [jValue, setJValue] = useState(0);
  const [datalength, setDatalength] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState("");
  const [subjectcodes, setSubjectCodes] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  function handleChangeChecked(event) {
    setIsChecked(event.target.checked);
    setSelectedSubjects([]);
    setButtonValue(buttonValue + 1)
  }


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
  


  const [selectedSubjects, setSelectedSubjects] = useState([]);

  function handleCancelButtonClick() {
    setSelectedSubjects([]);
  }

  // Función que se ejecuta cuando el usuario hace clic en el botón "Guardar"
  function handleSaveButtonClick() {
    if (selectedSubjects.length === 0) {
      window.alert("Debes seleccionar al menos una asignatura");
      return;
    }
    const confirmed = window.confirm(`¿Está seguro de que desea guardar la seleccion?`);

    if (confirmed) {
    setSelectedSubjects([]);
    selectedSubjects.forEach((subject) => {
      axios
        .post(`http://localhost:8000/api/v1/academic-cycles/${1}/subjects/`, {
          subject: subject,
        }, config)
        
        .then((response) => {
          window.alert(`La materia ${subject} se seleccionó correctamente`);
          setButtonValue(buttonValue + 1)
        })
        .catch((error) => {
          window.alert(`Ocurrió un error al seleccionar la materia ${subject}`);
          console.error("Ocurrió un error al seleccionar el recurso:", error);
        });
    });
  }
  }

  // Función que se ejecuta cuando el usuario selecciona una opción en cualquiera de los select
  function handleSelectChange(event) {
    const selectedSubject = event.target.value;
    if (selectedSubjects.includes(selectedSubject)) {
      // Si la asignatura ya está seleccionada, la eliminamos del array
      setSelectedSubjects(selectedSubjects.filter((subject) => subject !== selectedSubject));
    } else {
      // Si la asignatura no está seleccionada, la agregamos al array
      setSelectedSubjects([...selectedSubjects, selectedSubject]);
    }
  }
  useEffect(() => {
    async function getRecord() {


      const { data } = await axios.get(
        'http://localhost:8000/api/v1/students/profile/grades/',
        config
      );
      const codes = data.map(record => record.subject.code);
      setSubjectCodes(codes);
    }
    getRecord();
  }, [jValue, inputValue, buttonValue]);


  useEffect(() => {

    
    async function getSubjects() {


      const { data } = await axios.get(
        'http://localhost:8000/api/v1/professor/subjects/', 
        config
      );

      let selectedData = data.filter(record => subjectcodes.includes(record.code));
      if (!isChecked){
        selectedData = data.filter(record => !subjectcodes.includes(record.code));
      }
      const filteredData = selectedData.filter(item => item.code.startsWith(inputValue.toUpperCase()));

      let DataLength = {};
      if (inputValue != "") {
        DataLength = filteredData.length;
      } else {
        DataLength = selectedData.length;
      }
      setDatalength(DataLength);

      for (let i = jValue; i < DataLength; i++) {

        let subjectData = {};
        if (inputValue != "") {
          subjectData = filteredData[i];
        } else {
          subjectData = selectedData[i];
        }

        const { professor: { user: {first_name, last_name}}, code, name, is_lab, credits,id } = subjectData;


        // Asignar valores correspondientes a las variables de estado para cada materia
        switch (i) {
          case jValue + 0:
            setSubjectname1(name);
            setSubjectcode1(code);
            setSubjectcredit1(credits);
            setSubjectlab1(is_lab);
            setProfessorname1(first_name);
            setProfessorlastname1(last_name);
            setSubjectid1(id);
            break;
          case jValue + 1:
            setSubjectname2(name);
            setSubjectcode2(code);
            setSubjectcredit2(credits);
            setSubjectlab2(is_lab);
            setProfessorname2(first_name);
            setProfessorlastname2(last_name);
            setSubjectid2(id);
            
            break;
          case jValue + 2:
            setSubjectname3(name);
            setSubjectcode3(code);
            setSubjectcredit3(credits);
            setSubjectlab3(is_lab);
            setProfessorname3(first_name);
            setProfessorlastname3(last_name);
            setSubjectid3(id);
            break;
          case jValue + 3:
            setSubjectname4(name);
            setSubjectcode4(code);
            setSubjectcredit4(credits);
            setSubjectlab4(is_lab);
            setProfessorname4(first_name);
            setProfessorlastname4(last_name);
            setSubjectid4(id);
            break;
          case jValue + 4:
            setSubjectname5(name);
            setSubjectcode5(code);
            setSubjectcredit5(credits);
            setSubjectlab5(is_lab);
            setProfessorname5(first_name);
            setProfessorlastname5(last_name);
            setSubjectid5(id);
            break;
          case jValue + 5:
            setSubjectname6(name);
            setSubjectcode6(code);
            setSubjectcredit6(credits);
            setSubjectlab6(is_lab);
            setProfessorname6(first_name);
            setProfessorlastname6(last_name);
            setSubjectid6(id);
            break;
          case jValue + 6:
            setSubjectname7(name);
            setSubjectcode7(code);
            setSubjectcredit7(credits);
            setSubjectlab7(is_lab);
            setProfessorname7(first_name);
            setProfessorlastname7(last_name);
            setSubjectid7(id);
            break;
          case jValue + 7:
            setSubjectname8(name);
            setSubjectcode8(code);
            setSubjectcredit8(credits);
            setSubjectlab8(is_lab);
            setProfessorname8(first_name);
            setProfessorlastname8(last_name);
            setSubjectid8(id);
            break;
          case jValue + 8:
            setSubjectname9(name);
            setSubjectcode9(code);
            setSubjectcredit9(credits);
            setSubjectlab9(is_lab);
            setProfessorname9(first_name);
            setProfessorlastname9(last_name);
            setSubjectid9(id);
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
      const { user: {  first_name, last_name } } = subjectData;
      setUsername(first_name);
      setUserlastname(last_name);

    }
    getProfile();
   

  }, [jValue, inputValue, buttonValue, subjectcodes]);
  
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
            <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid1}`) ? `${subjectid1}` : "0"} onChange={handleSelectChange} disabled={isChecked}>
            {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid1}`}>{professorname1}  {professorlastname1}</option>
        </select>
          </div>)}
        {(jValue + 1 < datalength) && (
          <div className={styles.g2}>
            <div className={styles.g2Child} />
            <div className={styles.ids202Aseguramiento1}>
              {subjectcode2} - {subjectname2}
            </div>
            <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid2}`) ? `${subjectid2}` : "0"} onChange={handleSelectChange} disabled={isChecked}>
            {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid2}`}>{professorname2}  {professorlastname2}</option>
            </select>
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
            <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid3}`) ? `${subjectid3}` : "0"} onChange={handleSelectChange} disabled={isChecked}>
            {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid3}`}>{professorname3}  {professorlastname3}</option>
            </select>
          </div>)}
        {(jValue + 3 < datalength) && (
          <div className={styles.g4}>
                        <div className={styles.ids202AseguramientoDeLaCContainer}>
              <div className={styles.ids202Aseguramiento2} >
                {subjectcode4} - {subjectname4}
              </div>
              
            </div>
              <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid4}`) ? `${subjectid4}` : "0"} onChange={handleSelectChange} disabled={isChecked} style={{ marginLeft: "-50px", fontSize: "20px" }}>
              {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid4}`}>{professorname4}  {professorlastname4}</option>
            </select>
            <div className={styles.seleccionada3}>Cr.{subjectcredit4} - {subjectlab4 ? 'Si' : 'No'} lab</div>

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
            <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid5}`) ? `${subjectid5}` : "0"} onChange={handleSelectChange} disabled={isChecked}>
            {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid5}`}>{professorname5}  {professorlastname5}</option>
            </select>
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
            <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid6}`) ? `${subjectid6}` : "0"} onChange={handleSelectChange} disabled={isChecked}>
            {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid6}`}>{professorname6}  {professorlastname6}</option>
            </select>
          </div>)}
        {(jValue + 6 < datalength) && (
          <div className={styles.g7}>
            <div className={styles.g3Child} />
            <div className={styles.ids202Aseguramiento6}>
              {subjectcode7} - {subjectname7}
            </div>
            <div className={styles.seleccionada4}>Cr.{subjectcredit7} - {subjectlab7 ? 'Si' : 'No'} lab</div>
            <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid7}`) ? `${subjectid7}` : "0"} onChange={handleSelectChange} disabled={isChecked}>
            {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid7}`}>{professorname7}  {professorlastname7}</option>
            </select>
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
            <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid8}`) ? `${subjectid8}` : "0"} onChange={handleSelectChange} disabled={isChecked}>
            {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid8}`}>{professorname8}  {professorlastname8}</option>
            </select>
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
            <select className={styles.selectSimple} value={selectedSubjects.includes(`${subjectid9}`) ? `${subjectid9}` : "0"} onChange={handleSelectChange} disabled={isChecked}>
            {isChecked ? null : <option value="0">Seleccionar...</option>}
            <option value={`${subjectid9}`}>{professorname9}  {professorlastname9}</option>
            </select>
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
        <input className={styles.boxunchecked} type="checkbox" checked={isChecked} onChange={handleChangeChecked}/>
      </div>
      {isChecked ? null :<div className={styles.cancelar } onClick={handleCancelButtonClick}>CANCELAR</div>}
      {isChecked ? null :<button className={styles.button} onClick={handleSaveButtonClick}>
      <div className={styles.text}>GUARDAR</div>
      </button>}
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
