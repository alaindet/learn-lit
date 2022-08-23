import { LitElement, css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';

type Constructor<T> = new (...args: any[]) => T;

export declare class HighlightableInterface {
  highlight: boolean;
  renderHighlight(content: unknown): unknown;
}

export const HighlightableMixin = <T extends Constructor<LitElement>>(superClass: T) => {

  class HighlightableElement extends superClass {

    static styles = [
      (superClass as unknown as typeof LitElement).styles ?? [],
      css`
        .highlight {
          background: yellow;
        }
      `,
    ];

    @property({ type: Boolean })
    highlight = false;

    renderHighlight(content: unknown) {
      return html`
        <div class=${classMap({ highlight: this.highlight })}>
          ${content}
        </div>
      `;
    }
  }

    return HighlightableElement as Constructor<HighlightableInterface> & T;
  };
