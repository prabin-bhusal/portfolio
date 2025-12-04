import React, { useEffect, useRef, useState } from "react";

export default function Game() {
  const [score, setScore] = useState(0);
  const containerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const [level, setLevel] = useState(1);
  const [speed, setSpeed] = useState(4);

  const popSound = useRef(null);

  // load sound
  useEffect(() => {
    try {
      popSound.current = new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg");
    } catch (e) {
      popSound.current = null;
    }
  }, []);

  // spawn bubbles based on level
  useEffect(() => {
    const spawnDelay = Math.max(200, 700 - level * 100); // ms
    const id = setInterval(() => {
      const now = Date.now() + Math.floor(Math.random() * 1000);
      setBubbles((prev) => [
        ...prev,
        {
          id: now,
          left: Math.random() * 90,
          size: Math.floor(Math.random() * 40) + 20, // px
        },
      ]);
    }, spawnDelay);
    return () => clearInterval(id);
  }, [level]);

  // remove bubble when animation ends (falls out)
  const handleAnimationEnd = (id) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  const popBubble = (id) => {
    setScore((s) => s + 1);

    // play sound
    if (popSound.current) {
      try {
        popSound.current.currentTime = 0;
        popSound.current.play();
      } catch (e) { }
    }

    // mark bubble as popping
    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popping: true } : b))
    );
  };


  // level up every 10 points
  useEffect(() => {
    if (score > 0 && score % 10 === 0) {
      setLevel((l) => l + 1);
      setSpeed((s) => Math.max(1, s - 0.4));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-2xl font-bold mb-2">Bubble Pop Game</h1>
      <p className="text-lg font-semibold mb-1">Score: <span className="animate-pulse text-green-600">{score}</span></p>
      <p className="text-md font-semibold text-purple-600">Level: {level}</p>

      <div
        ref={containerRef}
        className="relative overflow-hidden mt-4 bg-blue-100 rounded-xl"
        style={{ width: "80%", height: "800px" }}
      >
        {bubbles.map((b) => (
          <div
            key={b.id}
            onMouseDown={() => popBubble(b.id)}   // faster than onClick
            className={
              "absolute rounded-full bg-blue-300 cursor-pointer transition transform flex items-center justify-center " +
              (b.popping ? "bubble-pop" : "hover:scale-110 hover:bg-blue-400")
            }
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animation: b.popping ? "pop 0.25s ease-out forwards" : `fall ${speed}s linear`,
              userSelect: "none",
              pointerEvents: "all",   // ensures quick click always works
              touchAction: "manipulation" // prevents long-press delay on mobile
            }}
            onAnimationEnd={() => {
              if (b.popping) handleAnimationEnd(b.id);
              else handleAnimationEnd(b.id);
            }}
          />


        ))}
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-80px); opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(880px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}