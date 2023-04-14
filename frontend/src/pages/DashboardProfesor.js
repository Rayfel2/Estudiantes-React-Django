import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, SplitButton, Form } from "react-bootstrap";
import TableEditor from "../components/TableEditor";
import EditTable from "../components/EditTable";
import styles from "./DashboardProfesor.module.css";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const DashboardProfesor = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentChanges, setStudentChanges] = useState({});
  const [filtercode, setFilterCode] = useState(null);
  const [change, setChange] = useState(0);
   // const [selectedStudent, setSelectedStudent] = useState(null);


  const handleDropdownSelect = (event, item) => {
    event.preventDefault();
    if (item == null){
      setFilterCode(null);
    } else { 
    setFilterCode(item.code);}
    
  };


  function handleStudentSelect(student) {
    setSelectedStudent(student);
  }
  
 
  


  // Eliminado
  // const handleEditClick = (student) => {
  //   setSelectedStudent(student);
  // };

  const handleInputChange = (event, field) => {
    setStudentChanges({
      ...studentChanges,
      [selectedStudent.ide]: {
        ...studentChanges[selectedStudent.ide],
        [field]: parseFloat(event.target.value),
      },
    });
  };
  

  const handleRowClick = (index) => {
    if (selectedRowIndex === index) {
      setSelectedRowIndex(null);
    } else {
      setSelectedRowIndex(index);
    }
  };

  const handleEditClick = (student) => {
    handleStudentSelect(student);
    setSelectedStudent(student);
    setIsFormVisible(true);
 
  };
  function StudentRow(props) {
    const { student } = props;
    const updatedStudent = { ...student, ...props.studentChanges[student.ide] };
  
    return (
      <tr
        className={props.isSelected ? styles.selectedRow : ""}
        onClick={props.onClick}
      >
        <td>{updatedStudent.name}</td>
        <td>{updatedStudent.id}</td>
        <td>{updatedStudent.status}</td>
        <td>{updatedStudent.finalGrade}</td>
        <td>{updatedStudent.midTerm}</td>
        <td>
        <button
          className={styles.editButton}
          onClick={(event) => {
            event.stopPropagation();
            handleEditClick(student);
          }}
        >
          Editar
        </button>




        </td>
      </tr>
    );
  }
  const { access } = JSON.parse(localStorage.getItem('token'));
  const config = {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  };    

  const handleSave = async () => {
    setChange(change + 1);
    // Actualizar los datos del estudiante en el estado local
    const updatedStudents = students.map((student) =>
      student.ide === selectedStudent.ide ? { ...student, ...studentChanges[selectedStudent.ide] } : student
    );
    setStudents(updatedStudents);
    setIsFormVisible(false);
    setSelectedStudent(null);
    setStudentChanges({ ...studentChanges, [selectedStudent.ide]: studentChanges[selectedStudent.ide] });
  
    // Enviar la solicitud PUT a la API
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/v1/professor/subjects/${selectedStudent.ide}/grade/review`,
        {
          
          final_grade: selectedStudent.finalGrade,
          midterm_grade: selectedStudent.midTerm,
          
        },
        config,
        
      );
      
      console.log(data); // Imprimir la respuesta de la API en la consola
      window.alert("Calificacion guardada con exito")
    } catch (error) {
      window.alert("No se pudieron guardar los cambios")
      console.error(error); // Imprimir cualquier error en la consola
    }
    
  };
  
  
/*
  {
    "id": 0,
    "professor": {
      "id": 0,
      "user": {
        "id": 0,
        "document_type": 0,
        "document_no": "string",
        "first_name": "string",
        "last_name": "string",
        "username": "string",
        "email": "user@example.com",
        "birth_date": "2023-04-14"
      }
    },
    "code": "string",
    "name": "string",
    "is_lab": true,
    "credits": 10
  }
  */

  const [students, setStudents] = useState([]);
  const [codestudents, setCodeStudents] = useState([]);




 

useEffect(() => {
 

  async function getSubjects() {
  try {

    let id = 1;
    let success = true;
    let allData = []; // Arreglo vacío para almacenar todos los registros
    while (success) {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/v1/professor/subjects/${id}/students/`,
          config
        );
        // Si no hubo error, se llegó hasta aquí, por lo que la solicitud fue exitosa
        console.log(`Solicitud exitosa con el ID ${id}`);
        if (!data || data.length === 0) { // verifica si data está vacío o no
          success = false;
        } else {
          allData.push(...data); // agrega los datos al arreglo de datos
          id++;
        }
      } catch (error) {
        console.log(`Error al intentar con el ID ${id}`);
        success = false;
      }
    }
    let filteredData;
    if (filtercode != null) {
      filteredData = allData.filter(item => item.subject.code.startsWith(filtercode));
    } else {
      filteredData = allData;
    }
    
    const formattedStudents = filteredData.map((student) => {
      const { first_name, last_name, document_no } = student.cycle.student.user;
      const { final_grade_letter, final_grade, midterm_grade, id } = student;
      const { code } = student.subject;
      return {
        name: `${first_name} ${last_name}`,
        id: document_no,
        status: final_grade_letter,
        finalGrade: final_grade,
        midTerm: midterm_grade,
        ide: id,
        code: code,
      };
    });
      const codeStudents = filteredData.map((student) => {
        const { code } = student.subject;
      return {
        code: code,
      };
    });
    setStudents(formattedStudents);
    setCodeStudents(codeStudents);
  } catch (error) {
    console.error(error);
  }
  }
  getSubjects();
}, [filtercode, change]);
  return (
    <div className={styles.dashboardProfesor}>
      <img className={styles.headerIcon} alt="" src="/header.svg" />
      <div className={styles.vectorParent}>
        <img className={styles.vectorParent} alt="" src="/rectangle-2769.svg" />
        <div className={styles.frameItem} />
        <b className={styles.estudiante}>ESTUDIANTE</b>
        <a href="/ver-perfil">
        <div className={styles.ellipseParent}>
          <img className={styles.frameInner} alt="" />
          <div className={styles.davidFelixParent}>
            <b className={styles.davidFelix}>David Felix</b>
            <div className={styles.profesor}>Profesor</div>
          </div>
        </div> </a>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.iconoirheadsetHelpParent}>
            <img
              className={styles.iconoirheadsetHelp}
              alt=""
              src="/iconoirheadsethelp.svg"
            />
            <b className={styles.davidFelix}>Help</b>
          </div>
          <button className={styles.vuesaxlinearlogoutParent}>
            <img className={styles.vuesaxlinearlogoutIcon} alt="" />
            <a href="/"><b className={styles.signOut}>Sign Out</b></a>
          </button>
          <b className={styles.aula}>Aula</b>
          <img
            className={styles.vuesaxlineartaskSquareIcon}
            alt=""
            src="/vuesaxlineartasksquare.svg"
          />
          <div className={styles.menuPrincipal}>MENU PRINCIPAL</div>
          <div className={styles.support}>SUPPORT</div>
          <div className={styles.lineDiv} />
        </div>
      </div>
      <b className={styles.aulasDelProfesor}>Aulas del profesor</b>
      <img
        className={styles.dashboardProfesorChild}
        alt=""
        src="/rectangle-2785.svg"
      />
      <DropdownButton
        className={styles.baseinputfield}
        title="Materia"
        variant="primary"
        align="start"
        drop="down"
        id="DropDown"
      >
        <Dropdown.Item key="0" onClick={event => handleDropdownSelect(event, null)}> Todas </Dropdown.Item>
              {codestudents.map(item => (
              
        <Dropdown.Item key={item.id} onClick={event => handleDropdownSelect(event, item)}>{item.code}</Dropdown.Item>
      ))}
      </DropdownButton>

      <div className={styles.tableContainer}>
      <table className={`${styles.tableOrder} table`}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            <th>Estatus</th>
            <th>Calificación Final</th>
            <th>Calificación Intermedia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {students.map((student, index) => (
            <StudentRow
              key={index}
              student={student}
              isSelected={selectedRowIndex === index}
              onClick={() => setSelectedRowIndex(index)}
              onEditClick={() => handleEditClick(student)}
              studentChanges={studentChanges} // Agregue esta línea
            />
          ))}
          </tbody>
      </table>
      </div>
      
      

      <div className={styles.weather}>
        <b className={styles.b}>{students.length}</b>
        <div className={styles.sunny}>Cantidad de materias</div>
      </div>
      {isFormVisible && (
      <form className={styles.editarUsuario} onSubmit={(event) => event.preventDefault()}>

        
        <div className={styles.editarUsuarioChild} />
        <div className={styles.estudiante1}>Estudiante</div>
        <Form.Group className={styles.baseinputfieldFormgroup}>
          <Form.Control type="text" defaultValue={selectedStudent?.name || ""} readOnly />
        </Form.Group>
        <div className={styles.claveDeLa}>Clave de la materia</div>
        <div className={styles.calif}>Calif.</div>
        
        <div className={styles.notaFinal1}>Nota Final</div>
        <div className={styles.medTer}>Med. Ter.</div>
        <Form.Group className={styles.baseinputfieldFormgroup1}>
          <Form.Control
            type="text"
            defaultValue={selectedStudent?.finalGrade || ""}
            onChange={(event) => handleInputChange(event, "finalGrade")}
            readOnly={selectedStudent?.status === "R"}
          />
        </Form.Group>
        <label className={styles.a} htmlFor="Calif">
        {selectedStudent?.status || ""}
        </label>
        <img className={styles.dropindicatorvariant2Icon} alt="" />
        <Form.Group className={styles.baseinputfieldFormgroup2}>
          <Form.Control type="text" defaultValue={selectedStudent?.code || ""}  readOnly />
        </Form.Group>
        <div className={styles.textField}>
          <div className={styles.inputstateserror}>
            <div className={styles.basetextfield}>
              <div className={styles.inputLabel}>
                
              </div>
              <div className={styles.message}></div>
              <div className={styles.inputframestates}>
                <div className={styles.baseinputfield1}>
                  <div className={styles.addAlarmParent}>
                    <img className={styles.addAlarmIcon} alt="" />
                    <div className={styles.frameChild3} />
                    <div className={styles.placeholder}>
                      
                    </div>
                  </div>
                  <img
                    className={styles.addAlarmIcon}
                    alt=""
                    src="/remove-red-eye1.svg"
                  />
                  <img
                    className={styles.baseinputfieldChild}
                    alt=""
                    src="/polygon-1.svg"
                  />
                  <img
                    className={styles.baseinputfieldChild}
                    alt=""
                    src="/polygon-22.svg"
                  />
                </div>
              </div>
              <div className={styles.baseinputmessage}>
                <img className={styles.errorIcon} alt="" src="/error.svg" />
                <div className={styles.message1}>Message</div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className={styles.button} onClick={handleSave}>
          <div className={styles.text}>Guardar</div>
        </button>
        <button onClick={() => setIsFormVisible(false)} type="button" className={styles.closeButton}>
          <img
            className={styles.fiRrArrowLeftIcon}
            alt=""
            src="/firrarrowleft.svg"
          />
        </button>

        <Form.Group className={styles.baseinputfieldFormgroup3}>
          <Form.Control
            type="text"
            name="MedTerm"
            placeholder="Input placeholder"
            defaultValue={selectedStudent?.midTerm || ""}
            onChange={(event) => handleInputChange(event, "midTerm")}
            readOnly={selectedStudent?.status === "R"}
          />
        </Form.Group>
      </form> )}
    </div>
  );
};

export default DashboardProfesor;
