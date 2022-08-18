import { ElementPart, render } from 'lit';
import { Directive, DirectiveParameters, directive } from 'lit/directive.js';

import { MyTooltip } from './my-tooltip';

export const myTooltip = directive(class TooltipDirective extends Directive {

  didSetupLazy = false;
  tooltipContent?: unknown;
  part?: ElementPart;
  tooltip?: MyTooltip;

  render(tooltipContent: unknown = '') {}

  update(part: ElementPart, [tooltipContent]: DirectiveParameters<this>) {
    this.tooltipContent = tooltipContent;
    this.part = part;

    if (!this.didSetupLazy) {
      this.setupLazy();
    }

    if (this.tooltip) {
      this.renderTooltipContent();
    }
  }

  setupLazy() {
    MyTooltip.lazy(this.part!.element, (tooltip: MyTooltip) => {
      this.tooltip = tooltip;
      this.renderTooltipContent();
    });
  }

  renderTooltipContent() {
    render(this.tooltipContent, this.tooltip!, this.part!.options);
  }
});
