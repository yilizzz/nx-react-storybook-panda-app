import type { Meta, StoryObj } from '@storybook/react';
import { CardColor } from './card-color';
import { cardStyles } from './card-color.cva.recipe';
import p from 'src/ui/assets/p.png';
import { Text } from 'src/ui/lib/typography/text/text';
import { useState } from 'react';
const meta: Meta<typeof CardColor> = {
  component: CardColor,
  title: 'Data-display/CardColor',
};
export default meta;
type Story = StoryObj<typeof CardColor>;

export const dynamicProps: Story = {
  args: cardStyles.raw({}),
  render: (args) => {
    const [color, setColor] = useState('primary');
    return (
      <div>
        <button
          onClick={() => setColor(color === 'primary' ? 'neutral' : 'primary')}
        >
          variant switch : {color}
        </button>
        <CardColor {...args} variant={color}>
          card
        </CardColor>
      </div>
    );
  },
};
export const primary: Story = {
  args: {
    children: <Text color="white">Hello</Text>,
    variant: 'primary',
  },
};

export const secondary: Story = {
  args: {
    children: 'Hello',
    variant: 'secondary',
  },
};

export const elevated: Story = {
  args: {
    children: 'Hello',
    variant: 'elevated',
  },
};

export const neutralDefault: Story = {
  args: {
    children: 'Hello',
    variant: 'neutral',
  },
};
