export interface ViewportSize {
    height: number;
    width: number;
}

export interface BreakPointType {
    [breakpoint: string]: number;
}

export enum DeviceType {
    Desktop = "desktop",
    Tablet = "tablet",
    Mobile = "mobile"
}