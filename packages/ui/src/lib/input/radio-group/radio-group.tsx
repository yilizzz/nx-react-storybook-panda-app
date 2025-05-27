import { css, cx } from '@styled-system/ui/css';
import { radioGroup, CheckboxVariantProps } from '@styled-system/ui/recipes';
import { forwardRef } from 'react';
interface CheckboxProps extends CheckboxVariantProps {
  label: string;
  items: { text: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}
export const RadioGroup = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, variant, items, value, onChange, ...props }, ref) => {
    const classes = radioGroup({ variant });
    const handleChange = (event) => {
      onChange(event.target.value);
    };
    return (
      <label className={classes.root} ref={ref} {...props}>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <div className={classes.itemText}>{item.text}</div>
              <input
                type="radio"
                id={item.value}
                className={classes.itemInput}
                value={item.value}
                onChange={handleChange}
                checked={value === item.value}
              />
            </div>
          );
        })}
      </label>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';
