import { cardFlip, cardFace } from '@packages/ui/styled-system/recipes';
import React, { useState } from 'react';
import { Position, Box } from '@packages/ui/styled-system/jsx';
import { Card } from '@packages/ui/src/lib/data-display/card/card';
/*  xiao guo bu hao, bu yao yong */
interface CardFlipProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  frontBgImage?: string;
  backBgImage?: string;
  width: string;
  height: string;
}

export const CardFlip = ({
  frontContent,
  backContent,
  frontBgImage,
  backBgImage,
  ...props
}: CardFlipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const flipStyles = cardFlip({ flipped: isHovered });
  const frontFaceStyles = cardFace({ face: 'front' });
  const backFaceStyles = cardFace({ face: 'back' });

  return (
    <div
      className={flipStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className={isHovered ? backFaceStyles : frontFaceStyles}
        style={{
          backgroundImage: isHovered
            ? `url("${frontBgImage}")`
            : `url("${backBgImage}")`,
        }}
      >
        {isHovered ? (
          <Box css={{ transform: 'rotateY(180deg)' }}>{backContent}</Box>
        ) : (
          <Box>{frontContent}</Box>
        )}
      </div>

      {/*  <div
        className={frontFaceStyles}
        style={{
          backgroundImage: frontBgImage ? `url("${frontBgImage}")` : undefined,
        }}
      >
        {frontContent}
      </div>
      <div
        className={backFaceStyles}
        style={{
          backgroundImage: backBgImage ? `url("${backBgImage}")` : undefined,
        }}
      >
        <Position w="full" h="full">
          {backContent}
        </Position>
      </div> */}
    </div>
  );
};
