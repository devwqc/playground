'use client';

import createAnimation from '@/helpers/animation';
import { CSSProperties } from 'react';

const animationName = createAnimation(
  'bc-three-dots',
  '0%, 100% { opacity: 1; } 50% { opacity: 0.5; }',
);

const getStyle = (delay: number): CSSProperties => {
  return {
    height: '60px',
    width: '60px',
    backgroundColor: '#3497DB',
    borderRadius: '50%',
    animation: `${animationName} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
    animationDelay: `${delay}s`,
  };
};

const ThreeDots = () => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    }}
  >
    <div style={getStyle(0)} />
    <div style={getStyle(0.5)} />
    <div style={getStyle(1)} />
  </div>
);

export default ThreeDots;
