import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { HighlightableMixin } from './highlightable.mixin';

const HighlightableLitElement = HighlightableMixin(LitElement);

@customElement('highlight-example')
export class HighlightExample extends HighlightableLitElement {

  static styles = [
    HighlightableLitElement.styles || [],
    css`
      :host {
        display: block;
      }
    `,
  ];

  toggle(event: Event): void {
    this.highlight = (event.target as HTMLInputElement).checked;
  }

  render(){
    return this.renderHighlight(html`
      <div>
        <h2>Mixins: HighlightableMixin</h2>
        <label>
          <input type="checkbox" .checked=${this.highlight} @change=${this.toggle}>
          Toggleable highlight
        </label>
      </div>
    `);
  }
}
