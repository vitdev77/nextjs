"use client";

import { useEffect, useState, type ReactNode } from "react";

interface DasboardTemplateProps {
  children: ReactNode;
}

export default function DasboardTemplate({ children }: DasboardTemplateProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Template: Монтирование (Произошла навигация)");
  }, []);

  return (
    <div className="flex-1 p-6 border-4 border-dashed border-purple-400 rounded-lg flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xs font-bold text-purple-400 uppercase tracking-widest">
          Dashboard Template
        </div>

        <div className="flex flex-col items-end">
          <label
            htmlFor=""
            className="text-[10px] font-bold text-purple-300 uppercase mb-1"
          >
            Volatile State (Template)
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Сбросится при переходе..."
            className="p-2 text-sm border-2 border-purple-100 rounded bg-white text-black focus:border-purple-400 outline-none w-64"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
