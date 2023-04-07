import styles from "./MateriasEstudiante.module.css";
import React, { useState, useEffect } from 'react';
import jsonData from "./datos.json";

const MateriasEstudiante = () => {
  const validEmail = "usuario@email.com";
  const validPassword = "usuario";
  const user = jsonData.Estudiante.find((Login) => Login.email === validEmail);


  const select = jsonData.Subject.find((select) => select.id === user.id); //esto despues se utilizara para filtrar los datos por el select;
  const nota = jsonData.Materia_Usuario_Ciclo.find((nota) => nota.subject_id === select.id); 

  const id = select.code;
  const lettergrade = nota.final_grade_letter;
  const midterm = nota.midterm_grade;
  const finalgrade = nota.final_grade;

  return (
    <div className={styles.materiasEstudiante}>
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
      <b className={styles.materias}>Materias</b>
      <select className={styles.selectSimple} />
      <div className={styles.ids20201}>{id}</div>
      <div className={styles.materiasEstudianteInner}>
        <div className={styles.vectorParent}>
          <img
            className={styles.groupInner}
            alt=""
            src="/rectangle-27852.svg"
          />
          <div className={styles.g1}>
            <div className={styles.g1Child} />
            <div className={styles.andiRestuProfesoraContainer}>
              <b>{`Andi Restu `}</b>
              <span className={styles.profesora}>{`(Profesora) `}</span>
              <b>Enter new employee data</b>
            </div>
            <div className={styles.am}>07:00 AM</div>
            <h2 className={styles.h2}>5,00 / 5,00</h2>
            <div className={styles.realizado}>realizado</div>
            <input className={styles.boxunchecked} type="checkbox" />
            <div className={styles.viewAll}>
              <div className={styles.subir}>Subir</div>
              <input
                className={styles.vuesaxlineararrowSquareRig}
                type="file"
              />
            </div>
          </div>
          <div className={styles.g2}>
            <div className={styles.g2Child} />
            <div className={styles.vuesaxlineararrowSquareRigParent}>
              <b
                className={styles.reminderEnterNew}
              >{`[Reminder] Enter new employee data `}</b>
              <div className={styles.yesterday0400Pm}>Yesterday, 04:00 PM</div>
            </div>
            <div className={styles.realizado}>realizado</div>
            <input className={styles.boxunchecked1} type="checkbox" />
            <h2 className={styles.h21}>5,00 / 5,00</h2>
            <div className={styles.viewAll1}>
              <div className={styles.subir}>Subir</div>
              <input
                className={styles.vuesaxlineararrowSquareRig}
                type="file"
              />
            </div>
          </div>
          <div className={styles.g3}>
            <div className={styles.g1Child} />
            <div className={styles.vuesaxlineararrowSquareRigGroup}>
              <div
                className={styles.reminderEnterNew}
              >{`Salary payments have been received `}</div>
              <div className={styles.august1st2022Container}>
                August 1<span className={styles.st}>st</span> 2022
              </div>
            </div>
            <div className={styles.realizado2}>realizado</div>
            <input className={styles.boxunchecked2} type="checkbox" />
            <h2 className={styles.h22}>5,00 / 5,00</h2>
            <div className={styles.viewAll2}>
              <div className={styles.subir}>subir</div>
              <input
                className={styles.vuesaxlineararrowSquareRig}
                type="file"
              />
            </div>
          </div>
          <div className={styles.g4}>
            <div className={styles.g4Child} />
            <div className={styles.andiRestuProfesoraContainer}>
              Marketing division needs new employees
            </div>
            <div className={styles.august1st2022Container1}>
              August 1<span className={styles.st}>st</span> 2022
            </div>
            <div className={styles.realizado3}>realizado</div>
            <input className={styles.boxunchecked} type="checkbox" />
            <h2 className={styles.h23}>5,00 / 5,00</h2>
            <div className={styles.viewAll3}>
              <div className={styles.subir}>Subir</div>
              <input
                className={styles.vuesaxlineararrowSquareRig}
                type="file"
              />
            </div>
          </div>
          <div className={styles.g5}>
            <div className={styles.g1Child} />
            <div className={styles.vuesaxlineararrowSquareRigGroup}>
              <div className={styles.reminderEnterNew}>
                [Reminder] Report payroll data for July 2022
              </div>
              <div className={styles.august1st2022Container}>
                August 1<span className={styles.st}>st</span> 2022
              </div>
            </div>
            <div className={styles.realizado4}>realizado</div>
            <input className={styles.boxunchecked4} type="checkbox" />
            <h2 className={styles.h23}>5,00 / 5,00</h2>
            <div className={styles.viewAll4}>
              <div className={styles.subir}>Subir</div>
              <input
                className={styles.vuesaxlineararrowSquareRig}
                type="file"
              />
            </div>
          </div>
          <div className={styles.g6}>
            <div className={styles.g6Child} />
            <div className={styles.newEmployeeDocuments}>
              New employee documents must be updated
            </div>
            <div className={styles.august1st2022Container3}>
              August 1<span className={styles.st}>st</span> 2022
            </div>
            <div className={styles.realizado4}>realizado</div>
            <input className={styles.boxunchecked5} type="checkbox" />
            <div className={styles.viewAll5}>
              <div className={styles.subir}>Subir</div>
              <input
                className={styles.vuesaxlineararrowSquareRig}
                type="file"
              />
            </div>
            <h2 className={styles.h23}>5,00 / 5,00</h2>
          </div>
          <div className={styles.ultimasAsignacionesIds202Container}>
            <b>{`Ultimas asignaciones `}</b>
            <span className={styles.ids202011}>{id}</span>
          </div>
        </div>
      </div>
      <div className={styles.weather}>
        <div className={styles.rectangle} />
        <b className={styles.b}>{midterm}</b>
        <div className={styles.sunny}>Medio termino</div>
      </div>
      <div className={styles.weather1}>
        <div className={styles.rectangle} />
        <b className={styles.b}>{finalgrade}</b>
        <div className={styles.sunny}>Nota final</div>
      </div>
      <section className={styles.weather2}>
        <div className={styles.rectangle} />
        <b className={styles.b}>{lettergrade}</b>
        <div className={styles.sunny}>Calificacion</div>
      </section>
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
        <div className={styles.seleccionParent}>
          <a href = "seleccion-estudiante2">
          <b className={styles.seleccion}>{`Seleccion `}</b>
          </a>
          <img
            className={styles.vuesaxlinearuserCirlceAddIcon}
            alt=""
            src="/vuesaxlinearusercirlceadd2.svg"
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
        <div className={styles.vectorGroup}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-27821.svg"
          />
          <img className={styles.groupChild1} alt="" src="/group-34146.svg" />
          <b className={styles.materias1}>Materias</b>
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

export default MateriasEstudiante;
