import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { card } from '@styled-system/ui/recipes';
import p from 'src/ui/assets/p.png';
import { Text } from 'src/ui/lib/typography/text/text';
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
    <Card {...args} backgroundImage={p}>
      Grow their business pipeline / Takes orders
    </Card>
  ),
};

export const primary: Story = {
  args: card.raw({
    variant: 'primary',
  }),
  render: (args) => (
    <Card {...args}>
      <Text color="white">Grow their business pipeline / Takes orders</Text>
    </Card>
  ),
};
export const primaryAlt: Story = {
  args: card.raw({
    variant: 'primaryAlt',
  }),
  render: (args) => (
    <Card {...args}>
      <Text color="white">Grow their business pipeline / Takes orders</Text>
    </Card>
  ),
};
export const secondary: Story = {
  args: card.raw({
    variant: 'secondary',
  }),
  render: (args) => (
    <Card {...args}>
      <Text color="white">Grow their business pipeline / Takes orders</Text>
    </Card>
  ),
};

export const elevatedAlt: Story = {
  args: card.raw({
    variant: 'elevatedAlt',
  }),
  render: (args) => (
    <Card {...args}>
      <Text>Grow their business pipeline / Takes orders</Text>
    </Card>
  ),
};
