import type { Meta, StoryObj } from '@storybook/react';
import { CardFlip } from './card-flip';
import { Stack } from '@packages/ui/styled-system/jsx';
import p1 from '@packages/ui/src/assets/p.png';
import p2 from '@packages/ui/src/assets/p-inverse.png';
import { Card } from '@packages/ui/src/lib/data-display/card/card';
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
