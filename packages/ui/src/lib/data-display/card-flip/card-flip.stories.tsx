import type { Meta, StoryObj } from '@storybook/react';
import { CardFlip } from './card-flip';
import { Stack } from '@styled-system/ui/jsx';
import p1 from 'src/ui/assets/p.png';
import p2 from 'src/ui/assets/p-inverse.png';
import { Card } from 'src/ui/lib/data-display/card/card';
const meta: Meta<typeof CardFlip> = {
  component: CardFlip,
  title: 'Data-display/CardFlip',
};
export default meta;
type Story = StoryObj<typeof CardFlip>;

export const cardFlip: Story = {
  args: {
    face: (
      <Card variant="background" backgroundImage={p1}>
        <Stack>
          <div>face 1</div>
          <div>face 2</div>
        </Stack>
      </Card>
    ),

    back: (
      <Card variant="background" backgroundImage={p2}>
        back
      </Card>
    ),
  },
};
