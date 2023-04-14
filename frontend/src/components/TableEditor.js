import styles from "./TableEditor.module.css";

const TableEditor = () => {
  return (
    <div className={styles.titleTable}>
      <div className={styles.titleTableChild} />
      <div className={styles.product}>
        <b className={styles.eduardoSegura}>Eduardo Segura</b>
      </div>
      <div className={styles.customer}>
        <div className={styles.div}>11012231</div>
      </div>
      <div className={styles.status}>
        <div className={styles.pendingWrapper}>
          <div className={styles.pending}>C+</div>
        </div>
      </div>
      <div className={styles.createdDate}>
        <div className={styles.div1}>90</div>
      </div>
      <div className={styles.deadline}>
        <div className={styles.div2}>31,00</div>
      </div>
      <div className={styles.action}>
        <div className={styles.btnAction}>
          <b className={styles.editar}>Editar</b>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default TableEditor;
