import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ClockController } from './clock.controller';
import { formatDate } from './date.utils';

@customElement('clock-example')
export class ClockExample extends LitElement {

  private clock = new ClockController(this, 1000);

  render() {
    const dateFormat = 'YYYY-mm-dd hh:ii:ss';

    return html`
      <h2>Reactive Controller Example</h2>
      <h3>The Clock</h3>
      <p>
        Current time:
        <strong>${formatDate(this.clock.value, dateFormat)}</strong>
      </p>
    `;
  }

  static styles = css``;
}
