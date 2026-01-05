import React from "react";
import styles from "./LetterDetail.module.css";

function LetterDetail({ lettre, exemples, onBack }) {
  return (
    <div className={styles.detailScreen}>
      <div className={styles.detailContent}>
        <h1>La lettre {lettre} 🌟</h1>
        <div className={styles.exemplesContainer}>
          {exemples.map((exemple, index) => (
            <p key={index} className={styles.exemple}>
              {exemple}
            </p>
          ))}
        </div>
        <button className={styles.backBtn} onClick={onBack}>
          ← Retour à l'alphabet
        </button>
      </div>
    </div>
  );
}

export default LetterDetail;
