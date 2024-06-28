"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Icon, { IconProps } from '../Icon/Icon';
import { useRipple } from '../../hooks/useRipple';
import { RippleContainer } from '../RippleContainer';
import { BaseButton } from '../Button/BaseButton';
import { BaseIconButtonProps } from './BaseIconButton/BaseIconButton';
import { StandardIconButton } from './StandardIconButton';
import { FilledIconButton } from './FilledIconButton';
import { TonalIconButton } from './TonalIconButton';
import { OutlinedIconButton } from './OutlinedIconButton';

type IconButtonVariant = 'standard' | 'filled' | 'tonal' | 'outlined';


export type IconButtonProps = {
	variant: IconButtonVariant
} & BaseIconButtonProps


const VARIANTS = {
	standard: StandardIconButton,
	filled: FilledIconButton,
	tonal: TonalIconButton,
	outlined: OutlinedIconButton
}

const IconButton = ({ children, variant = 'standard', onClick, disabled = false }: PropsWithChildren<IconButtonProps>) => {
	const { ripples, createRipple } = useRipple();
	const Current = VARIANTS[variant];
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

IconButton.Icon = ({ ...iconProps }: IconProps) => (<Icon {...iconProps} size={iconProps.size ?? 24} />);

export default IconButton;
