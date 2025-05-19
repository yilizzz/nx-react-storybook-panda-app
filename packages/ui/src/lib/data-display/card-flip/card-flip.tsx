import React, { ReactNode, useState } from 'react';

import { motion } from 'framer-motion';

export const CardFlip: React.FC<
  {
    face: ReactNode;
    back: ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ face, back, ...props }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      {...props}
      style={{
        cursor: 'pointer',
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        style={{
          display: isFlipped ? 'none' : 'flex',
          backfaceVisibility: 'hidden',
          width: '100%',
          height: '100%',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {face}
      </motion.div>
      <motion.div
        style={{
          backfaceVisibility: 'hidden',
          display: isFlipped ? 'inline' : 'none',
          width: '100%',
          height: '100%',
        }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
      >
        {back}
      </motion.div>
    </div>
  );
};
