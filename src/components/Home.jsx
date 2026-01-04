import React from "react";
import styles from "./Home.module.css";

function Home({ onSelectGame }) {
  return (
    <div className={styles.homeScreen}>
      {/* Fond avec paillettes animées */}
      <div className={styles.starsContainer}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.star} style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      <div className={styles.homeContent}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Le Jardin</h1>
          <h1 className={styles.mainTitle}>Enchanté ✨</h1>
          <p className={styles.subtitle}>de la Petite Princesse</p>
        </div>

        <p className={styles.welcomeText}>Choisis ton aventure magique ! 🌟</p>

        <div className={styles.menuButtons}>
          <button
            className={styles.gameBtn}
            onClick={() => onSelectGame("alphabet")}
          >
            <span className={styles.emoji}>🌈</span>
            <span>L'Alphabet Enchanté</span>
          </button>

          <button
            className={styles.gameBtn}
            onClick={() => onSelectGame("comptage")}
          >
            <span className={styles.emoji}>⭐</span>
            <span>Le Comptage Magique</span>
          </button>

          <button
            className={styles.gameBtn}
            onClick={() => onSelectGame("difference")}
          >
            <span className={styles.emoji}>🔍</span>
            <span>Trouve les Différences</span>
          </button>
        </div>

        {/* Petit clin d'œil papa */}
        <div className={styles.footer}>
          <p>Fait avec 💕 par Papa</p>
        </div>
      </div>
    </div>
  );
}

export default Home;