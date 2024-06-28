import type { Meta, StoryObj } from "@storybook/react"
import { fn } from '@storybook/test';
import Button from "./Button"
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
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        onClick: fn()
    },
    render: ({ ...args }) => <StyledDiv><Button {...args}></Button></StyledDiv>
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;




export const Elevated = {
    args: {
        variant: 'elevated',
        children: 'Elevated Button'
    },
} satisfies Story;

export const ElevatedWithIcon = {
    args: {
        variant: 'elevated',
        children: <><Icon iconName="add" size={20} />Elevated Button</>
    },
} satisfies Story;

export const Filled = {
    args: {
        variant: 'filled',
        children: 'Filled Button'
    },
} satisfies Story;

export const FilledWithIcon = {
    args: {
        variant: 'filled',
        children: <><Icon iconName="add" size={20} />Filled Button</>
    },
} satisfies Story;

export const Outlined = {
    args: {
        variant: 'outlined',
        children: 'Outlined Button'
    },
} satisfies Story;

export const OutlinedWithIcon = {
    args: {
        variant: 'outlined',
        children: <><Icon iconName="add" size={20} />Outlined Button</>
    },
} satisfies Story;

export const Text = {
    args: {
        variant: 'text',
        children: 'Text Button'
    },
} satisfies Story;

export const TextWithIcon = {
    args: {
        variant: 'text',
        children: <><Icon iconName="add" size={20} />Text Button</>
    },
} satisfies Story;

export const Tonal = {
    args: {
        variant: 'tonal',
        children: 'Tonal Button'
    },
} satisfies Story;

export const TonalWithIcon = {
    args: {
        variant: 'tonal',
        children: <><Icon iconName="add" size={20} />Tonal Button</>
    },
} satisfies Story;