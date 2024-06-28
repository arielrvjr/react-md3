import type { Meta, StoryObj } from "@storybook/react"
import IconButton from "./IconButton"
import styled from "styled-components";
import { fn } from '@storybook/test';

const StyledDiv = styled.div(({ theme }) => ({
    backgroundColor: theme.color.background,
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
}));
const meta = {
    title: 'IconButton',
    component: IconButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {

    },
    render: ({ ...args }) => <StyledDiv><IconButton {...args}></IconButton></StyledDiv>

} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default = {
    args: {
        children: <IconButton.Icon iconName="face" />,
        onClick: fn()
    },
} satisfies Story;

export const Filled = {
    args: {
        variant: 'filled',
        children: <IconButton.Icon iconName="face" variant='round' />,
        onClick: fn()
    },
} satisfies Story;

export const Outlined = {
    args: {
        variant: 'outlined',
        children: <IconButton.Icon iconName="face" variant='outlined' />,
        onClick: fn()
    },
} satisfies Story;

export const Standard = {
    args: {
        variant: 'standard',
        children: <IconButton.Icon iconName="face" variant='outlined' />,
        onClick: fn()
    },
} satisfies Story;

export const Tonal = {
    args: {
        variant: 'tonal',
        children: <IconButton.Icon iconName="face" />,
        onClick: fn()
    },
} satisfies Story;