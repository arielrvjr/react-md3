export type StateContentType = {
    container: number;
    content?: number;
}
export type StateType = {
    hover: StateContentType,
    focus: StateContentType,
    pressed: StateContentType,
    dragged: StateContentType,
    disabled: StateContentType,
    selected: StateContentType
}