import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './pill';
import { pill } from '@styled-system/ui/recipes';
import { Text } from 'src/ui/lib/typography/text/text';
import { NkAeroplane } from '@packages/icons';
const meta: Meta<typeof Pill> = {
  component: Pill,
  title: 'Data-display/Pill',
};
export default meta;
type Story = StoryObj<typeof Pill>;

export const pillDefault: Story = {
  args: pill.raw({}),
  render: (args) => (
    <Pill {...args}>
      <Text>Grow</Text>{' '}
    </Pill>
  ),
};

export const square: Story = {
  args: pill.raw({ variant: 'square' }),
  render: (args) => <Pill {...args} icon={NkAeroplane}></Pill>,
};

export const squareRed: Story = {
  args: pill.raw({ variant: 'square' }),
  render: (args) => (
    <Pill {...args} icon={NkAeroplane} color={'secondary'}></Pill>
  ),
};

export const squareAlt: Story = {
  args: pill.raw({ variant: 'squareAlt' }),
  render: (args) => <Pill {...args} icon={NkAeroplane} color="white"></Pill>,
};
export const inverse: Story = {
  args: pill.raw({ variant: 'inverse' }),
  render: (args) => (
    <Pill {...args} icon={NkAeroplane}>
      <Text>Grow</Text>
    </Pill>
  ),
};
