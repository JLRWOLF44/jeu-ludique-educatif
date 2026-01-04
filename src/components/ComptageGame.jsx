import React, { useState } from "react";
import styles from "./ComptageGame.module.css";

function ComptageGame({ onBack }) {
  const objets = ["🦄", "⭐", "🌸", "🍭", "🧁", "🌈", "🎀", "🐰"];

  const [nombre, setNombre] = useState(Math.floor(Math.random() * 30) + 1);
  const [reponse, setReponse] = useState("");
  const [message, setMessage] = useState("");

  const verifier = () => {
    if (parseInt(reponse) === nombre) {
      setMessage("🎉 Bravo ma princesse !! Tu es trop forte ! 🌟");
      setTimeout(() => {
        setNombre(Math.floor(Math.random() * 30) + 1);
        setReponse("");
        setMessage("");
      }, 3000);
    } else {
      setMessage("👑 Essaie encore, tu vas y arriver ! 💕");
    }
  };

  return (
    <div className={styles.gameScreen}>
      <div className={styles.gameContent}>
        <h1>Le Comptage Magique ⭐</h1>
        <p>Combien y en a-t-il ?</p>

        <div className={styles.objets}>
          {Array.from({ length: nombre }, (_, i) => (
            <span key={i} className={styles.objet}>
              {objets[Math.floor(Math.random() * objets.length)]}
            </span>
          ))}
        </div>

        <input
          type="number"
          value={reponse}
          onChange={(e) => setReponse(e.target.value)}
          placeholder="Ton nombre..."
          className={styles.input}
        />

        <button className={styles.validerBtn} onClick={verifier}>
          Vérifier ✨
        </button>

        {message && <p className={styles.message}>{message}</p>}

        <button className={styles.backBtn} onClick={onBack}>
          ← Retour au jardin
        </button>
      </div>
    </div>
  );
}

export default ComptageGame;