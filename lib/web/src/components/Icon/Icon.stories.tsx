import type { Meta, StoryObj } from "@storybook/react"
import Icon from "./Icon"
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
    title: 'Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        iconName: {
            control: {
                type: 'select'
            }
        },
        color: {
            control: {
                type: 'select'
            }
        }
    },
    render: ({ ...args }) => <StyledDiv><Icon {...args}></Icon></StyledDiv>

} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default = {
    args: {
        iconName: 'face'
    },
} satisfies Story;
