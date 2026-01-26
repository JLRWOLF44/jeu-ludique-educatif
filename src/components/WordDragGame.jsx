import React, { useEffect, useState } from "react";
import styles from "./WordDragGame.module.css";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function WordDragGame({ mot }) {
  const lettres = mot.split("");

  const [melange, setMelange] = useState([]);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    setMelange(shuffle(lettres.map((l, i) => ({ id: i, lettre: l }))));
    setSlots(Array(lettres.length).fill(null));
  }, [mot]);

  const dropLettre = (slotIndex, lettreObj) => {
    if (slots[slotIndex]) return;

    const newSlots = [...slots];
    newSlots[slotIndex] = lettreObj;

    setSlots(newSlots);
    setMelange(melange.filter((l) => l.id !== lettreObj.id));
  };

  const retirerLettre = (slotIndex) => {
    const lettre = slots[slotIndex];
    if (!lettre) return;

    setMelange([...melange, lettre]);

    const newSlots = [...slots];
    newSlots[slotIndex] = null;
    setSlots(newSlots);
  };

  const reussi = slots.every(
    (l, i) => l && l.lettre === lettres[i]
  );

  return (
    <div className={styles.container}>
      <div className={styles.slots}>
        {slots.map((slot, i) => (
          <div
            key={i}
            className={styles.slot}
            onClick={() => retirerLettre(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const id = e.dataTransfer.getData("id");
              const lettreObj = melange.find((l) => l.id === Number(id));
              if (lettreObj) dropLettre(i, lettreObj);
            }}
          >
            {slot?.lettre}
          </div>
        ))}
      </div>

      <div className={styles.lettres}>
        {melange.map((l) => (
          <div
            key={l.id}
            className={styles.lettre}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("id", l.id)}
          >
            {l.lettre}
          </div>
        ))}
      </div>

      {reussi && <p className={styles.success}>🎉 Bravo !!! 🎉</p>}
    </div>
  );
}
