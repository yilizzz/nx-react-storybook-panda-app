import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { button } from '@styled-system/ui/recipes';
import { NkAeroplane, NkHeadphones } from '@packages/icons';
import { useState } from 'react';
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Buttons/Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const buttonDefault: Story = {
  args: button.raw({}),
  render: (args) => {
    const [color, setColor] = useState('primary');
    return (
      <div>
        <Button
          onClick={() =>
            setColor(color === 'primary' ? 'secondary' : 'primary')
          }
        >
          dynamic props : {color}
        </Button>
        <Button {...args} variant={color}>
          text
        </Button>
      </div>
    );
  },
};

export const primary: Story = {
  args: button.raw({
    variant: 'primary',
  }),
  render: (args) => (
    <Button {...args} iconRight={NkHeadphones}>
      text
    </Button>
  ),
};
export const secondarySizeLg: Story = {
  args: button.raw({
    variant: 'secondary',
    size: 'lg',
  }),
  render: (args) => (
    <Button {...args} size="lg" iconLeft={NkAeroplane}>
      text
    </Button>
  ),
};

export const outlinePrimary: Story = {
  args: button.raw({
    variant: 'outlinePrimary',
  }),
  render: (args) => <Button {...args}>text</Button>,
};
export const outlineSecondaryRounded: Story = {
  args: button.raw({
    variant: 'outlineSecondary',
    shape: 'rounded',
  }),
  render: (args) => <Button {...args}>text</Button>,
};

export const circlePrimary: Story = {
  args: button.raw({
    shape: 'circle',
  }),
  render: (args) => (
    <Button {...args} iconLeft={NkAeroplane} shape={'circle'} square></Button>
  ),
};

export const squareOutlineSecondary: Story = {
  args: button.raw({
    variant: 'outlineSecondary',
    square: true,
  }),
  render: (args) => <Button {...args} iconLeft={NkAeroplane}></Button>,
};
