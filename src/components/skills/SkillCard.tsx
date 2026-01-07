import { ReactNode } from "react";

export interface SkillCardProps {
  name: string;
  icon: ReactNode;
  skillLevel: number;
}

export default function SkillCard({ name, icon, skillLevel }: SkillCardProps) {
  return (
    <div
      className="bg-slate-900 text-center w-40 h-48
      rounded-3xl flex flex-col items-center justify-center shadow-lg
      transition hover:scale-110"
    >
      <div className="text-5xl text-gray-300">{icon}</div>
      <p className="text-2xl font-semibold my-4 text-gray-400">
        {skillLevel}/10
      </p>
      <p className="text-indigo-500 font-semibold">{name}</p>
    </div>
  );
}
