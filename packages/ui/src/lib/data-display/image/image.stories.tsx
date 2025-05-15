import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './image';
import { image } from '@packages/ui/styled-system/recipes';
import p from '@packages/ui/src/assets/p.png';
import { Box } from '@packages/ui/styled-system/jsx';
const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Data-display/Image',
};
export default meta;
type Story = StoryObj<typeof Image>;

export const imageDefault: Story = {
  args: image.raw({}),
  render: (args) => <Image {...args} src={p} />,
};

export const pointed: Story = {
  args: image.raw({ variant: 'pointed' }),
  render: (args) => <Image {...args} src={p} />,
};

export const custom: Story = {
  args: image.raw({}),
  render: (args) => (
    <Image {...args} src={p} objectFit={'contain'} width={200} height={200} />
  ),
};
