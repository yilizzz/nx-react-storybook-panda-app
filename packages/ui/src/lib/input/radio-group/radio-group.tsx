import { radioGroup, CheckboxVariantProps } from '@styled-system/ui/recipes';
import { forwardRef, useEffect, useState } from 'react';
import { Text } from 'src/ui/lib/typography/text/text';
interface CheckboxProps extends CheckboxVariantProps {
  label: string;
  items: { text: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}
export const RadioGroup = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, variant, items, value, onChange, ...props }, ref) => {
    const classes = radioGroup({ variant });

    const [localValue, setLocalValue] = useState(value);
    useEffect(() => {
      setLocalValue(value);
    }, [value]);
    const handleChange = (event) => {
      onChange(event.target.value);
      setLocalValue(event.target.value);
    };
    return (
      <div className={classes.root} ref={ref} {...props}>
        <Text weight="medium">{label}</Text>
        {items.map((item) => {
          return (
            <label className={classes.item} key={item.value}>
              <input
                type="radio"
                name={label}
                id={item.value}
                className={classes.input}
                value={item.value}
                onChange={handleChange}
                checked={localValue === item.value}
              />
              <div
                className={classes.control}
                data-checked={localValue === item.value ? '' : undefined}
              ></div>
              <Text color={localValue === item.value ? 'secondary' : undefined}>
                {item.text}
              </Text>
            </label>
          );
        })}
      </div>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';
