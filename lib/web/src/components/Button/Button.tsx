import { PropsWithChildren } from 'react';
import { ElevatedButton } from './ElevatedButton';
import { FilledButton } from './FilledButton';
import { TonalButton } from './TonalButton';
import { OutlinedButton } from './OutlinedButton';
import { TextButton } from './TextButton';
import { BaseButtonProps } from './BaseButton';
import { useRipple } from '../../hooks/useRipple';
import { RippleContainer } from '../RippleContainer';
import styled from 'styled-components';

type ButtonVariant = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';

export type ButtonProps = {
  variant: ButtonVariant;
} & BaseButtonProps;

const ButtonVariants: Record<
  ButtonVariant,
  ({ children, onClick }: PropsWithChildren<BaseButtonProps>) => JSX.Element
> = {
  elevated: ElevatedButton,
  filled: FilledButton,
  tonal: TonalButton,
  outlined: OutlinedButton,
  text: TextButton,
};



const Button = ({
  variant = 'elevated',
  children,
  disabled = false,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const Current = ButtonVariants[variant];
  const { ripples, createRipple } = useRipple();

  return (
    <Current onClick={(event) => { createRipple(event as React.MouseEvent<HTMLButtonElement, MouseEvent>); onClick && onClick() }} disabled={disabled}>
      {children}
      {ripples.map((ripple, index) => (
        <RippleContainer
          key={index}
          x={ripple.x}
          y={ripple.y}
          size={ripple.size}
        />
      ))}
    </Current>
  );
};

export default Button;
