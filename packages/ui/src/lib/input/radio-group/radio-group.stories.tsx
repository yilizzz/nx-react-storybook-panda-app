import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './radio-group';
import { radioGroup } from '@styled-system/ui/recipes';
import { useState } from 'react';
const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Input/RadioGroup',
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const primary: Story = {
  args: radioGroup.raw({}),
  render: (args) => {
    const [selected, setSelected] = useState('apple');
    const list = [
      { text: 'Apple', value: 'apple' },
      { text: 'Strawberry', value: 'strawberry' },
      { text: 'Orange', value: 'orange' },
    ];
    console.log(selected);
    return (
      <RadioGroup
        {...args}
        label="Choose un fruit pour ce midi"
        items={list}
        value={selected}
        onChange={setSelected}
      ></RadioGroup>
    );
  },
};
