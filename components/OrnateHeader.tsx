import React from 'react';

interface OrnateHeaderProps {
  title: string;
}

const OrnateHeader: React.FC<OrnateHeaderProps> = ({ title }) => {
  return (
    <h1 className="ornate-border text-3xl font-bold mb-6 text-shadow-golden transform-style: preserve-3d">
      {title}
    </h1>
  );
};

export default OrnateHeader;
