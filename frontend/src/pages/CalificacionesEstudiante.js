import styles from "./CalificacionesEstudiante.module.css";
import { PDFstyles } from './PDFstyles';
import React, { useState, useEffect } from "react";
import jsonData from "./datos.json";
import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer'; 


//Diseño del PDF
const PDFDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={PDFstyles.page}>
      {data.map((subjectData, i) => (
        <View style={PDFstyles.section} key={i}>
          <Text style={PDFstyles.title}>{subjectData.subject.name}</Text>
          <Text style={PDFstyles.subtitle}>Midterm Grade: {subjectData.midterm_grade}</Text>
          <Text style={PDFstyles.subtitle}>Final Grade: {subjectData.final_grade}</Text>
          <Text style={PDFstyles.subtitle}>Final Grade Letter: {subjectData.final_grade_letter}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

  const CalificacionesEstudiante = () => {


    const { access } = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    };      

    // Generar documento PDF
  const handleDownload = async () => {
    try {

      const { data } = await axios.get('http://localhost:8000/api/v1/students/profile/grades/', config);

      const pdfBlob = await pdf(<PDFDocument data={data} />).toBlob();
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Reporte Calificaciones.pdf';
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };
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

    const [username, setUsername] = useState("");
    const [userlastname, setUserlastname] = useState("");
    const [usercareer, setUsercareer] = useState("");
    const [userid, setUserid] = useState("");
    const [totalcredits, setTotalCredits] = useState("");
    const [active, setActive] = useState('');
    const [generalIndex, setGeneralIndex] = useState("");
    const [quarterlyIndex, setQuarterlyIndex] = useState("");

    const [jValue, setJValue] = useState(0);
    const [datalength, setDatalength] = useState(0);
    const [inputValue, setInputValue] = useState("");


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

  
    useEffect(() => {
      
      setActive(access);

      async function getSubjects() {


        const { data }  = await axios.get(
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

          const { midterm_grade, final_grade, final_grade_letter, subject: {code, name, is_lab, credits}, cycle:{last_gpa, overall_gpa}} = subjectData;

          setGeneralIndex(last_gpa); // indice general
          setQuarterlyIndex(overall_gpa); // Indice del trimestre

          // Asignar valores correspondientes a las variables de estado para cada materia
          switch (i) {
            case jValue+0:
              setMidterm1(midterm_grade);
              setFinalgrade1(final_grade);
              setLettergrade1(final_grade_letter);

              setSubjectname1(name);
              setSubjectcode1(code);
              setSubjectcredit1(credits);
              setSubjectlab1(is_lab);
              break;
            case jValue+1:
              console.log(code);
              setMidterm2(midterm_grade);
              setFinalgrade2(final_grade);
              setLettergrade2(final_grade_letter);

              setSubjectname2(name);
              setSubjectcode2(code);
              setSubjectcredit2(credits);
              setSubjectlab2(is_lab);
              break;
            case jValue+2:
              setMidterm3(midterm_grade);
              setFinalgrade3(final_grade);
              setLettergrade3(final_grade_letter);

              setSubjectname3(name);
              setSubjectcode3(code);
              setSubjectcredit3(credits);
              setSubjectlab3(is_lab);
              break;
            case jValue+3:
              setMidterm4(midterm_grade);
              setFinalgrade4(final_grade);
              setLettergrade4(final_grade_letter);

              setSubjectname4(name);
              setSubjectcode4(code);
              setSubjectcredit4(credits);
              setSubjectlab4(is_lab);
              break;
            case jValue+4:
              setMidterm5(midterm_grade);
              setFinalgrade5(final_grade);
              setLettergrade5(final_grade_letter);

              setSubjectname5(name);
              setSubjectcode5(code);
              setSubjectcredit5(credits);
              setSubjectlab5(is_lab);
              break;
              case jValue+5:
                setMidterm6(midterm_grade);
                setFinalgrade6(final_grade);
                setLettergrade6(final_grade_letter);

                setSubjectname6(name);
                setSubjectcode6(code);
                setSubjectcredit6(credits);
                setSubjectlab6(is_lab);
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
    setUsercareer(career);
    setUserid(id);
  

    } 
      getProfile();

      async function getRecord() {
        const { data }  = await axios.get(
          'http://localhost:8000/api/v1/students/profile/academic-record/',
          config
        );
/*        const subjectData = data;
        const { taken_credits} = subjectData; */
        const total = data.reduce((accumulator, record) => accumulator + record.taken_credits, 0);
        setTotalCredits(total);

  
      } 
        getRecord();
      
    }, [jValue, inputValue]);

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
            <img className={styles.groupChild} alt="" src="/group-34160.svg" />
          </div>
        </div>
        
        <div className={styles.g1Parent}>
        {(jValue+0 < datalength) && (
          <div className={styles.g1}>
            <div className={styles.rectangle} />
            <img className={styles.backgroundIcon} alt="" src="/background.svg" />
            <p className={styles.code1}>{subjectcode1}</p>
            <div className={styles.materia1}>{subjectname1}</div>
            <div className={styles.puntos}>Laboratorio</div>
            <b className={styles.b}>{subjectlab1? 'Si':'No'} </b>
            <div className={styles.calificacion}>Calificacion</div>
            <b className={styles.na}>{lettergrade1 || 'N/A'}</b>
            <div className={styles.notaFinal}>Nota final</div>
            <b className={styles.b1}>{finalgrade1}</b>
            <div className={styles.medioTermino}>Medio termino</div>
            <b className={styles.b2}>{midterm1}</b>
            <div className={styles.creditos}>Creditos</div>
            <b className={styles.b3}>{subjectcredit1}</b>
          </div>
        )}
        {(jValue+1 < datalength) && (
          
          <div className={styles.g2}>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background1.svg"
            />
            <p className={styles.code2}>{subjectcode2}</p>
            <div className={styles.materia2}>{subjectname2}</div>
            <div className={styles.creditos1}>Creditos</div>
            <b className={styles.b4}>{subjectcredit2}</b>
            <div className={styles.medioTermino1}>Medio termino</div>
            <b className={styles.b5}>{midterm2}</b>
            <div className={styles.notaFinal1}>Nota final</div>
            <b className={styles.b6}>{finalgrade2}</b>
            <div className={styles.calificacion1}>Calificacion</div>
            <b className={styles.na1}>{lettergrade2 || 'N/A'}</b>
            <div className={styles.puntos1}>Laboratorio</div>
            <b className={styles.b7}>{subjectlab2? 'Si':'No'} </b>
          </div>
          )}
          {(jValue+2 < datalength) && (
          <div className={styles.g3}>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background2.svg"
            />
            <p className={styles.code2}>{subjectcode3}</p>
            <div className={styles.materia2}>{subjectname3}</div>
            <div className={styles.puntos1}>Laboratorio</div>
            <b className={styles.b7}>{subjectlab3? 'Si':'No'} </b>
            <div className={styles.calificacion1}>Calificacion</div>
            <b className={styles.na2}>{lettergrade3 || 'N/A'}</b>
            <div className={styles.notaFinal1}>Nota final</div>
            <b className={styles.b6}>{finalgrade3}</b>
            <div className={styles.medioTermino1}>Medio termino</div>
            <b className={styles.b5}>{midterm3}</b>
            <div className={styles.creditos1}>Creditos</div>
            <b className={styles.b4}>{subjectcredit3}</b>
          </div>
          )}
          {(jValue+3 < datalength) && (
          <div className={styles.g4}>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background3.svg"
            />
            <p className={styles.code2}>{subjectcode4}</p>
            <div className={styles.materia2}>{subjectname4}</div>
            <div className={styles.puntos1}>Laboratorio</div>
            <b className={styles.b7}>{subjectlab4? 'Si':'No'} </b>
            <div className={styles.calificacion1}>Calificacion</div>
            <b className={styles.na1}>{lettergrade4 || 'N/A'}</b>
            <div className={styles.notaFinal1}>Nota final</div>
            <b className={styles.b6}>{finalgrade4}</b>
            <div className={styles.medioTermino1}>Medio termino</div>
            <b className={styles.b5}>{midterm4}</b>
            <div className={styles.creditos1}>Creditos</div>
            <b className={styles.b4}>{subjectcredit4}</b>
          </div>
  )}
  {(jValue+4 < datalength) && (
          <div className={styles.g5}>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background3.svg"
            />
            <p className={styles.code2}>{subjectcode5}</p>
            <div className={styles.materia2}>{subjectname5}</div>
            <div className={styles.puntos1}>Laboratorio</div>
            <b className={styles.b7}>{subjectlab5? 'Si':'No'} </b>
            <div className={styles.calificacion1}>Calificacion</div>
            <b className={styles.na1}>{lettergrade5 || 'N/A'}</b>
            <div className={styles.notaFinal1}>Nota final</div>
            <b className={styles.b6}>{finalgrade5}</b>
            <div className={styles.medioTermino1}>Medio termino</div>
            <b className={styles.b5}>{midterm5}</b>
            <div className={styles.creditos1}>Creditos</div>
            <b className={styles.b4}>{subjectcredit5}</b>
          </div>
  )}
  {(jValue+5 < datalength) && (
          <div className={styles.g6}>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background3.svg"
            />
            <p className={styles.code2}>{subjectcode6}</p>
            <div className={styles.materia2}>{subjectname6}</div>
            <div className={styles.puntos1}>Laboratorio</div>
            <b className={styles.b7}>{subjectlab6? 'Si':'No'} </b>
            <div className={styles.calificacion1}>Calificacion</div>
            <b className={styles.na1}>{lettergrade6 || 'N/A'}</b>
            <div className={styles.notaFinal1}>Nota final</div>
            <b className={styles.b6}>{finalgrade6}</b>
            <div className={styles.medioTermino1}>Medio termino</div>
            <b className={styles.b5}>{midterm6}</b>
            <div className={styles.creditos1}>Creditos</div>
            <b className={styles.b4}>{subjectcredit6}</b>
          </div>
  )}
            <input
            className={styles.selectSimple}
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleChange}
          />
          <div className={styles.trimestre3}>Trimestre 3</div>
          <button className={styles.rectangleParent} onClick={handleDownload}>
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
        <div className={styles.weather}>
          <div className={styles.rectangle1} />
          <b className={styles.b24}>{quarterlyIndex}</b>
          <div className={styles.sunny}>Indice Trimestral</div>
        </div>
        <div className={styles.weather1}>
          <div className={styles.rectangle2} />
          <div className={styles.sunny1}>
            <p className={styles.blankLine}>
              <span>
                <span className={styles.id}>{`ID: `}</span>
                <span>{userid}</span>
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
                <span>{username} {userlastname}</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span>
                <span className={styles.id}>Carrera:</span>
                <span> {usercareer}</span>
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
              <span className={styles.activo}>{active === '' ? 'NO ACTIVO' : 'ACTIVO'}</span>
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
                <span> {totalcredits}</span>
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
          <div className={styles.rectangle1} />
          <b className={styles.b24}>{generalIndex}</b>
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
            <a href="/"><b className={styles.signOut}>Sign Out</b></a>
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
              src="/vuesaxlineardocumenttext2.svg"
            />
            <a href="/seleccion-estudiante1"><b className={styles.retiro}>Retiro</b></a>
          </div>
          <div className={styles.seleccionParent}>
          <a href="/seleccion-estudiante2"><b className={styles.seleccion}>{`Seleccion `}</b></a>
            <img
              className={styles.vuesaxlinearuserCirlceAddIcon}
              alt=""
              src="/vuesaxlinearusercirlceadd3.svg"
            />
          </div>
          <a href="/ver-perfil"><div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" />
            <div className={styles.davidFelixParent}>
            <h2 className={styles.davidFelix}>{username} {userlastname}</h2>
              <div className={styles.estudiante}>Estudiante</div>
            </div>
          </div></a>
          <h1 className={styles.estudiante1}>ESTUDIANTE</h1>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <a href="/calificaciones-estudiante"><h1 className={styles.calificaciones1}>Calificaciones</h1></a>
            <img
              className={styles.vuesaxlineartaskSquareIcon}
              alt=""
              src="/vuesaxlineartasksquare.svg"
            />
          </div>
          <div className={styles.dashboardParent}>
          <a href="/dashboard-estudiante2"><b className={styles.dashboard}>Dashboard</b> </a>
            <img
              className={styles.vuesaxlinearhome2Icon}
              alt=""
              src="/vuesaxlinearhome21.svg"
            />
          </div>
        </div>
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
    );
  };
  
  export default CalificacionesEstudiante;