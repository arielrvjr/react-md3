"use client";
import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../IconButton';
import { IconButtonProps } from '../../IconButton/IconButton';

export type TopAppBarVariant = 'center' | 'small' | 'medium' | 'large'

export type TopAppBarProps = {
	variant: TopAppBarVariant
	headLine: string,
	leadingIcon?: IconButtonProps,
	trailingIcons?: IconButtonProps[]
}

const TopAppBar: React.FC<TopAppBarProps> = ({ variant, headLine, leadingIcon, trailingIcons }: TopAppBarProps) => {
	return (
		<TopAppBarStl>
			{/* {leadingIcon && <IconButton {...leadingIcon} iconProps={{ ...leadingIcon?.iconProps, color: "onSurface" }} />} */}
			<span>{headLine}</span>
			{/* {trailingIcons && trailingIcons.length > 0 && trailingIcons.map(trailingIcon => (<IconButton key={trailingIcon.iconProps.iconName} {...trailingIcon} iconProps={{ ...trailingIcon?.iconProps, color: "onSurface" }} />))} */}
		</TopAppBarStl>
	);
};

export const TopAppBarStl = styled.div(({ theme }) => ({
	...theme.shape.corner.none,
	backgroundColor: theme.color.surface,
	height: 64,
	paddingLeft: 16,
	paddingRight: 16,
	fontFamily: theme.typeScale.title.large.fontFamily,
	lineHeight: `${theme.typeScale.title.large.lineHeight}px`,
	fontSize: theme.typeScale.title.large.fontSize,
	letterSpacing: theme.typeScale.title.large.letterSpacing,
	fontWeight: theme.typeScale.title.large.fontWeight,
	color: theme.color.onSurface,

	'&>span': {
		flexGrow: '1',
		textAlign: 'center'
	},
	display: 'flex',
	alignItems: 'center',
	columnGap: 24
}));

export default TopAppBar;
