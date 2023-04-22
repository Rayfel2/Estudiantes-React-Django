import styles from "./SeleccionEstudiante1.module.css";
import React, { useState, useEffect } from 'react';
import jsonData from "./datos.json";
import axios from 'axios';


const SeleccionEstudiante1 = () => {

      //id record
      const [recordid1, setRecordid1] = useState("");
      const [recordid2, setRecordid2] = useState("");
      const [recordid3, setRecordid3] = useState("");
      const [recordid4, setRecordid4] = useState("");
      const [recordid5, setRecordid5] = useState("");
      const [recordid6, setRecordid6] = useState("");
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
    

    const [username, setUsername] = useState("");
    const [userlastname, setUserlastname] = useState("");


    const [jValue, setJValue] = useState(0);
    const [datalength, setDatalength] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [buttonValue, setButtonValue] = useState(0);
    const [selectedId, setSelectedId] = useState(null);

    const [retiretotal, setRetiretotal] = useState(0);
    const [enrolledtotal, setEnrolledTotal] = useState(0);
    const [continuetotal, setContinueTotal] = useState(0);

    const [selectedRadio, setSelectedRadio] = useState(null);
    const [recordname, setRecordName] = useState(null);
    
      const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const [recordid, subjectname] = value.split('_');
        setRecordName(subjectname);
        setSelectedId(parseInt(recordid));
        setSelectedRadio(parseInt(recordid));
      };    
    
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
    
    function handleDeleteButtonClick() {
      
      if (selectedId === null) {
        
        window.alert('Debes seleccionar una asignatura');
        return;
      }
        // Show confirmation messagebox
  const confirmed = window.confirm(`¿Está seguro de que desea retirar la materia ${recordname}?`);

  if (confirmed) {
      setSelectedId(null);
      setSelectedRadio(null);
      axios.delete(`http://localhost:8000/api/v1/subject-cycles/${selectedId}/retire/`, config)
      
        .then(response => {
          
          window.alert('La materia se retiro correctamente');
          setButtonValue(buttonValue + 1);
        })
        .catch(error => {
          window.alert ('Ocurrio un error al retirar la materia');
          console.error('Ocurrió un error al eliminar el recurso:', error);
        })
      }
    }

  
    useEffect(() => {
    

      async function getSubjects() {


        const { data }  = await axios.get(
          'http://localhost:8000/api/v1/students/profile/grades/',
          config
        );
        const retireData = data.filter (item => item.final_grade_letter != "R" )
        const filteredData = retireData.filter(item => item.subject.code.startsWith(inputValue.toUpperCase()));
        setRetiretotal(data.length - retireData.length);
        setEnrolledTotal(data.length);
        setContinueTotal(retireData.length);

        let DataLength = {};
          if (inputValue != "") {
            DataLength = filteredData.length;
          } else {
            DataLength = retireData.length;
          }
        setDatalength(DataLength);
        
        for (let i = jValue; i < DataLength; i++) {

          let subjectData = {};
          if (inputValue != "") {
            subjectData = filteredData[i];
          } else {
            subjectData = retireData[i];
          }

          const { id, subject: {code, name, is_lab, credits}} = subjectData;


          // Asignar valores correspondientes a las variables de estado para cada materia
          switch (i) {
            case jValue+0:
              setSubjectname1(name);
              setSubjectcode1(code);
              setSubjectcredit1(credits);
              setSubjectlab1(is_lab);
              setRecordid1(id);
              break;
            case jValue+1:
              setSubjectname2(name);
              setSubjectcode2(code);
              setSubjectcredit2(credits);
              setSubjectlab2(is_lab);
              setRecordid2(id);
              break;
            case jValue+2:
              setSubjectname3(name);
              setSubjectcode3(code);
              setSubjectcredit3(credits);
              setSubjectlab3(is_lab);
              setRecordid3(id);
              break;
            case jValue+3:
              setSubjectname4(name);
              setSubjectcode4(code);
              setSubjectcredit4(credits);
              setSubjectlab4(is_lab);
              setRecordid4(id);
              break;
            case jValue+4:
              setSubjectname5(name);
              setSubjectcode5(code);
              setSubjectcredit5(credits);
              setSubjectlab5(is_lab);
              setRecordid5(id);
              break;
              case jValue+5:
                setSubjectname6(name);
                setSubjectcode6(code);
                setSubjectcredit6(credits);
                setSubjectlab6(is_lab);
                setRecordid6(id);
                break;
            default:
              break;
          }
          }
        

      }
      getSubjects();

      async function getProfile() {
      const { data }  = await axios.get(
        'http://localhost:8000/api/v1/students/profile/',
        config
      );
      const subjectData = data;
      const { career, user: {id, first_name, last_name}} = subjectData;
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
          <div className={styles.tanggalanParent}>
            <div className={styles.tanggalan}>
              <div className={styles.tanggalanChild} />
              <div className={styles.marzo202023}>Marzo 20 2023 . 09:00 AM</div>
            </div>
            <button className={styles.rectangleParent}>
              <div className={styles.groupChild} />
            </button>
          </div>
        </div>
        <section className={styles.searchBar1}>
          <div className={styles.searchBarChild} />
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleChange}
          />
        </section>
        <b className={styles.retiroDeMaterias}>Retiro de materias</b>
        <div className={styles.cancelar}></div>
        <button className={styles.button}  onClick={handleDeleteButtonClick}>
          <div className={styles.text}>RETIRAR</div>
        </button>
        <section className={styles.weather}>
          <div className={styles.rectangle} />
          <b className={styles.b}>{enrolledtotal}</b>
          <div className={styles.sunny}>Inscritas</div>
        </section>
        <div className={styles.weather1}>
          <div className={styles.rectangle} />
          <h1 className={styles.h1}>{retiretotal}</h1>
          <div className={styles.sunny}>Retiradas</div>
        </div>
        <section className={styles.weather2}>
          <div className={styles.rectangle} />
          <h1 className={styles.h1}>{continuetotal}</h1>
          <div className={styles.sunny2}>Continua</div>
        </section>
        <div className={styles.vectorParent}>
          <img className={styles.groupInner} alt="" src="/rectangle-2785.svg" />
          <div className={styles.parent}>
          {(jValue+0 < datalength) && (
            <div className={styles.div}>
            
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.div1}>{subjectcredit1}</div>
                <div className={styles.div2}>{subjectlab1? 'Si':'No'}</div>
                <div className={styles.ids202Aseguramiento}>
                  {subjectcode1} - {subjectname1}
                </div>
              </div> 
              <input className={styles.boxunchecked} type="radio"   name="radio" value={`${recordid1}_${subjectname1}`} checked={selectedRadio === recordid1} onChange={handleCheckboxChange} />
            </div>)}
            {(jValue+1 < datalength) && (
            <div className={styles.div3}>
              <div className={styles.child} />
              <div className={styles.ids202Aseguramiento}>
                {subjectcode2} - {subjectname2}
              </div>
              <div className={styles.div4}>{subjectcredit2}</div>
              <div className={styles.div5}>{subjectlab2? 'Si':'No'}</div>
              <input className={styles.boxunchecked1} type="radio"   name="radio" value={`${recordid2}_${subjectname2}`} checked={selectedRadio === recordid2} onChange={handleCheckboxChange} />
            </div>)}
            {(jValue+2 < datalength) && (
            <div className={styles.div6}>
              <div className={styles.rectangleDiv} />
              <div className={styles.ids202AseguramientoDeLaCParent}>
                <div className={styles.ids202Aseguramiento2}>
                 {subjectcode3} - {subjectname3}
                </div>
                <div className={styles.div7}>{subjectcredit3}</div>
                <div className={styles.div8}>{subjectlab3? 'Si':'No'}</div>
              </div>
              <input className={styles.boxunchecked4} type="radio"   name="radio" value={`${recordid3}_${subjectname3}`} checked={selectedRadio === recordid3} onChange={handleCheckboxChange}/>
            </div>)}
            {(jValue+3 < datalength) && (
            <div className={styles.div9}>
              <div className={styles.inner} />
              <div className={styles.ids202AseguramientoDeLaCWrapper}>
                <div className={styles.ids202Aseguramiento3}>
                  {subjectcode4} - {subjectname4}
                </div>
              </div>
              <div className={styles.div10}>{subjectlab4? 'Si':'No'}</div>
              <div className={styles.div11}>{subjectcredit4}</div>
              <input className={styles.boxunchecked2} type="radio"   name="radio" value={`${recordid4}_${subjectname4}`} checked={selectedRadio === recordid4} onChange={handleCheckboxChange} />
            </div> )}
            {(jValue+4 < datalength) && (
            <div className={styles.div12}>
              <div className={styles.rectangleDiv} />
              <div className={styles.ids202AseguramientoDeLaCParent}>
                <div className={styles.ids202Aseguramiento2}>
                  {subjectcode5} - {subjectname5}
                </div>
                <div className={styles.div13}>{subjectlab5? 'Si':'No'}</div>
                <div className={styles.div14}>{subjectcredit5}</div>
              </div>
              <input className={styles.boxunchecked5} type="radio"   name="radio" value={`${recordid5}_${subjectname5}`} checked={selectedRadio === recordid5} onChange={handleCheckboxChange}/>
            </div>)}
            {(jValue+5 < datalength) && (
            <div className={styles.div15}>
              <div className={styles.child2} />
              <div className={styles.ids202Aseguramiento5}>
                {subjectcode6} - {subjectname6}
              </div>
              <div className={styles.div16}>{subjectlab6? 'Si':'No'}</div>
              <div className={styles.div17}>{subjectcredit6}</div>
              <input className={styles.boxunchecked3} type="radio"   name="radio" value={`${recordid6}_${subjectname6}`} checked={selectedRadio === recordid6} onChange={handleCheckboxChange}/>
            </div> )}
            <b className={styles.retiroDeMateria}>Retiro de materia</b>
          </div>
          <div className={styles.creditos}>Creditos</div>
          <div className={styles.lab}> Lab?</div>
          <div className={styles.retirar}>Retirar</div>
          {(datalength > (jValue+6)) && (
        <b className={styles.siguiente} onClick={handleNextClick}>
        {'Siguiente >'}
      </b>
        )}
      {jValue > 0 && (
        <b className={styles.anterior} onClick={handlePrevClick}>
          {'< Anterior'}
        </b>
      )}
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
              <a href="/"><b className={styles.signOut}>Sign Out</b></a>
              <img
                className={styles.vuesaxlinearlogoutIcon}
                alt=""
                src="/vuesaxlinearlogout1.svg"
              />
            </div>
            <div className={styles.calificacionesWrapper}>
              <a href="/calificaciones-estudiante"><b className={styles.calificaciones}>Calificaciones</b></a>
            </div>
            <img className={styles.groupIcon} alt="" src="/group-341661.svg" />
            <div className={styles.menuPrincipal1}>MENU PRINCIPAL</div>
            <div className={styles.support}>SUPPORT</div>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.seleccionParent}>
            <a href="/seleccion-estudiante2"><b className={styles.seleccion}>{`Seleccion `}</b></a>
            <img
              className={styles.vuesaxlinearuserCirlceAddIcon}
              alt=""
              src="/vuesaxlinearusercirlceadd1.svg"
            />
          </div>
          <a href="/ver-perfil"><div className={styles.ellipseParent}>
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
            <img className={styles.groupChild1} alt="" src="/group-34146.svg" />
            <a href="/seleccion-estudiante1"><b className={styles.retiro}>Retiro</b></a>
          </div>
          <div className={styles.dashboardParent}>
            <a href="/dashboard-estudiante2"><b className={styles.dashboard}>Dashboard</b></a>
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
  