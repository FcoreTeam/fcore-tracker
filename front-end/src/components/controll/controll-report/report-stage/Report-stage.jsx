import Input from "@/components/ui/input/Input";
import styles from "./report-stage.module.scss";

const ReportStage = ({ stage }) => {
  return (
    <div className={styles.report__stage}>
      {stage === 1 ? (
        <div className={styles.stage}>
          <Input
            inputPlaceholder="Введите название отчёта"
            inputClass="report__input"
          />
          <Input
            inputPlaceholder="Введите описание отчёта"
            inputClass="report__input"
          />
        </div>
      ) : stage === 2 ? (
        <></>
      ) : stage === 3 ? (
        <></>
      ) : null}
    </div>
  );
};
export default ReportStage;
