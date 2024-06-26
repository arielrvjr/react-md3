import { PropsWithChildren } from 'react';
import { ElevatedButton } from './ElevatedButton';
import { FilledButton } from './FilledButton';
import { TonalButton } from './TonalButton';
import { OutlinedButton } from './OutlinedButton';
import { TextButton } from './TextButton';
import { BaseButtonProps } from './BaseButton';

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
  return (
    <Current onClick={onClick} disabled={disabled}>
      {children}
    </Current>
  );
};

export default Button;
