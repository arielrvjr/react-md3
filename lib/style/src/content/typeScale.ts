import { TypeScaleType } from '../types';
import { typeFace } from './typeFace';

export const typeScale: TypeScaleType = {
  display: {
    large: {
      fontFamily: typeFace.brand,
      lineHeight: 64,
      fontSize: 57,
      letterSpacing: 0,
      fontWeight: typeFace.weight.regular,
    },
    medium: {
      fontFamily: typeFace.brand,
      lineHeight: 52,
      fontSize: 45,
      letterSpacing: 0,
      fontWeight: typeFace.weight.regular,
    },
    small: {
      fontFamily: typeFace.brand,
      lineHeight: 44,
      fontSize: 36,
      letterSpacing: 0,
      fontWeight: typeFace.weight.regular,
    },
  },
  headLine: {
    large: {
      fontFamily: typeFace.brand,
      lineHeight: 40,
      fontSize: 32,
      letterSpacing: 0,
      fontWeight: typeFace.weight.regular,
    },
    medium: {
      fontFamily: typeFace.brand,
      lineHeight: 36,
      fontSize: 28,
      letterSpacing: 0,
      fontWeight: typeFace.weight.regular,
    },
    small: {
      fontFamily: typeFace.brand,
      lineHeight: 32,
      fontSize: 24,
      letterSpacing: 0,
      fontWeight: typeFace.weight.regular,
    },
  },
  title: {
    large: {
      fontFamily: typeFace.brand,
      lineHeight: 28,
      fontSize: 22,
      letterSpacing: 0,
      fontWeight: typeFace.weight.regular,
    },
    medium: {
      fontFamily: typeFace.plain,
      lineHeight: 24,
      fontSize: 16,
      letterSpacing: 0.15,
      fontWeight: typeFace.weight.medium,
    },
    small: {
      fontFamily: typeFace.plain,
      lineHeight: 20,
      fontSize: 14,
      letterSpacing: 0.1,
      fontWeight: typeFace.weight.regular,
    },
  },
  label: {
    large: {
      fontFamily: typeFace.plain,
      lineHeight: 20,
      fontSize: 14,
      letterSpacing: 0.1,
      fontWeight: typeFace.weight.medium,
    },
    medium: {
      fontFamily: typeFace.plain,
      lineHeight: 16,
      fontSize: 12,
      letterSpacing: 0.5,
      fontWeight: typeFace.weight.medium,
    },
    small: {
      fontFamily: typeFace.plain,
      lineHeight: 16,
      fontSize: 11,
      letterSpacing: 0.5,
      fontWeight: typeFace.weight.regular,
    },
  },
  body: {
    large: {
      fontFamily: typeFace.plain,
      lineHeight: 24,
      fontSize: 16,
      letterSpacing: 0.5,
      fontWeight: typeFace.weight.regular,
    },
    medium: {
      fontFamily: typeFace.plain,
      lineHeight: 20,
      fontSize: 14,
      letterSpacing: 0.25,
      fontWeight: typeFace.weight.medium,
    },
    small: {
      fontFamily: typeFace.plain,
      lineHeight: 16,
      fontSize: 12,
      letterSpacing: 0.4,
      fontWeight: typeFace.weight.regular,
    },
  },
};
