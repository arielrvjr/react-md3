"use client";
import styled from 'styled-components';
import { elevation, hexToRgba } from '../../../function';

export type BaseButtonProps = {
	onClick: () => void;
	disabled?: boolean
}

export const BaseButton =  styled.button(({ theme, disabled }) => ({
	...theme.shape.corner.full,
	height: '40px',
	paddingLeft: 24,
	paddingRight: 24,
	textAlign: 'center',
	fontFamily: theme.typeScale.label.large.fontFamily,
	lineHeight: `${theme.typeScale.label.large.lineHeight}px`,
	fontSize: theme.typeScale.label.large.fontSize,
	fontWeight: theme.typeScale.label.large.fontWeight,
	letterSpacing: theme.typeScale.label.large.letterSpacing,
	
	...(disabled && {
		"&:disabled": {
			boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
			backgroundColor:  hexToRgba(theme.color.onSurface,0.12),
			color: hexToRgba(theme.color.onSurface,theme.state.disabled.content)
		}
	}),
	
}));



