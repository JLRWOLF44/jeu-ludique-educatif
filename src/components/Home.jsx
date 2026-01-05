import React from "react";
import styles from "./Home.module.css";

function Home({ onSelectGame }) {
  return (
    <div className={styles.homeScreen}>
      {/* Animation étoiles scintillantes */}
      <div className={styles.starsBg}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>

      <div className={styles.homeContent}>
        {/* Titre principal avec arc-en-ciel */}
        <div className={styles.titleRainbow}>
          <h1>Le Jardin</h1>
          <h1 className={styles.titleGlow}>Enchanté</h1>
          <h2>de la Petite Princesse ✨</h2>
        </div>

        <p className={styles.subtitle}>Choisis ton aventure magique ! 🌟</p>

        {/* Boutons avec icônes magiques */}
        <div className={styles.menuButtons}>
          <button
            className={styles.menuBtn}
            style={{ "--btn-color": "#ff9a9e" }}
            onClick={() => onSelectGame("alphabet")}
          >
            <span className={styles.icon}>🌈</span>
            L'Alphabet Enchanté
          </button>

          <button
            className={styles.menuBtn}
            style={{ "--btn-color": "#a8edea" }}
            onClick={() => onSelectGame("comptage")}
          >
            <span className={styles.icon}>⭐</span>
            Le Comptage Magique
          </button>

          <button
            className={styles.menuBtn}
            style={{ "--btn-color": "#ffb6c1" }}
            onClick={() => onSelectGame("difference")}
          >
            <span className={styles.icon}>🔍</span>
            Trouve les Différences
          </button>
        </div>

        {/* Petit clin d'œil perso */}
        <p className={styles.signature}>Made with 💕 pour Lilwenn</p>
      </div>
    </div>
  );
}

export default Home;