import React, { useEffect, useState } from "react";

const MonsterStatus = ({ monster }) => {
  const [prevHP, setPrevHP] = useState(monster ? monster.currentHP : 100);
  const [damage, setDamage] = useState(false);
  const [heal, setHeal] = useState(false);

  useEffect(() => {
    if (!monster) return;

    if (monster.currentHP < prevHP) {
      setDamage(true);
      setHeal(false);
      setTimeout(() => setDamage(false), 600);
    } else if (monster.currentHP > prevHP) {
      setHeal(true);
      setDamage(false);
      setTimeout(() => setHeal(false), 600);
    }

    setPrevHP(monster.currentHP);
  }, [monster]);

  if (!monster) return <p>Loading monster...</p>;

  const { maxHP, currentHP, completedHabits, totalHabits } = monster;
  const hpPercentage = (currentHP / maxHP) * 100;

  return (
    <div className="relative mb-6">
      {/* Glow aura */}
      <div className="absolute inset-0 rounded-2xl border-4 border-purple-500 animate-glow pointer-events-none"></div>

      {/* Damage flash */}
      {damage && (
        <div className="absolute inset-0 bg-red-500 opacity-40 rounded-2xl pointer-events-none animate-pulse"></div>
      )}

      {/* Heal flash */}
      {heal && (
        <div className="absolute inset-0 bg-green-400 opacity-40 rounded-2xl pointer-events-none animate-pulse"></div>
      )}

      {/* Sparks */}
      {damage && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-300 w-1 h-1 rounded-full animate-spark"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.3}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      <div
        className={`bg-white p-4 rounded-2xl shadow-xl transition-transform duration-200 ${
          damage ? "animate-shake scale-105" : ""
        }`}
      >
        <h2 className="text-xl font-bold mb-2 text-purple-700 drop-shadow-lg">
          Monster Status
        </h2>

        {/* Monster Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/monster.png" // Place image in public folder
            alt="Monster"
            className={`w-40 h-40 object-contain transition-transform ${
              damage ? "scale-90" : heal ? "scale-110" : ""
            }`}
          />
        </div>

        {/* HP Bar */}
        <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden relative shadow-inner">
          <div
            className={`h-6 transition-all duration-500 ease-out ${
              damage ? "bg-red-700" : heal ? "bg-green-500" : "bg-red-500"
            }`}
            style={{ width: `${hpPercentage}%` }}
          ></div>
        </div>

        <p className="mt-2 text-gray-700 font-semibold">
          HP: {currentHP.toFixed(0)} / {maxHP}
        </p>
        <p className="text-gray-700 font-semibold">
          Completed Habits: {completedHabits} / {totalHabits}
        </p>
      </div>
    </div>
  );
};

export default MonsterStatus;
 