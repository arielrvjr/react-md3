'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ElevatedCard } from './ElevatedCard';
import { FilledCard } from './FilledCard';
import { OutlinedCard } from './OutlinedCard';
import { BaseCardProps } from './BaseCard/BaseCard';

type CardVariant = 'elevated' | 'filled' | 'outlined';

export type CardProps = {
  variant: CardVariant;
} & BaseCardProps;

const CardVariants: Record<
  CardVariant,
  ({ children, ...props }: PropsWithChildren<BaseCardProps>) => JSX.Element
> = {
  elevated: ElevatedCard,
  filled: FilledCard,
  outlined: OutlinedCard,
};

/**
 * Renders different types of card components based on the variant prop.
 * @param variant - Specifies the type of card to render ('elevated', 'filled', or 'outlined').
 * @param children - The content to be displayed inside the card.
 * @param props - Additional properties that are passed down to the selected card component.
 * @returns JSX element of the rendered card component corresponding to the specified variant.
 */
const Card = ({
  variant = 'elevated',
  children,
  ...props
}: PropsWithChildren<CardProps>): JSX.Element => {
  const Current = CardVariants[variant];
  return <Current {...props}>{children}</Current>;
};

export default Card;
