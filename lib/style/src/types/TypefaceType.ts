import type * as CSS from 'csstype';

export type TypefaceWeightType = {
    regular: CSS.Property.FontWeight,
    medium: CSS.Property.FontWeight 
}
export type TypefaceType = {
    brand: string,
    plain: string,
    weight: TypefaceWeightType
}