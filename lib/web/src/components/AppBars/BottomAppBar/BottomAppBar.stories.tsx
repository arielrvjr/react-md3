import type { Meta, StoryObj } from "@storybook/react"
import BottomAppBar from "./BottomAppBar"
import styled from "styled-components";
import { Fab } from "../../Fab";
import { fn } from "@storybook/test";
import { Icon } from "../../Icon";
const StyledDiv = styled.div(({ theme }) => ({
    backgroundColor: theme.color.background,
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh'
}));

const meta = {
    title: 'BottomAppBar',
    component: BottomAppBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
    render: ({ ...args }) => <StyledDiv><BottomAppBar {...args} /></StyledDiv>

} satisfies Meta<typeof BottomAppBar>;

export default meta;

type Story = StoryObj<typeof BottomAppBar>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;

export const withFab = {
    args: {
        children: <>
            <BottomAppBar.Icons>
                <BottomAppBar.Icon variant="standard" onClick={fn()}><Icon iconName="edit" size={16} /></BottomAppBar.Icon>
                <BottomAppBar.Icon variant="standard" onClick={fn()}><Icon iconName="mic" size={16} /></BottomAppBar.Icon>

            </BottomAppBar.Icons >
            <BottomAppBar.FAB variant="primary"><Fab.Icon iconName="add" /></BottomAppBar.FAB>
        </>
    },
} satisfies Story;