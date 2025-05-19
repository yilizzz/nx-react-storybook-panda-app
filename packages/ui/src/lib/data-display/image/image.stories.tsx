import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './image';
import { image } from '@styled-system/ui/recipes';
import p from 'src/ui/assets/p.png';
import { css } from '@styled-system/ui/css';
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
    <Image
      {...args}
      src={p}
      width={200}
      height={200}
      borderRadius="sm"
      boxShadow={'12px 12px 2px 1px rgba(0, 0, 255, 0.2)'}
      className={css({
        borderColor: 'primary',
        borderStyle: 'solid',
        borderWidth: 1,
        opacity: 0.5,
      })}
    />
  ),
};
