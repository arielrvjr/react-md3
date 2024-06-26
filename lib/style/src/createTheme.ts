import { DEFAULT_PALETTE, elevation, shape, state, typeScale } from "./content"
import { createDarkTheme, createLightTheme } from "./theme"
import { ThemeType, PaletteType, ThemeModeType } from "./types"

export type createThemeProps ={
    mode?: ThemeModeType,
    palette? : PaletteType
}

export const createTheme = ({mode='light',palette = DEFAULT_PALETTE}: createThemeProps) : ThemeType => {
    const darkTheme = createDarkTheme(palette);
    const lightTheme = createLightTheme(palette);
    const themes = {dark: darkTheme, light: lightTheme} 
    return {
        mode,
        elevation,
        shape,
        state,
        typeScale,
        ...themes[mode]
    }
}