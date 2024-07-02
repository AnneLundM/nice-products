import styles from "./sectionHeader.module.css";

const SectionHeader = ({
  title = "",
  lineOne = "",
  lineTwo = "",
  colorLineOne = "",
  colorLineTwo = "",
}) => {
  return (
    <header className={styles.header}>
      <h2>
        {title}
        <span style={{ color: colorLineOne }}>{lineOne}</span>{" "}
        <span style={{ color: colorLineTwo }}>{lineTwo}</span>
      </h2>
    </header>
  );
};

export default SectionHeader;
