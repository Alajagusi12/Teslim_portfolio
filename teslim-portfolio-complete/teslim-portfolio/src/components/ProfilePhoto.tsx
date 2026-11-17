"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function ProfilePhoto() {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: reduce
          ? undefined
          : `perspective(900px) rotateY(${tilt.x * 10}deg) rotateX(${-tilt.y * 10}deg)`,
        transition: "transform 150ms ease-out",
      }}
      className="group relative h-80 w-[270px] overflow-hidden rounded-[20px] bg-forest shadow-lg ring-2 ring-transparent transition-shadow duration-300 hover:shadow-2xl hover:ring-accent"
    >
      {failed ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 text-[#ecfdf5]"
          aria-hidden="true"
        >
          <span className="font-serif text-8xl font-bold leading-none">AT</span>
          <span className="text-xs font-semibold tracking-[0.18em] text-mint">
            NIGERIA · REMOTE
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/profile.jpg"
          alt="Portrait of Abdulwahab Teslim"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-[#ecfdf5] transition-transform duration-300 group-hover:translate-y-0">
        <p className="font-serif text-lg font-bold">Abdulwahab Teslim</p>
        <p className="text-xs font-medium text-mint">AI evaluation · QA automation · Full-stack</p>
      </div>
    </div>
  );
}
