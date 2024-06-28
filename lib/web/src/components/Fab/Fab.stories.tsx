import type { Meta, StoryObj } from "@storybook/react"
import Fab, { FabProps, FabSize } from './Fab';
import styled from "styled-components";

const StyledDiv = styled.div(({ theme }) => ({
    backgroundColor: theme.color.background,
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh'
}));

const meta = {
    title: 'Fab',
    component: Fab,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    },
    render: ({ ...args }) => <StyledDiv><Fab {...args} /></StyledDiv>

} satisfies Meta<typeof Fab>;

export default meta;

type Story = StoryObj<typeof Fab>;

const variants: FabProps['variant'][] = ["primary", "secondary", "tertiary", "surface"];
const sizes: FabSize[] = ['small', 'large']

export const Default = {
    args: {
        children: <Fab.Icon iconName="face" />
    },
} satisfies Story;

export const All = {
    args: {
        children: <Fab.Icon iconName="face" />,
    },
    render: ({ ...args }) => (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
            {variants.map(v => {

                return <><Fab variant={v} ><Fab.Icon iconName="face" /></Fab>
                    {sizes.map((s) => ((<Fab key={v + (s as string)} variant={v} size={s}><Fab.Icon iconName="face" /></Fab>)))}
                </>
            })}
        </div>
    )


} satisfies Story;

export const Primary = {
    args: {
        variant: 'primary',
        children: <Fab.Icon iconName="face" />
    },
} satisfies Story;
export const PrimarySmall = {
    args: {
        variant: 'primary',
        size: 'small',
        children: <Fab.Icon iconName="face" />
    },
} satisfies Story;

export const PrimaryLarge = {
    args: {
        variant: 'primary',
        size: 'large',
        children: <Fab.Icon iconName="face" />
    },
} satisfies Story;
