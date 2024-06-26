import { ColorThemeType } from './ColorThemeType';
import { ShapeType } from './ShapeType';
import { TypeScaleType } from './TypeScaleType';
import { ElevationType } from './ElevationType';
import { StateType } from './StateType';
import { PaletteType } from './PaletteType';

export type ThemeModeType = 'dark' | 'light';

type ThemeScheme = {
  light: ColorThemeType;
  dark: ColorThemeType;
};

export type ThemeType = {
  mode: ThemeModeType;
  typeScale: TypeScaleType;
  shape: ShapeType;
  elevation: ElevationType;
  state: StateType;
} & ColorThemeType;
