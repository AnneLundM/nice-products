import Button from "../button/Button";
import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subTitle, headerImg, readMore }) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}>
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        {subTitle && <p>{subTitle}</p>}
        {readMore && <Button title='Læs mere' />}
      </div>
    </header>
  );
};

export default PageHeader;
