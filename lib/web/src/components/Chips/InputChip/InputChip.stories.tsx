import type { Meta, StoryObj } from "@storybook/react"
import InputChip from "./InputChip"

const meta = {
    title: 'Chips/InputChip',
    component: InputChip,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
} satisfies Meta<typeof InputChip>;

export default meta;

type Story = StoryObj<typeof InputChip>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
