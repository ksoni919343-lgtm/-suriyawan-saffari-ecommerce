import React from 'react';

interface OrnateHeaderProps {
  title: string;
}

export default function OrnateHeader({ title }: OrnateHeaderProps) {
  return (
    <div className="ornate-border transform-gpu hover:rotate-x-15 hover:scale-105 transition-all duration-500">
      <h1 className="text-5xl font-extrabold text-white text-shadow-golden">{title}</h1>
    </div>
  );
}
