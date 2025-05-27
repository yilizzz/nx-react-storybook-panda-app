import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { checkbox } from '@styled-system/ui/recipes';
import { useState } from 'react';
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Input/Checkbox',
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const primary: Story = {
  args: checkbox.raw({}),
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        label="check me"
        checked={checked}
        onChange={setChecked}
      ></Checkbox>
    );
  },
};
export const secondary: Story = {
  args: checkbox.raw({ variant: 'secondary' }),
  render: (args) => {
    const [checked, setChecked] = useState(true);

    return (
      <Checkbox
        {...args}
        label={'check me'}
        checked={checked}
        onChange={setChecked}
      ></Checkbox>
    );
  },
};
