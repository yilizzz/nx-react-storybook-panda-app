import type { Meta, StoryObj } from '@storybook/react';
import { CardInfo } from './card-info';
import { cardInfo } from '@styled-system/ui/recipes';
import p1 from 'src/ui/assets/p.png';

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
      person
    </CardInfo>
  ),
};
