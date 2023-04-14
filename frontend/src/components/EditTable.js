import { useMemo } from "react";
import styles from "./EditTable.module.css";

const EditTable = ({
  rAValue,
  dateValue,
  timeValue,
  orderNumberValue,
  propBorderRadius,
  propBackgroundColor,
}) => {
  const titleTableStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.titleTable} style={titleTableStyle}>
      <div className={styles.titleTableChild} />
      <div className={styles.product}>
        <b className={styles.eduardoSegura}>Eduardo Segura</b>
      </div>
      <div className={styles.customer}>
        <div className={styles.div}>11012231</div>
      </div>
      <div className={styles.status}>
        <div className={styles.rejectedWrapper} style={frameDivStyle}>
          <div className={styles.rejected}>{rAValue}</div>
        </div>
      </div>
      <div className={styles.createdDate}>
        <div className={styles.feb202020Container}>
          <p className={styles.p}>{dateValue}</p>
          <p className={styles.p}>{timeValue}</p>
        </div>
      </div>
      <div className={styles.deadline}>
        <div className={styles.div1}>31,00</div>
      </div>
      <div className={styles.action}>
        <div className={styles.btnAction}>
          <b className={styles.editar}>Editar</b>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src={orderNumberValue}
          />
        </div>
      </div>
    </div>
  );
};

export default EditTable;
