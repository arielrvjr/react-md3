"use client";
import React from 'react';
import { Serializer } from 'v8';

const VARIANTS = {
	filled: 'material-icons',
	outlined: 'material-icons-outlined',
	round: "material-icons-round",
	sharp: "material-icons-sharp",
	twoTone: "material-icons-two-tone",
}

type SizeType = 20 | 24 | 40 | 48;

export type IconProps = {
	iconName: string,
	variant?: keyof typeof VARIANTS,
	size?: SizeType
	color?: string
}

const Icon = ({ iconName, color, variant = 'filled', size = 24 }: IconProps) => {
	return (
		<i className={VARIANTS[variant]} style={{ width: size, height: size, color: color }}> {iconName}</i >
	);
};

export default Icon;
