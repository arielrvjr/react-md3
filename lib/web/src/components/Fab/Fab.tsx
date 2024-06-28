"use client";
import React, { PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';
import { Icon, IconProps } from '../Icon';
import { elevation as elevationFn } from '../../function';
import { ColorPaletteType, ElevationValue } from '@react-md3/style';

type FabVariant = 'primary' | 'secondary' | 'tertiary' | 'surface'

export type FabSize = 'small' | 'large'

export type FabProps = {
	variant: FabVariant,
	size?: FabSize,
	elevation?: ElevationValue
}

const FabContext = React.createContext<FabProps>({ variant: 'primary' });

const Fab = ({ children, variant, size, elevation }: PropsWithChildren<FabProps>) => {
	return (
		<FabContext.Provider value={{ variant, size }}>
			<FabStl variant={variant} size={size} elevation={elevation} >
				{children}
			</FabStl>
		</FabContext.Provider>
	);
};


const IconSize: Record<FabSize, IconProps['size']> = {
	'small': 24,
	'large': 36
}

const IconVariant: Record<FabVariant, IconProps['color']> = {
	'primary': 'onPrimaryContainer',
	'secondary': 'onSecondaryContainer',
	'tertiary': 'onTertiaryContainer',
	'surface': 'onSurface'
}

const FabIcon = (props: IconProps) => {
	const { size, variant } = useContext(FabContext);
	return <Icon {...props} color={IconVariant[variant]} size={IconSize[size ?? 'small']} />
}

const ContainerVariant: Record<FabVariant, keyof ColorPaletteType> = {
	'primary': 'primaryContainer',
	'secondary': 'secondaryContainer',
	'tertiary': 'tertiaryContainer',
	'surface': 'surface'
}

export const FabStl = styled.button<FabProps>(({ theme, variant, size, elevation }) => ({
	height: 56,
	width: 56,
	border: 0,
	padding: 0,
	backgroundColor: theme.color[ContainerVariant[variant]],
	boxShadow: elevationFn(elevation ?? theme.elevation.level3, theme.color.shadow),
	...theme.shape.corner.large,
	...(size === 'small' && {
		...theme.shape.corner.medium,
		height: 40,
		width: 40
	}),
	...(size === 'large' && {
		...theme.shape.corner.extraLarge,
		height: 96,
		width: 96,

	})
}));

Fab.Icon = FabIcon;
export default Fab;
