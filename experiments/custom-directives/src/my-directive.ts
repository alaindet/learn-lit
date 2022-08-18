import { ElementPart } from 'lit';
import { Directive, directive, DirectiveParameters, PartInfo } from 'lit/directive.js';

export const myDirective = directive(class MyDirective extends Directive {
  
  constructor(partInfo: PartInfo) {
    super(partInfo);
    console.log('MyDirective.constructor', partInfo);
  }

  render(name: string, value: string) {}

  update(partInfo: ElementPart, args: DirectiveParameters<this>) {
    console.log('MyDirective.update', partInfo, args);
    const name = args[0];
    const value = args[1];
    partInfo.element.setAttribute(name, value);
  }
});