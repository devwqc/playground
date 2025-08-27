'use client';

import createAnimation from '@/helpers/animation';

const animationName = createAnimation(
  'bc-spin',
  '0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }',
);

const Spinner = () => {
  return (
    <div
      style={{
        width: '120px',
        height: '120px',
        border: '16px solid #F3F3F3',
        borderTop: '16px solid #3497DB',
        borderRadius: '50%',
        display: 'inline-block',
        animation: `${animationName} 1.5s linear infinite`,
      }}
    />
  );
};

export default Spinner;
