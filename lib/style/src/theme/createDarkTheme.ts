import { ColorThemeType, PaletteType } from '../types';

export const createDarkTheme = (palette: PaletteType): ColorThemeType => ({
  color: {
    primary: palette.primary80,
    primaryContainer: palette.primary30,
    secondary: palette.secondary80,
    secondaryContainer: palette.secondary30,
    tertiary: palette.tertiary80,
    tertiaryContainer: palette.tertiary30,
    surface: palette.neutral10,
    surfaceVariant: palette.neutralVariant30,
    surfaceContainerHighest: palette.neutral22,
    surfaceContainerHigh: palette.neutral17,
    surfaceContainer:  palette.neutral12,
    surfaceContainerLow: palette.neutral10,
    surfaceContainerLowest: palette.neutral4,
    surfaceTintColor: palette.primary80,
    surfaceTint: palette.primary80,
    background: palette.neutral10,
    error: palette.error80,
    errorContainer: palette.error30,
    onPrimary: palette.primary20,
    onPrimaryContainer: palette.primary90,
    onSecondary: palette.secondary20,
    onSecondaryContainer: palette.secondary90,
    onTertiary: palette.tertiary20,
    onTertiaryContainer: palette.tertiary90,
    onSurface: palette.neutral90,
    onSurfaceVariant: palette.neutralVariant80,
    onError: palette.error20,
    onErrorContainer: palette.error80,
    onBackground: palette.neutral90,
    outline: palette.neutralVariant60,
    outlineVariant: palette.neutralVariant30,
    shadow: palette.neutral0,
    inverseSurface: palette.neutral90,
    inverseOnSurface: palette.neutral20,
    inversePrimary: palette.primary40,
    scrim: palette.neutral0,
  },
});
