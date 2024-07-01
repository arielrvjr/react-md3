'use client';
import React, { PropsWithChildren } from 'react';
import { TopAppBarSmall } from './TopAppBarSmall';
import { TopAppBarMedium } from './TopAppBarMedium';
import { TopAppBarLarge } from './TopAppBarLarge';
import { TopAppBarCenter } from './TopAppBarCenter';
import { TopAppBarBaseProps, TopAppBarProps as TopAppBarInternalProps } from './TopAppBarBase/TopAppBarBase';



const VARIANTS: Record<TopAppBarBaseProps['variant'], React.FC<PropsWithChildren<TopAppBarInternalProps>>> = {
  'center': TopAppBarCenter,
  'small': TopAppBarSmall,
  'medium': TopAppBarMedium,
  'large': TopAppBarLarge
}

export type TopAppBarProps = TopAppBarBaseProps & TopAppBarInternalProps
const TopAppBar = ({
  variant = 'center',
  ...props
}: TopAppBarProps) => {
  const Current = VARIANTS[variant]
  return (<Current {...props} />);
};





export default TopAppBar;
