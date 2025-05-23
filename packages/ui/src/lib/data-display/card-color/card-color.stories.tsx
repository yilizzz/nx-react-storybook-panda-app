import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@styled-system/ui/css';
import { CardColor } from './card-color';
import { NkHeadphones } from '@packages/icons';
const meta = {
  title: 'Data-display/CardColor',
  component: CardColor,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardColor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello',
    variant: 'primary',
  },
};

export const secondary: Story = {
  args: {
    children: 'Hello',
    variant: 'secondary',
  },
};
