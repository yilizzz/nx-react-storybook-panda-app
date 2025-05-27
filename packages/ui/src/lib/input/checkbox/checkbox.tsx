import { css, cx } from '@styled-system/ui/css';
import { checkbox, CheckboxVariantProps } from '@styled-system/ui/recipes';
import { forwardRef } from 'react';
interface CheckboxProps extends CheckboxVariantProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, variant, checked, onChange, ...props }, ref) => {
    const classes = checkbox({ variant });
    return (
      <label className={classes.root}>
        <input
          type="checkbox"
          className={css({ srOnly: true })}
          checked={checked}
          onChange={(event) => {
            onChange?.(event.target.checked);
          }}
          {...props}
          ref={ref}
        />

        <div
          className={cx(
            classes.control,
            css({ borderColor: checked ? 'primary.300' : 'neutral.200' })
          )}
        >
          {checked && <div className={classes.indicator}>✓</div>}
        </div>

        <span className={classes.label}>{label}</span>
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';
