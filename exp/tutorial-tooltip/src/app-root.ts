import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { myTooltip } from './my-tooltip.directive';

@customElement('app-root')
export class AppRoot extends LitElement {

  @state()
  name = 'Alain';

  private onInputChange(e: InputEvent): void {
    this.name = (e.target as HTMLInputElement).value;
  }

  render() {
    return html`

      <h1>Tutorial: Tooltip</h1>
      <a href="https://lit.dev/tutorials/tooltip/">
        https://lit.dev/tutorials/tooltip/
      </a>
      <hr>

      <div class="form-control">
        <label>Who are you?</label>
        <input .value=${this.name} @input=${this.onInputChange}>
        <span class="icon-info" tabindex="0" ${myTooltip(html`Enter your name...`)}>?</span>
      </div>

      <p>
        <span>Hello, ${this.name}!</span>
        <span class="icon-info" tabindex="0" ${myTooltip(html`Welcome aboard, ${this.name}!`)}>?</span>
      </p>

      <section class="boxes">
        <div class="box" tabindex="0" ${myTooltip(html`This is the first box`)}>1</div>
        <div class="box" tabindex="0" ${myTooltip(html`This is the second box`)}>2</div>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      width: min(960px, 90vw);
    }

    .boxes {
      display: flex;
      align-items: center;
      margin: 0 -1rem;
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: #0080a0;
      border: 3px solid rgba(0,0,0,0.15);
      margin: 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form-control {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .form-control label {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    .form-control input {
      margin-right: 0.5rem;
    }

    .icon-info {
      width: 1rem;
      height: 1rem;
      border-radius: 100px;
      background: #333;
      border: 2px solid #666;
      color: #fff;
      font-weight: bold;
      line-height: 0.9rem;
      font-size: 0.9rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      transition: 0.15s;
      cursor: help;
    }

    .icon-info:hover {
      background-color: #666;
    }
  `;
}
