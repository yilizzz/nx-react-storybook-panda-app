import { Slider } from '@ark-ui/react/slider';
import { css } from '@styled-system/ui/css';
import { slider } from '@styled-system/ui/recipes';
import { forwardRef } from 'react';
import { Text } from 'src/ui/lib/typography/text/text';
interface SliderProps {
  step: number;
  min: number;
  max: number;
  value: number[];
  onValueChange: (value: number[]) => void;
}
export const SliderSelect = forwardRef<HTMLDivElement, SliderProps>(
  ({ step, min, max, value, onValueChange, ...props }, ref) => {
    const classes = slider({});
    const times = (max - min) / step + 1;
    return (
      <Slider.Root
        {...props}
        ref={ref}
        setp={step}
        min={min}
        max={max}
        value={value}
        onValueChange={(details) => onValueChange(details.value)}
        className={css({
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
        })}
      >
        {/*   <Slider.Label>Label</Slider.Label>
      <Slider.ValueText /> */}
        <Slider.Control className={css({ width: '100%' })}>
          <Slider.Track className={classes.track}>
            <Slider.Range className={classes.range} />
          </Slider.Track>
          <Slider.Thumb index={0} className={classes.thumb}>
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
        <Slider.MarkerGroup className={css({ width: '100%' })}>
          {Array.from({ length: times }).map((_, i) => {
            const markerValue = min + i * step;

            return (
              <Slider.Marker key={i} value={markerValue}>
                <Text
                  style={{
                    left: `${markerValue}%`,
                    color: 'primary',
                  }}
                >
                  {markerValue}
                </Text>
              </Slider.Marker>
            );
          })}
        </Slider.MarkerGroup>
      </Slider.Root>
    );
  }
);
