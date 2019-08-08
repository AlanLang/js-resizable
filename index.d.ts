export declare class Resizable {
    private element;
    private options;
    constructor(el: HTMLElement, options?: OptionsType);
    setPosition(top: number, left: number): void;
    private createHandles;
    private createHandle;
    private resize;
    private getStyleByDirection;
}
export interface OptionsType {
    handles?: string[];
    threshold?: number;
}
export interface ConfigType {
    baseX: number;
    baseY: number;
    width: string;
    height: string;
    x: number;
    y: number;
    offsetTop: number;
    offsetLeft: number;
}
