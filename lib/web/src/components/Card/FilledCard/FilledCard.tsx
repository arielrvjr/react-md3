"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import BaseCard, { BaseCardProps } from '../BaseCard/BaseCard';
import { elevation } from '../../../function';
import { hexToRgba } from '../../../function';

export type FilledCardProps = {
	// types...
}

const FilledCard = ({ children, ...props }: PropsWithChildren<BaseCardProps>) => {
	return (
		<FilledCardStl {...props}>{children}
		</FilledCardStl>
	);
};

export const FilledCardStl = styled(BaseCard)(({ theme, disabled }) => ({
	boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
	...(!disabled && {
		backgroundColor: theme.color.surfaceContainerHighest,
		color: theme.color.surfaceTint,
		'& > i': {
			color: theme.color.primary,
			height: '24px',

		},
		'&:hover': {
			boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
			backgroundColor: hexToRgba(theme.color.onSurface, theme.state.hover.container),
		},
		'&:active': {
			boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
			backgroundColor: hexToRgba(theme.color.onSurface, theme.state.pressed.container),
		}
	}),
	...(disabled && {
		backgroundColor: hexToRgba(theme.color.surfaceVariant, theme.state.disabled.container),
	})
}));

export default FilledCard;
