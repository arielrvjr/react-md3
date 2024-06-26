import { PropsWithChildren } from "react";
import { ThemeType, createTheme, createThemeProps } from '@react-md3/style';
import {ThemeProvider as ThemeProviderStyled} from 'styled-components';
const DEFAULT_THEME = "light"

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}

const ThemeProvider = ({mode = DEFAULT_THEME, palette, children}: PropsWithChildren<createThemeProps>) =>{
const theme = createTheme({mode, palette});
return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
};

export default ThemeProvider