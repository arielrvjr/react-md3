import type { Meta, StoryObj } from "@storybook/react"
import { fn } from '@storybook/test';
import Card from "./Card"
import Icon from "../Icon/Icon";
import styled from "styled-components";

const StyledDiv = styled.div(({ theme }) => ({
    backgroundColor: theme.color.background,
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
}));
const meta = {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
    render: ({ ...args }) => <StyledDiv><Card {...args}></Card></StyledDiv>
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default = {
    args: {
        children: `Card`
    },
} satisfies Story;

export const Elevated = {
    args: {
        variant: 'elevated',
        children: 'Elevated Card'
    },
} satisfies Story;

export const Filled = {
    args: {
        variant: 'filled',
        children: 'Filled Card'
    },
} satisfies Story;

export const Outlined = {
    args: {
        variant: 'outlined',
        children: 'Outlined Card'
    },
} satisfies Story;