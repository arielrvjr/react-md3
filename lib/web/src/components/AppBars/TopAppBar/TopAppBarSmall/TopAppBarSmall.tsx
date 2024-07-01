"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { LeadingIcon, TopAppBarBase, TopAppBarProps, TrailingIcons } from '../TopAppBarBase';
import { Typography } from '../../../Typography';


const TopAppBarSmall: React.FC<PropsWithChildren<TopAppBarProps>> = ({
	headline,
	trailingIcons,
	leadingIcon
}) => {
	return (
		<TopAppBarSmallStl>
			<LeadingIcon leadingIcon={leadingIcon} />
			<TopAppBarTypography variant='title' size='large' color="onSurface">{headline}</TopAppBarTypography>
			<TrailingIcons trailingIcons={trailingIcons} />
		</TopAppBarSmallStl>
	);
};
const TopAppBarTypography = styled(Typography)(() => ({
	flexGrow: 1
}));

export const TopAppBarSmallStl = styled(TopAppBarBase)(({ theme }) => ({
	height: 64,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',

}));

export default TopAppBarSmall;
