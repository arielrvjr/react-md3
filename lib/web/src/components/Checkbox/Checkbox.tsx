import React from 'react';
import styled from 'styled-components';
import { Typography } from '../Typography';

const CheckboxContainer = styled.div(() => ({
	display: 'inline-flex',
	alignItems: 'center',
}));

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })({
	border: 0,
	clip: 'rect(0 0 0 0)',
	clippath: 'inset(50%)',
	height: '1px',
	margin: '-1px',
	overflow: 'hidden',
	padding: 0,
	position: 'absolute',
	whiteSpace: 'nowrap',
	width: '1px',
});

const StyledCheckbox = styled.div<{ checked: boolean }>(({ checked, theme }) => ({
	display: 'inline-block',
	width: '18px',
	height: '18px',
	transition: 'all 150ms',
	borderRadius: 2,
	position: 'relative',
	cursor: 'pointer',
	...(checked && {
		background: theme.color.primary,
	}),
	...(!checked && {
		outlineColor: theme.color.onSurfaceVariant,
		outlineWidth: 2,
		outlineStyle: 'solid'
	}),
	'&:after': {
		content: checked ? '"✔"' : '""',
		display: 'block',
		color: checked ? theme.color.onPrimary : theme.color.onSurface,
		textAlign: 'center',
		lineHeight: `${theme.typeScale.label.small.lineHeight}px`,
		fontSize: theme.typeScale.label.small.fontSize,
		fontFamily: theme.typeScale.label.small.fontFamily
	},

	[`${HiddenCheckbox}:focus + &`]: {
		boxShadow: `0 0 0 3px ${theme.color.secondary}`,
	},
}));


export type CheckboxProps = {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => (
	<CheckboxContainer>
		<HiddenCheckbox checked={checked} onChange={onChange} />
		<StyledCheckbox checked={checked} onClick={() => onChange({ target: { checked: !checked } } as React.ChangeEvent<HTMLInputElement>)} />
	</CheckboxContainer>
);

export default Checkbox;
