import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';
import { icon } from '../../../../styled-system/recipes';
//import { NkAccessibility } from '@packages/icons';
import { NkAccessibility } from '../../../../../icons/src/components';
const meta: Meta<typeof Text> = {
  component: Icon,
  title: 'Typograph/Icon',
};
export default meta;
type Story = StoryObj<typeof Text>;

export const iconDefault: Story = {
  args: icon.raw({ as: NkAccessibility }),
  render: (args) => <Icon {...args} />,
};
export const iconCustom: Story = {
  args: icon.raw({ as: NkAccessibility, color: 'success', size: 120 }),
  render: (args) => <Icon {...args} />,
};
