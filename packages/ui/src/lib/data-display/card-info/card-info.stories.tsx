import type { Meta, StoryObj } from '@storybook/react';
import { CardInfo } from './card-info';
import { cardInfo } from '@packages/ui/styled-system/recipes';
import p1 from '@packages/ui/src/assets/p.png';
import { Center, Stack } from '@packages/ui/styled-system/jsx';
const meta: Meta<typeof CardInfo> = {
  component: CardInfo,
  title: 'Data-display/CardInfo',
};
export default meta;
type Story = StoryObj<typeof CardInfo>;

export const CardInfoDefault: Story = {
  args: cardInfo.raw({}),
  render: (args) => (
    <CardInfo {...args} image={p1}>
      {
        <Center>
          <Stack>
            <div>title</div>
            <div>person</div>
          </Stack>
        </Center>
      }
    </CardInfo>
  ),
};
