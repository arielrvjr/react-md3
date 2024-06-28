import type { Meta, StoryObj } from "@storybook/react"
import TopAppBar from "./TopAppBar"
import { fn } from "@storybook/test";

const meta = {
    title: 'TopAppBar',
    component: TopAppBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof TopAppBar>;

export default meta;

type Story = StoryObj<typeof TopAppBar>;

export const Default = {
    args: {
        leadingIcon: {
            variant: 'standard',
            iconProps: { iconName: 'menu' }, onClick: fn()
        },
        headLine: 'Title Large',
        trailingIcons: [{
            variant: 'standard',
            iconProps: { iconName: 'account_circle' }, onClick: fn()
        }, {
            variant: 'standard',
            iconProps: { iconName: 'settings' }, onClick: fn()
        }],
    },
} satisfies Story;
