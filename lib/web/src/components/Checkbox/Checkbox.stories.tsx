import type { Meta, StoryObj } from "@storybook/react"
import Checkbox from "./Checkbox"
import { useState } from "react";

const meta = {
    title: 'Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        checked: { control: 'boolean' },
        onChange: { action: 'changed' },
    },
    render: (args) => {
        const [checked, setChecked] = useState(args.checked);

        const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
            args.onChange(event);
        };

        return (

            <Checkbox {...args} checked={checked} onChange={handleCheckboxChange} />
        );
    }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;


export const Default = {
    args: {
    },
} satisfies Story;
