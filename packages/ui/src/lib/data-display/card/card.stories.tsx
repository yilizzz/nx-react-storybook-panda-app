import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import p from 'src/ui/assets/p.png';
import { Text } from 'src/ui/lib/typography/text/text';
const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Data-display/Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const primary: Story = {
  args: {
    children: <Text color="white">Hello</Text>,
    variant: 'primary',
  },
};
export const primaryAlt: Story = {
  args: {
    children: 'Hello',
    variant: 'primaryAlt',
  },
};
export const secondary: Story = {
  args: {
    children: 'Hello',
    variant: 'secondary',
  },
};
export const backgroundImage: Story = {
  args: {
    children: 'Hello',
    backgroundImage: p,
    variant: 'background',
  },
};
export const elevated: Story = {
  args: {
    children: 'Hello',
    variant: 'elevated',
  },
};
export const elevatedAlt: Story = {
  args: {
    children: 'Hello',
    variant: 'elevatedAlt',
  },
};
export const neutralDefault: Story = {
  args: {
    children: 'Hello',
    variant: 'neutral',
  },
};
