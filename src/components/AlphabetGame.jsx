import React, { useState } from "react";
import alphabetData from "../data/alphabetData";
import WordDragGame from "./WordDragGame";
import styles from "./AlphabetGame.module.css";

function AlphabetGame({ onBack }) {
  const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [selectedLettre, setSelectedLettre] = useState(null);
  const [indexMot, setIndexMot] = useState(0);

  const mots = selectedLettre ? alphabetData[selectedLettre] || [] : [];

  const motActuel = mots[indexMot];

  const nextMot = () => {
    setIndexMot((prev) => (prev + 1) % mots.length);
  };

  const prevMot = () => {
    setIndexMot((prev) => (prev - 1 + mots.length) % mots.length);
  };

  /* =====================
     ÉCRAN ALPHABET
     ===================== */
  if (!selectedLettre) {
    return (
      <div className={styles.gameScreen}>
        <div className={styles.gameContent}>
          <h1>🌟 L'Alphabet Enchanté 🌟</h1>
          <p>Clique sur une lettre pour découvrir des mots</p>

          <div className={styles.alphabetGrid}>
            {lettres.map((lettre) => (
              <button
                key={lettre}
                className={styles.lettreBtn}
                onClick={() => {
                  setSelectedLettre(lettre);
                  setIndexMot(0);
                }}
              >
                {lettre}
              </button>
            ))}
          </div>

          <button className={styles.backBtn} onClick={onBack}>
            ← Retour
          </button>
        </div>
      </div>
    );
  }

  /* =====================
     ÉCRAN MOT
     ===================== */
  return (
    <div className={styles.gameScreen}>
      <div className={styles.detailContent}>
        <h1 className={styles.lettreTitle}>{selectedLettre}</h1>

        {motActuel && (
          <>
            <h2 className={styles.motTitle}>{motActuel.mot}</h2>

            {/* ✅ UNE SEULE IMAGE */}
            <img
              src={motActuel.image}
              alt={motActuel.mot}
              className={styles.exempleImage}
            />
            <h2 className={styles.motTitle}>{motActuel.mot}</h2>

             {/* ✅ NAVIGATION */}
            {mots.length > 1 && (
              <div className={styles.navigation}>
                <button onClick={prevMot}>⬅</button>
                <span>
                  {indexMot + 1} / {mots.length}
                </span>
                <button onClick={nextMot}>➡</button>
              </div>
            )}

            {/* ✅ JEU DE LETTRES */}
            <WordDragGame
              key={motActuel.mot}   // 🔥 reset obligatoire
              mot={motActuel.mot}
            />

           
          </>
        )}

        <button
          className={styles.backBtn}
          onClick={() => setSelectedLettre(null)}
        >
          ← Retour aux lettres
        </button>
      </div>
    </div>
  );
}

export default AlphabetGame;
