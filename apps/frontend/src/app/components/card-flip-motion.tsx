import { Stack, Box, Position } from '@packages/ui/styled-system/jsx';
import React, { ReactNode, useState } from 'react';

import { motion } from 'framer-motion';

export const CardFlipMotion: React.FC<
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
        position: 'relative',
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        style={{
          backfaceVisibility: 'hidden',
          position: 'absolute',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <Box>{face}</Box>
      </motion.div>
      <motion.div
        style={{
          backfaceVisibility: 'hidden',
          position: 'absolute',
        }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
      >
        <Box>{back}</Box>
      </motion.div>
    </div>
  );
};
