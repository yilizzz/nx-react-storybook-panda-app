import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';
import { icon } from '@styled-system/ui/recipes';
import { NkAccessibility } from '@packages/icons';
import { css } from '@styled-system/ui/css';
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
  args: icon.raw({ as: NkAccessibility }),
  render: (args) => (
    <div className={css({ color: 'danger' })}>
      <Icon
        {...args}
        opacity={0.5}
        size={120}
        borderColor={'primary'}
        borderStyle={'solid'}
        borderWidth={1}
        borderRadius={'full'}
        boxShadow={'12px 12px 2px 1px rgba(0, 0, 255, 0.2)'}
        color="primary"
      />
    </div>
  ),
};
