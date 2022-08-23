import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { LoggerMixin } from './logger.mixin';

@customElement('logger-example')
export class LoggerExample extends LoggerMixin(LitElement) {

  // From LoggableInterface
  loggerName = 'LoggerExample';

  @state() counter = 0;

  onIncrement() {
    this.counter++;
  }

  render() {
    return html`
      <div>
        <h2>Mixins: LoggerMixin</h2>
        <span>Counter: ${this.counter}</span>
        <button @click=${this.onIncrement}>+1</button>
      </div>
    `;
  }
}
