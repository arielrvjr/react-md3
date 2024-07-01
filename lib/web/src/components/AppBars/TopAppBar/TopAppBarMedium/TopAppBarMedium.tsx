"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BottomRow, LeadingIcon, TopAppBarBase, TopAppBarProps, TopRow, TrailingIcons } from '../TopAppBarBase';
import { Typography } from '../../../Typography';


const TopAppBarMedium: React.FC<PropsWithChildren<TopAppBarProps>> = ({ leadingIcon, trailingIcons, headline }) => {
	return (
		<TopAppBarMediumStl>
			<TopRow>
				<LeadingIcon leadingIcon={leadingIcon} />
				<TrailingIcons trailingIcons={trailingIcons} />
			</TopRow>
			<BottomRow>
				<Typography variant='headline' size='small' color="onSurface">{headline}</Typography>
			</BottomRow>
		</TopAppBarMediumStl>
	);
};

export const TopAppBarMediumStl = styled(TopAppBarBase)(({ theme }) => ({
	height: 112,
	paddingTop: 20,
	paddingBottom: 24,
}));

export default TopAppBarMedium;
