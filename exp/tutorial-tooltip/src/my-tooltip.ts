import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { computePosition, autoPlacement, offset, shift } from '@floating-ui/dom';

const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

@customElement('my-tooltip')
export class MyTooltip extends LitElement {

  @property({ type: Number })
  offset = 4;

  @property({
    type: Boolean,
    // This updates the HTML attribute when the property changes
    // It is needed to trigger the CSS selector :host([showing]) for animation
    reflect: true,
  })
  showing = false;
  
  // TODO: Refactor
  private _target: Element | null = null;

  // TODO: Refactor
  get target() {
    return this._target;
  }

  // TODO: Refactor
  set target(target: Element | null) {

    // Remove events from existing target
    if (this.target) {
      enterEvents.forEach(name => this.target!.removeEventListener(name, this.show));
      leaveEvents.forEach(name => this.target!.removeEventListener(name, this.hide));
    }

    // Add events to new target
    if (target) {
      enterEvents.forEach(name => target!.addEventListener(name, this.show));
      leaveEvents.forEach(name => target!.addEventListener(name, this.hide));
    }

    this._target = target;
  }

  constructor() {
    super();
    this.addEventListener('transitionend', this.doneHiding);
  }

  connectedCallback() {
    super.connectedCallback();
    this.hide();
    this.target ??= this.previousElementSibling;
  }

  show = async () => {
    if (!this.target) {
      return;
    }

    this.style.cssText = ''; // ???

    // Robust positioning with Floating UI
    const { x, y } = await computePosition(this.target, this, {
      strategy: 'fixed',
      middleware: [
        offset(this.offset),
        shift(),
        autoPlacement({
          allowedPlacements: ['top'],
        }),
      ],
    });

    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
    this.showing = true;
  }

  hide = () => {
    this.showing = false;
  }

  doneHiding = () => {
    if (this.showing) return;
    this.style.display = 'none';
  }

  static lazy(target: Element, callback: (target: MyTooltip) => void) {
    const createTooltip = () => {
      const tooltip = document.createElement('my-tooltip') as MyTooltip;
      callback(tooltip);
      target.parentNode!.insertBefore(tooltip, target.nextSibling);
      tooltip.show();
      enterEvents.forEach(event => target.removeEventListener(event, createTooltip));
    };

    enterEvents.forEach(event => target.addEventListener(event, createTooltip));
  }

  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: inline-block;
      position: fixed;
      padding: 4px 8px;
      border-radius: 4px;
      background: #333;
      border: 2px solid #666;
      color: #fff;
      font-style: italic;
      pointer-events: none;
      opacity: 0;
      transform: scale(0.5);
      transition: opacity, transform;
      transition-duration:  0.1s;
    }

    :host([showing]) {
      opacity: 1;
      transform: scale(1);
    }
  `;
}
