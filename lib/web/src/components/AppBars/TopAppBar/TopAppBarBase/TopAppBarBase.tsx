"use client";
import React from 'react';
import styled from 'styled-components';
import { IconProps } from '../../../Icon';
import { IconButton, IconButtonProps } from '../../../Buttons';

export type TopAppBarVariant = 'center' | 'small' | 'medium' | 'large';

export type TopAppBarBaseProps = {
	variant: TopAppBarVariant;
}

export type TopAppBarIconProps = Pick<IconProps, 'iconName'> & Pick<IconButtonProps, 'onClick'>

export type TopAppBarProps = {
	headline: string,
	leadingIcon: TopAppBarIconProps,
	trailingIcons: TopAppBarIconProps[]
};


const TopAppBarIcon = ({ iconName, onClick }: TopAppBarIconProps) => (<IconButton variant='standard' onClick={onClick}><IconButton.Icon iconName={iconName} /></IconButton >)
export const LeadingIcon = ({ leadingIcon }: Pick<TopAppBarProps, 'leadingIcon'>) => <TopAppBarIcon {...leadingIcon} />
export const TrailingIcons = ({ trailingIcons }: Pick<TopAppBarProps, 'trailingIcons'>) => <TrailingIconsContainer>{trailingIcons.map(t => <TopAppBarIcon {...t} />)}</TrailingIconsContainer>
export const TopAppBarBase = styled.div(({ theme }) => ({
	...theme.shape.corner.none,
	boxSizing: 'border-box',
	backgroundColor: theme.color.surface,
	paddingLeft: 16,
	paddingRight: 16,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	columnGap: 24,
}));


export const TopRow = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	justifyContent: 'space-between',
	boxSizing: 'border-box'
}))



export const BottomRow = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  justify-content: flex-start;
  flex-grow: 1;
`;

export const TrailingIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

export default TopAppBarBase;
