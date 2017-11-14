import { EventEmitter } from '@stencil/core';
export declare class Dropdown {
    title: string;
    toggle: boolean;
    onToggle: EventEmitter;
    render(): JSX.Element;
    toggleClick(): void;
}
