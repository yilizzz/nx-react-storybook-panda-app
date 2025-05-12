import { Stack, Box } from '@packages/ui/styled-system/jsx';
import React from 'react';
export const InsightCardContent: React.FC<
  {
    title: string;
    content: string;
    date: string;
    type: string;
    author: string;
    position: string;
    duration: string;
    face: 'front' | 'back';
  } & React.HTMLAttributes<HTMLDivElement>
> = ({
  title,
  content,
  date,
  type,
  author,
  position,
  duration,
  face = 'front',
  ...props
}) => {
  return (
    <Stack {...props}>
      <Box>{title}</Box>

      <Box>{date}</Box>
      <Box>{type}</Box>

      <Box>{author}</Box>
      <Box>{position}</Box>

      <Box>{duration}</Box>
      <Box color={face === 'front' ? 'transparent' : 'unset'}>{content}</Box>
    </Stack>
  );
};
