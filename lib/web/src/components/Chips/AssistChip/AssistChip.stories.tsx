import type { Meta, StoryObj } from "@storybook/react"
import AssistChip from "./AssistChip"

const meta = {
    title: 'Chips/AssistChip',
    component: AssistChip,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof AssistChip>;

export default meta;

type Story = StoryObj<typeof AssistChip>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
