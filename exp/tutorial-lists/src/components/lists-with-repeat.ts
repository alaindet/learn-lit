import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

@customElement('lists-with-repeat')
export class ListsWithRepeat extends LitElement {

  @state()
  tasks = [
    { id: 'a', label: 'Learn Lit' },
    { id: 'b', label: 'Feed the cat' },
    { id: 'c', label: 'Go for a walk' },
    { id: 'd', label: 'Take a nap' },
  ];

  private onSort(dir: number): void {
    this.tasks.sort((a, b) => a.label.localeCompare(b.label) * dir);
    this.requestUpdate(); // <-- Manually updating the state
  }

  // This does not work since checked state is controlled by DOM and not Lit
  // If you render with map(), then check and sort, labels are won't be correct!
  //
  // ${map(this.tasks, task => html`
  //   <li>
  //     <label for=${task.id}>
  //       <input type="checkbox" id=${task.id}>
  //       ${task.id}) ${task.label}
  //     </label>
  //   </li>
  // `)}

  render() {
    return html`
      <h2>With <code>repeat()</code></h2>
      <button @click=${() => this.onSort(1)}>Sort ascending</button>
      <button @click=${() => this.onSort(-1)}>Sort descending</button>
      <ul>
        ${repeat(this.tasks, task => task.id, task => html`
          <li>
            <label for=${task.id}>
              <input type="checkbox" id=${task.id}>
              ${task.id}) ${task.label}
            </label>
          </li>
        `)}
      </ul>
    `;
  }
}
