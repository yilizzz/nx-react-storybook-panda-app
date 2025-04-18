import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';
import { text } from '../../../../styled-system/recipes';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Typograph/Text',
};
export default meta;
type Story = StoryObj<typeof Text>;

export const textDefault: Story = {
  args: text.raw({}),
  render: (args) => <Text {...args}>text</Text>,
};

export const headLine: Story = {
  args: text.raw({
    variant: 'headLine',
  }),
  render: (args) => <Text {...args}>text</Text>,
};
export const sectionTitle: Story = {
  args: text.raw({
    variant: 'sectionTitle',
  }),
  render: (args) => <Text {...args}>text</Text>,
};

export const segmentTitle: Story = {
  args: text.raw({
    variant: 'segmentTitle',
  }),
  render: (args) => <Text {...args}>text</Text>,
};
export const itemTitle: Story = {
  args: text.raw({
    variant: 'itemTitle',
  }),
  render: (args) => <Text {...args}>text</Text>,
};
export const cardTitle: Story = {
  args: text.raw({
    variant: 'cardTitle',
  }),
  render: (args) => (
    <Text {...args}>
      {' '}
      <ins>Grow</ins> their business pipeline / Takes orders
    </Text>
  ),
};
export const blockTitle: Story = {
  args: text.raw({
    variant: 'blockTitle',
  }),
  render: (args) => <Text {...args}>text</Text>,
};
export const pointTitle: Story = {
  args: text.raw({
    variant: 'pointTitle',
    color: 'success',
    size: 'h2',
    lineHeight: 'h2',
    weight: 'normal',
    uppercase: true,
    underline: true,
  }),
  render: (args) => (
    <Text {...args}>
      variant: 'pointTitle', color: 'success', size: 'h2', lineHeight: 'h2',
      weight: 'normal', uppercase: true, underline: true,<a>link</a>{' '}
      <ins>insert</ins>
    </Text>
  ),
};
