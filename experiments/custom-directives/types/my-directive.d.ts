import { ElementPart } from 'lit';
import { PartInfo } from 'lit/directive.js';
export declare const myDirective: (name: string, value: string) => import("lit-html/directive").DirectiveResult<{
    new (partInfo: PartInfo): {
        update(partInfo: ElementPart, args: [name: string, value: string]): void;
        render(name: string, value: string): import("lit-html").TemplateResult<1>;
        readonly _$isConnected: boolean;
    };
}>;
