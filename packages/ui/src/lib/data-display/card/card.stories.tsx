import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { card } from '@styled-system/ui/recipes';
import p from 'src/ui/assets/p.png';
import { Text } from 'src/ui/lib/typography/text/text';
import { useState } from 'react';
const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Data-display/Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const dynamicProps: Story = {
  args: card.raw({}),
  render: (args) => {
    const [color, setColor] = useState('primary');
    return (
      <div>
        <button
          onClick={() =>
            setColor(color === 'primary' ? 'elevatedAlt' : 'primary')
          }
        >
          variant switch : {color}
        </button>
        <Card {...args} variant={color}>
          text
        </Card>
      </div>
    );
  },
};
export const primary: Story = {
  args: card.raw({ variant: 'primary' }),
  render: (args) => {
    return (
      <Card {...args}>
        <Text color="secondary">text</Text>
      </Card>
    );
  },
};
export const primaryAlt: Story = {
  args: card.raw({ variant: 'primaryAlt' }),
  render: (args) => {
    return (
      <Card {...args}>
        <Text color="secondary">text</Text>
      </Card>
    );
  },
};
export const secondary: Story = {
  args: card.raw({ variant: 'secondary' }),
  render: (args) => {
    return (
      <Card {...args}>
        <Text color="white">text</Text>
      </Card>
    );
  },
};
export const elevated: Story = {
  args: card.raw({ variant: 'elevated' }),
  render: (args) => {
    return (
      <Card {...args}>
        <Text color="secondary">text</Text>
      </Card>
    );
  },
};
export const elevatedAlt: Story = {
  args: card.raw({ variant: 'elevatedAlt' }),
  render: (args) => {
    return (
      <Card {...args}>
        <Text color="secondary">text</Text>
      </Card>
    );
  },
};
export const neutral: Story = {
  args: card.raw({ variant: 'neutral' }),
  render: (args) => {
    return (
      <Card {...args}>
        <Text color="secondary">text</Text>
      </Card>
    );
  },
};

export const background: Story = {
  args: card.raw({ variant: 'background' }),
  render: (args) => {
    return (
      <Card {...args} backgroundImage={p}>
        <Text>text</Text>
      </Card>
    );
  },
};
