import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { card } from '@packages/ui/styled-system/recipes';
import p from '@packages/ui/src/assets/p.png';
const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Data-display/Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const elevated: Story = {
  args: card.raw({ variant: 'elevated' }),
  render: (args) => (
    <Card {...args}>Grow their business pipeline / Takes orders</Card>
  ),
};

export const neutral: Story = {
  args: card.raw({
    variant: 'neutral',
  }),
  render: (args) => (
    <Card {...args}>Grow their business pipeline / Takes orders</Card>
  ),
};

export const background: Story = {
  args: card.raw({
    variant: 'background',
  }),
  render: (args) => (
    <Card {...args} style={{ backgroundImage: `url("${p}")` }}>
      Grow their business pipeline / Takes orders
    </Card>
  ),
};
