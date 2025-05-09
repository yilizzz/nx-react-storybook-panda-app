import { Card } from '@packages/ui';
import { Stack, Box } from '../../../styled-system/jsx';
import { css } from '../../../styled-system/css';
import React, { useState } from 'react';
import p from '@packages/ui/src/assets/p.png';
export const InsightCard: React.FC<
  { title: string; content: string } & React.HTMLAttributes<HTMLDivElement>
> = ({ title, content, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={css({ animationName: 'bounce' })}
    >
      <Card
        variant="background"
        className={css({ animationStyle: 'slide-fade-in' })}
        style={{ backgroundImage: `url("${p}")` }}
      >
        <Stack
          className={css({
            /*  position: 'absolute',
            width: '300px',
            height: '400px',
            backfaceVisibility: 'hidden',
            alignItems: 'center',
            justifyContent: 'center', */
          })}
        >
          <Box>{title}</Box>
        </Stack>
        <Stack
          className={css({
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          })}
        >
          <Box>{content}</Box>
        </Stack>
      </Card>
    </Box>
  );
};
