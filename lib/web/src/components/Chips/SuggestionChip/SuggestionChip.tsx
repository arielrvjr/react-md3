"use client";
import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography';
import { elevation } from '../../../function';
import { Icon, IconProps } from '../../Icon';

export type SuggestionChipProps = {
	label: string,
	iconName?: IconProps['iconName'],
	elevated: boolean
}

const SuggestionChip: React.FC<SuggestionChipProps> = ({ label, iconName, elevated }) => {
	return (
		<SuggestionChipStl elevated={elevated} iconName={iconName}>
			{iconName && (<Icon iconName={iconName} color='primary' size={16} />)}
			<Typography variant='label' size="large">{label}</Typography>
		</SuggestionChipStl>
	);
};

export const SuggestionChipStl = styled.div<Pick<SuggestionChipProps, 'elevated' | 'iconName'>>(({ theme, elevated, iconName }) => ({
	...theme.shape.corner.small,
	height: 32,
	outlineColor: theme.color.outline,
	outlineWidth: 1,
	outlineStyle: 'solid',
	color: theme.color.onSurfaceVariant,
	display: 'flex',
	alignItems: 'center',
	paddingLeft: iconName ? 8 : 16,
	paddingRight: 16,
	columnGap: 8,
	...(elevated && {
		boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
		backgroundColor: theme.color.surfaceContainerLow
	})
}));

export default SuggestionChip;
