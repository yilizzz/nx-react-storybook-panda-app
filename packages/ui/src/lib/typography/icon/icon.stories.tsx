import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';
import { icon } from '../../../../styled-system/recipes';
//import { NkAccessibility } from '@packages/icons';
import { NkAccessibility } from '../../../../../icons/src/components';
import { css } from '@packages/ui/styled-system/css';
const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Typograph/Icon',
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const iconDefault: Story = {
  args: icon.raw({ as: NkAccessibility }),
  render: (args) => (
    <div className={css({ color: 'primary' })}>
      <Icon {...args} />
    </div>
  ),
};
export const iconCustom: Story = {
  args: icon.raw({ as: NkAccessibility, size: 120 }),
  render: (args) => (
    <div className={css({ color: 'danger' })}>
      <Icon {...args} />
    </div>
  ),
};
