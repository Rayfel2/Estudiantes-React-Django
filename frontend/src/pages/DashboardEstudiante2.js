import styles from "./DashboardEstudiante2.module.css";
import { PDFstyles } from './PDFstyles';
import React, { useState, useEffect } from 'react';
import jsonData from "./datos.json";
import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer'; 
import { Bar, Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
// Diagrama de barras
var baroptions = {
  maintainAspectRatio: false, // Desactivar la relación de aspecto fija
  plugins: {
    legend: {
      display: false
    },
  responsive: true,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 100,
        },
        x: {
            ticks: { color: 'rgba(1,126,250)'}
        }
    }
}
};

var mapbarchart = {
    labels: '',
    datasets: [
        {
            label: null,
            data: null,
            backgroundColor: null
        }
    ]
};
// Diagrama de lineas


var maplineschart = {
  labels: null,
  datasets: [ // Cada una de las líneas del gráfico
      {
          label: null,
          data: null,
          tension: null,
          fill : null,
          borderColor: null,
          backgroundColor: null,
          pointRadius: null,
          pointBorderColor: null,
          pointBackgroundColor: null,
      }
  ],
};

var lineoptions = {
  plugins: {
    legend: {
      display: false // Ocultar la leyenda
    }
  },
  scales : {
      y : {
          min : 0,
          max : 4
      },
      x: {
          ticks: { color: 'rgba(1,126,250)'}
      }
  }
};

