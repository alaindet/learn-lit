import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('date-display')
export class DateDisplay extends LitElement {

  @property({ attribute: false })
  date = new Date();

  render() {
    const locale = 'en-US';
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return html`
      <p>The given date is: ${this.date.toLocaleDateString(locale, options)}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'date-display': DateDisplay,
  }
}
