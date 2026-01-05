import React, { useState } from "react";
import alphabetData from "../data/alphabetData";
import styles from "./AlphabetGame.module.css";

function AlphabetGame({ onBack }) {
  const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [selectedLettre, setSelectedLettre] = useState(null); // null = grille
  const [currentExempleIndex, setCurrentExempleIndex] = useState(0);

  const handleSelectLettre = (lettre) => {
    setSelectedLettre(lettre);
    setCurrentExempleIndex(0);
  };

  const exemples = selectedLettre ? alphabetData[selectedLettre] || [] : [];

  const handlePrev = () => {
    setCurrentExempleIndex((prev) => (prev - 1 + exemples.length) % exemples.length);
  };

  const handleNext = () => {
    setCurrentExempleIndex((prev) => (prev + 1) % exemples.length);
  };

  // Grille des lettres
  if (!selectedLettre) {
    return (
      <div className={styles.gameScreen}>
        <div className={styles.gameContent}>
          <h1>🌟 L'Alphabet Enchanté 🌟</h1>
          <p>Clique sur une lettre pour découvrir des mots magiques !</p>

          <div className={styles.alphabetGrid}>
            {lettres.map((lettre) => (
              <button
                key={lettre}
                className={styles.lettreBtn}
                onClick={() => handleSelectLettre(lettre)}
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

  // Page détail d'une lettre
  const exemple = exemples[currentExempleIndex];

  return (
    <div className={styles.gameScreen}>
      <div className={styles.detailContent}>
        <h1 className={styles.lettreTitle}>{selectedLettre}</h1>

        {exemple ? (
          <>
            <h2 className={styles.motTitle}>{exemple.mot}</h2>
            <img src={exemple.image} alt={exemple.mot} className={styles.exempleImage} />

            {exemples.length > 1 && (
              <div className={styles.navigation}>
                <button className={styles.navBtn} onClick={handlePrev}>
                  ← Précédent
                </button>
                <span className={styles.counter}>
                  {currentExempleIndex + 1} / {exemples.length}
                </span>
                <button className={styles.navBtn} onClick={handleNext}>
                  Suivant →
                </button>
              </div>
            )}
          </>
        ) : (
          <p className={styles.noExemple}>Pas d'exemple pour cette lettre encore !</p>
        )}

        <button className={styles.backBtn} onClick={() => setSelectedLettre(null)}>
          ← Retour aux lettres
        </button>
      </div>
    </div>
  );
}

export default AlphabetGame;