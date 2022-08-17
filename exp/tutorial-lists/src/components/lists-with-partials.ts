import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { TemplateResult } from 'lit'; // What is this ???

@customElement('lists-with-partials')
export class ListsWithPartials extends LitElement {

  @state() friends = ['Harry', 'Ron', 'Hermione'];
  @state() includePets = true;
  @state() pets = [
    { name: 'Hedwig', species: 'Owl' },
    { name: 'Scabbers', species: 'Rat' },
    { name: 'Crookshanks', species: 'Cat' },
  ];

  private togglePetVisibility(_: Event): void {
    this.includePets = !this.includePets;
  }

  render() {
    const listItems: TemplateResult[] = [
      ...this.friends.map(friend => html`<li>${friend}</li>`),
    ];

    if (this.includePets) {
      listItems.push(...this.pets.map(pet => html`<li>${pet.name}</li>`));
    }

    return html`
      <h2>With partial templates</h2>

      <input
        type="checkbox"
        id="show-pets"
        @change=${this.togglePetVisibility}
        ?checked=${this.includePets}
      >

      <label for="show-pets">
        ${this.includePets ? 'Show' : 'Hide'} pets
      </label>

      <p>My magical friends</p>
      <ul>${listItems}</ul>
    `;
  }
}
