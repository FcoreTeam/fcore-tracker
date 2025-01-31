import styles from "./controll-report.module.scss";
import ReportStage from "./report-stage/Report-stage";

const ControllReport = () => {
  return (
    <div className={styles.controll__report}>
      <p className={styles.report__title}>Создать отчёт</p>
      <div className={styles.report__section}>
          <ReportStage stage={1} />
          <ReportStage stage={2} />
          <ReportStage stage={3} />
      </div>
    </div>
  );
};
export default ControllReport;
