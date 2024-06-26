export type CornerContentType = {
    borderRadius: number
}

export type CornerType = {
    none: CornerContentType,
    extraSmall: CornerContentType,
    extraSmallTop: CornerContentType,
    small: CornerContentType,
    medium: CornerContentType,
    large: CornerContentType,
    largeEnd: CornerContentType,
    largeTop: CornerContentType,
    extraLarge: CornerContentType,
    extraLargeTop: CornerContentType,
    full: CornerContentType
}

export type ShapeType = {
    corner : CornerType
}