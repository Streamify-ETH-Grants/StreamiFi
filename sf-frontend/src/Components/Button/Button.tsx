import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <div className={styles.text}>Launch App</div>
      </button>
    </div>
  );
};

export default Button;