//Diseño del PDF
const PDFDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={PDFstyles.page}>
      {data.map((subjectData, i) => (
        <View style={PDFstyles.section} key={i}>
          <Text style={PDFstyles.title}>{subjectData.subject.name}</Text>
          <Text style={PDFstyles.subtitle}>Profesor: {subjectData.subject.professor.user.first_name} {subjectData.subject.professor.user.last_name}</Text>
          <Text style={PDFstyles.subtitle}>Creditos: {subjectData.subject.credits}</Text>
          <Text style={PDFstyles.subtitle}>Medio Termino: {subjectData.midterm_grade}</Text>
          <Text style={PDFstyles.subtitle}>Calificacion final: {subjectData.final_grade}</Text>
          <Text style={PDFstyles.subtitle}>Letra de la calificacion final: {subjectData.final_grade_letter}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

const DashboardEstudiante2 = () => {

        
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

          // Crear URL local y descargar archivo
    const pdfBlob = await pdf(<PDFDocument data={data} />).toBlob(); //se genera el documento
    const url = URL.createObjectURL(pdfBlob); // crear URL temporal con los datos del documento
    const link = document.createElement('a'); // crea un a(un link)
    link.href = url; // se le asigna el URL al link
    link.download = 'reporte_Academico.pdf'; //Nombre del documento
    document.body.appendChild(link); // Se añade el enlace como hijo del elemento body
    link.click(); // Se simula que el usuario hizo clic en el enlace 
    } catch (error) {
      console.error(error);
    }
  };


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

    const [username, setUsername] = useState("");
    const [userlastname, setUserlastname] = useState("");
    const [totalcredits, setTotalCredits] = useState("");
    const [generalIndex, setGeneralIndex] = useState("");
    const [quarterlyIndex, setQuarterlyIndex] = useState("");
    const [totalquarter, setTotalQuarter] = useState("");

    const [jValue, setJValue] = useState(0);
    const [datalength, setDatalength] = useState(0);

   // const [chart, setChart] = useState({});
   const [barchart, setBarChart] = useState(mapbarchart);
   const [linechart, setLinesChart] = useState(maplineschart);
   



    function handleNextClick() {
      setJValue(jValue + 5);
    }
  
    function handlePrevClick() {
      setJValue(jValue - 5);
    }

  
    useEffect(() => {
 

      async function getSubjects() {


        const { data }  = await axios.get(
          'http://localhost:8000/api/v1/students/profile/grades/',
          config
        );


            const DataLength = data.length;
        setDatalength(DataLength);
        
        for (let i = jValue; i < DataLength; i++) {
          const subjectData = data[i];

          const { midterm_grade, final_grade, final_grade_letter, subject: {name}, cycle:{last_gpa, overall_gpa}} = subjectData;
          
          setGeneralIndex(last_gpa); // indice general
          setQuarterlyIndex(overall_gpa); // Indice del trimestre

          // Asignar valores correspondientes a las variables de estado para cada materia
          switch (i) {
            case jValue+0:
              setMidterm1(midterm_grade);
              setFinalgrade1(final_grade);
              setLettergrade1(final_grade_letter);
              setSubjectname1(name);
              break;
            case jValue+1:
              setMidterm2(midterm_grade);
              setFinalgrade2(final_grade);
              setLettergrade2(final_grade_letter);
              setSubjectname2(name);
              break;
            case jValue+2:
              setMidterm3(midterm_grade);
              setFinalgrade3(final_grade);
              setLettergrade3(final_grade_letter);
              setSubjectname3(name);
              break;
            case jValue+3:
              setMidterm4(midterm_grade);
              setFinalgrade4(final_grade);
              setLettergrade4(final_grade_letter);
              setSubjectname4(name);
              break;
            case jValue+4:
              setMidterm5(midterm_grade);
              setFinalgrade5(final_grade);
              setLettergrade5(final_grade_letter);
              setSubjectname5(name);
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
      const { user: {first_name, last_name}} = subjectData;
    setUsername(first_name);
    setUserlastname(last_name);
  

    } 
      getProfile();

      async function getRecord() {
        const { data }  = await axios.get(
          'http://localhost:8000/api/v1/students/profile/academic-record/',
          config
        );
        const total = data.reduce((accumulator, record) => accumulator + record.taken_credits, 0);
        setTotalCredits(total);
        setTotalQuarter(data.length);
        const index = [0, ...data.map(item => item.overall_gpa)];
        setLinesChart({
          labels: [...Array(30).keys()].map((n) => n),
          datasets: [ // Cada una de las líneas del gráfico
              {
                  label: '',
                  data: index,
                  tension: 0.5,
                  fill : true,
                  borderColor: 'rgba(1,126,250)',
                  backgroundColor: 'rgba(1,126,250, 0.5)',
                  pointRadius: 5,
                  pointBorderColor: 'rgba(1,126,250)',
                  pointBackgroundColor: 'rgba(1,126,250)',
              },
          ],
        });
      

  
      } 
       getRecord();
         async function fetchData() {
          try {
            const response = await axios.get('http://localhost:8000/api/v1/students/profile/grades/', config);
            const grades = response.data;
            const labels = grades.map(item => item.subject.code)//.flatMap(value => [value, value, value, value, value, value, value, value, value, value]);
            const values = grades.map(item => item.final_grade)//.flatMap(value => [value, value, value, value, value, value, value, value, value, value]);
            setBarChart({
              labels: labels,
              datasets: [{
                label: null,
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              }],
            });
          } catch (error) {
            console.error('Error al cargar los datos:', error);
          }
        }
    
        fetchData();

    }, [jValue]);
   
  return (
    
    <div className={styles.dashboardEstudiante2}>
           
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
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
        <button className={styles.menuPrincipalItem} />
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
          <a href="/"><b className={styles.signOut}>Sign Out</b></a>
            <img
              className={styles.vuesaxlinearlogoutIcon}
              alt=""
              src="/vuesaxlinearlogout.svg"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.dashboardParent}>
            <a href="/dashboard-estudiante2"> <h1 className={styles.dashboard}>Dashboard</h1> </a>
              <img
                className={styles.vuesaxlinearhome2Icon}
                alt=""
                src="/vuesaxlinearhome2.svg"
              />
            </div>
          </div>
          <div className={styles.calificacionesWrapper}>
          <a href="/calificaciones-estudiante"><b className={styles.calificaciones}>Calificaciones</b> </a>
          </div>
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
          <a href="/seleccion-estudiante1"><b className={styles.retiro}>Retiro</b></a>
        </div>
        <div className={styles.seleccionParent}>
        <a href="/seleccion-estudiante2"><b className={styles.seleccion}>{`Seleccion `}</b> </a>
          <img
            className={styles.vuesaxlinearuserCirlceAddIcon}
            alt=""
            src="/vuesaxlinearusercirlceadd.svg"
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
      </div>
      <div className={styles.dashboardButtom}>
        <section className={styles.chart37}>
          <div className={styles.overview}>
            <b className={styles.trophy}>{generalIndex}</b>
            <div className={styles.trophy1}>
              <span className={styles.trophyTxt}>
                <p className={styles.indice}>{`Indice `}</p>
                <p className={styles.indice}>general</p>
              </span>
            </div>
          </div>
        </section>
        <div className={styles.chart36}>
          <div className={styles.overview}>
            <b className={styles.trophy2}>{datalength}</b>
            <div className={styles.trophy3}>
              <span className={styles.trophyTxt}>
                <p className={styles.indice}>{`Asignaturas `}</p>
                <p className={styles.indice}>{`cursadas `}</p>
                <p className={styles.indice}>de 110</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.chart38}>
          <div className={styles.overview}>
            <b className={styles.trophy4}>{totalquarter}</b>
            <div className={styles.trophy5}>
              <p className={styles.indice}>Trimestres</p>
              <p className={styles.indice}>{`cursados `}</p>
              <p className={styles.indice}>de 21</p>
            </div>
          </div>
        </div>
        <section className={styles.chart39}>
          <div className={styles.overview}>
            <b className={styles.trophy6}>{totalcredits}</b>
            <div className={styles.trophy7}>
              <p className={styles.indice}>Creditos</p>
              <p className={styles.indice}>aprobados</p>
              <p className={styles.indice}>de 279</p>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.dashboard1}>
        <div className={styles.dashboard2}>
          <div className={styles.dashboardChild} />
          <a href="calificaciones-estudiante"><button className={styles.verDetallesParent} autoFocus>
            <div className={styles.verDetalles}>Ver detalles</div>
            <img
              className={styles.bxbxsChevronRightIcon}
              alt=""
              src="/bxbxschevronright.svg"
            />
          </button></a>
          <div className={styles.dashboardItem} />
          <div className={styles.indiceAcademicoParent}>
            <b className={styles.indiceAcademico}>Indice Academico</b>
            <img className={styles.groupChild1} alt="" src="/group-136.svg" />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <b className={styles.asignaturasSeleccionadas}>
              Asignaturas seleccionadas
            </b>
            {(jValue+0 < datalength) && (
            <div className={styles.parent}>
              <b className={styles.b}>{finalgrade1}</b>
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
            
            </div> )}
            {(jValue+1 < datalength) && (
            <div className={styles.group}>
              <b className={styles.b1}>{finalgrade2}</b>
              <b className={styles.b7}>{midterm2}</b>
              <div className={styles.labBasesDeWrapper}>
                <div className={styles.labBasesDe}>{subjectname2}</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-681.svg"
                />
                <b className={styles.b8}>{lettergrade2}</b>
              </div>
            </div>)}
            {(jValue+2 < datalength) && (
            <div className={styles.container}>
              <b className={styles.b2}>{finalgrade3}</b>
              <b className={styles.b9}>{midterm3}</b>
              <div className={styles.algebraYGeoWrapper}>
                <div className={styles.algebraYGeo}>{subjectname3}</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-682.svg"
                />
                <b className={styles.a}>{lettergrade3}</b>
              </div>
            </div> )}
            {(jValue+3 < datalength) && (
            <div className={styles.parent1}>
              <b className={styles.b3}>{finalgrade4}</b>
              <b className={styles.b10}>{midterm4}</b>
              <div className={styles.ciudadaniaYWrapper}>
                <div className={styles.ciudadaniaY}>{subjectname4}</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-683.svg"
                />
                <b className={styles.a1}>{lettergrade4}</b>
              </div>
            </div> )}
            {(jValue+4 < datalength) && (
            <div className={styles.parent2}>
                          <b className={styles.b4}>{finalgrade5}</b>
              <b className={styles.b11}>{midterm5}</b>
              <div className={styles.electivaMedioWrapper}>
                <div className={styles.electivaMedio}>{subjectname5}</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/ellipse-684.svg"
                />
                <b className={styles.a1}>{lettergrade5}</b>
              </div>
            </div>)}
            <div className={styles.trophy8}>Calif</div>
            <div className={styles.trophy9}>Medio termino</div>
          </div>


        </div>
        <div className={styles.rectangleWrapper3}>
        <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"500px"}}>
          <Line className={styles.reporteItem} data={linechart} options={lineoptions}/>
          </div>
          </div>

        <b className={styles.dashboard3}>Dashboard</b>
        {(datalength > (jValue+5)) && (
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
      <div className={styles.reporte}>

        <div className={styles.reporteChild} />
        <div className={styles.groupContainer}>
          <div className={styles.parent3}>
            <div className={styles.div}>{quarterlyIndex}</div>
            <div className={styles.indiceTrimestral}>Indice trimestral</div>
          </div>


            <div className={styles.groupChild7} />

            <div className={styles.rectangleWrapper2}>
          <Bar data={barchart} options={baroptions}/>
          </div>
        </div>
        <div className={styles.listItems}>
          <button className={styles.constructorOverflowMenu } onClick={handleDownload}>
            <div className={styles.textElementsTitle}>
              <p className={styles.download}>Download report</p>
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
                src="/arrow-right.svg"
              />
            </div>
          </div>
        </div>

       
      </div>

    </div>
  );
};

export default DashboardEstudiante2;
