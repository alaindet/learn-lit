import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { User } from './user';

@customElement('card-user')
export class CardUser extends LitElement {

  @property({ type: Object }) user?: User = {
    id: 1,
    fullName: 'John Doe',
    role: 'Some made-up role',
  };

  private handleEdit() {
    this.dispatchEvent(
      new CustomEvent<User>('edit', {
        detail: this.user,
      })
    );
  }

  override render() {
    if (this.user === undefined) {
      return '';
    }

    return html`
      <div class="card">
        <img src=${this.user.avatar ?? 'assets/images/avatar.png'} />
        <div class="card-content">
          <h4>${this.user.fullName}</h4>
          <p>${this.user.role}</p>
          <button @click=${this.handleEdit}>Edit</button>
        </div>
      </div>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      font-family: var(--font-family, 'Arial');
    }

    .card {
      box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.15);
      max-width: 160px;
      border-radius: 0.5rem;
      overflow: hidden;
      border: 2px solid rgba(0,0,0,0.2);
    }

    .card img {
      max-width: 100%;
    }

    .card-content {
      padding: 10px;
    }
  `;
}
