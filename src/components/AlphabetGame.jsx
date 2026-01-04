import React from "react";
import styles from "./AlphabetGame.module.css";
import alphabetData from "../data/alphabetData";

function AlphabetGame({ onBack }) {
  const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleClick = (lettre) => {
    const exemple = alphabetData[lettre] || "Chose magique";
    alert(`🌟 La lettre ${lettre} !\nC'est comme ${exemple} 🎉`);
  };

  return (
    <div className={styles.gameScreen}>
      <div className={styles.gameContent}>
        <h1>L'Alphabet Enchanté 🌈</h1>
        <p>Clique sur une lettre pour découvrir un animal magique !</p>

        <div className={styles.alphabetGrid}>
          {lettres.map((lettre) => (
            <button
              key={lettre}
              className={styles.lettreBtn}
              onClick={() => handleClick(lettre)}
            >
              {lettre}
            </button>
          ))}
        </div>

        <button className={styles.backBtn} onClick={onBack}>
          ← Retour au jardin
        </button>
      </div>
    </div>
  );
}

export default AlphabetGame;