import { Property } from 'csstype';

export type TypeScaleContentType = {
  fontFamily?: string;
  lineHeight?: number;
  fontSize?: number;
  fontStyle?: 'normal' | 'italic';
  letterSpacing?: number;
  fontWeight?: Property.FontWeight;
};

export type TypeScaleScaleType = {
  large: TypeScaleContentType;
  medium: TypeScaleContentType;
  small: TypeScaleContentType;
};

export type TypeScaleType = {
  display: TypeScaleScaleType;
  headline: TypeScaleScaleType;
  title: TypeScaleScaleType;
  label: TypeScaleScaleType;
  body: TypeScaleScaleType;
};
