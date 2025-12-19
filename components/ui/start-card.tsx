import type { ReactNode } from "react";
import Image from "next/image";

export interface StatCardProps {
  icon: ReactNode;
  number: string;
  label: string;
  image: string;
  height: string;
  isHighlight?: boolean; // 👈 new
}

export const StatCard = ({
  icon,
  number,
  label,
  image,
  height,
  isHighlight = false,
}: StatCardProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl w-full group hover:scale-105 transition-transform duration-300"
      style={{ height }}>
      {/* Background Image */}
      <Image
        src={image || "/placeholder.svg"}
        alt={label}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      {isHighlight ? (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 via-blue-500/80 to-purple-600/80" />
      ) : (
        <div className="absolute inset-0 bg-gray-900/70" />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
        <div className="mb-6">{icon}</div>
        <div className="text-6xl font-bold mb-3">{number}</div>
        <div className="text-xl font-medium opacity-90">{label}</div>
      </div>
    </div>
  );
};







