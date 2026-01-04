import React, { useState } from "react";
import styles from "./SpotDifferenceGame.module.css";

function SpotDifferenceGame({ onBack }) {
  const [found, setFound] = useState(0);
  const total = 5;

  const handleFind = () => {
    setFound(found + 1);
    if (found + 1 === total) {
      setTimeout(() => {
        alert("🎉 Bravo ma princesse !! Tu as trouvé toutes les différences !! 🌟🦄");
      }, 300);
    }
  };

  return (
    <div className={styles.gameScreen}>
      <div className={styles.gameContent}>
        <h1>🔍 Trouve les Différences 🔍</h1>
        <p>Clique sur ce qui est différent ! ({found}/{total})</p>

        <div className={styles.imagesContainer}>
          {/* Mets tes 2 images presque identiques dans public/ */}
          <img src="/difference-left.jpg" alt="Gauche" className={styles.diffImage} />
          <img src="/difference-right.jpg" alt="Droite" className={styles.diffImage} />

          {/* Zones cliquables (ajuste les positions selon tes images) */}
          <div className={styles.clickZone} style={{ top: "25%", left: "15%" }} onClick={handleFind}></div>
          <div className={styles.clickZone} style={{ top: "40%", left: "60%" }} onClick={handleFind}></div>
          <div className={styles.clickZone} style={{ top: "70%", left: "30%" }} onClick={handleFind}></div>
          <div className={styles.clickZone} style={{ top: "50%", left: "80%" }} onClick={handleFind}></div>
          <div className={styles.clickZone} style={{ top: "10%", left: "50%" }} onClick={handleFind}></div>
        </div>

        <button className={styles.backBtn} onClick={onBack}>
          ← Retour au jardin
        </button>
      </div>
    </div>
  );
}

export default SpotDifferenceGame;