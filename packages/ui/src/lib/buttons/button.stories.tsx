import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { button } from '../../../styled-system/recipes';
import { NkAeroplane, NkHeadphones } from '../../../../icons/src';
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Buttons/Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const buttonDefault: Story = {
  args: button.raw({}),
  render: (args) => <Button {...args}>text</Button>,
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
    <Button {...args} iconLeft={NkAeroplane}>
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
export const outlineSecondary: Story = {
  args: button.raw({
    variant: 'outlineSecondary',
  }),
  render: (args) => <Button {...args}>text</Button>,
};

export const iconPrimary: Story = {
  args: button.raw({
    variant: 'primary',
  }),
  render: (args) => (
    <Button {...args} iconLeft={NkAeroplane} shape={'square'}></Button>
  ),
};
