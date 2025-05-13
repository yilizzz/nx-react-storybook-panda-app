import { Stack, Box } from '@packages/ui/styled-system/jsx';
import React from 'react';
export const InsightCardContent: React.FC<
  {
    content: object;
    face: 'front' | 'back';
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ content, face = 'front', ...props }) => {
  return (
    <Stack {...props} color="white">
      <Box>{content.title}</Box>

      <Box>{content.date}</Box>
      <Box>{content.type}</Box>

      <Box>{content.author}</Box>
      <Box>{content.position}</Box>

      <Box>{content.duration}</Box>
      <Box color={face === 'front' ? 'transparent' : 'unset'}>
        {content.content}
      </Box>
    </Stack>
  );
};
