import type { Meta, StoryObj } from '@storybook/react';
import { SliderSelect } from './slider-select';
import { slider } from '@styled-system/ui/recipes';
import { useState } from 'react';
const meta: Meta<typeof SliderSelect> = {
  component: SliderSelect,
  title: 'Input/SliderSelect',
};
export default meta;
type Story = StoryObj<typeof SliderSelect>;

export const sliderDefault: Story = {
  args: slider.raw({}),
  render: (args) => {
    const [value, setValue] = useState([0]);
    console.log(value);
    return (
      <SliderSelect
        {...args}
        step={1}
        min={0}
        max={10}
        value={value}
        onValueChange={setValue}
      ></SliderSelect>
    );
  },
};
