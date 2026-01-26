import React from "react";
import styles from "./Home.module.css";

function Home({ onSelectGame }) {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeContent}>
        <h1>Le Jardin Enchanté</h1>
        <h1 className={styles.titleGlow}>de la Petite Princesse ✨</h1>
        <p className={styles.subtitle}>Choisis ton aventure magique ! 🌟</p>

        <div className={styles.menuButtons}>
          <button className={styles.alphabetBtn} onClick={() => onSelectGame("alphabet")}>
            <span className={styles.icon}>🌈</span>
            L'Alphabet Enchanté
          </button>
          <button className={styles.comptageBtn} onClick={() => onSelectGame("comptage")}>
            <span className={styles.icon}>⭐</span>
            Le Comptage Magique
          </button>
          <button className={styles.differenceBtn} onClick={() => onSelectGame("difference")}>
            <span className={styles.icon}>🔍</span>
            Trouve les Différences
          </button>
        </div>

        <p className={styles.signature}>Made with 💕 pour Lilwenn</p>
      </div>
    </div>
  );
}

export default Home;