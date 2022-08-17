import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { range } from 'lit/directives/range.js';
import { map } from 'lit/directives/map.js';

const getColor = (row: number, col: number) => {
  return (row + col) % 2 ? 'white' : 'black';
};

const getLabel = (row: number, col: number) => {
  return `${String.fromCharCode(65 + col)}${8 - row}`;
};

@customElement('lists-with-range')
export class ListsWithRange extends LitElement {

  render() {
    return html`
      <h2>With <code>range()</code></h2>
      <div class="chessboard">
        ${map(range(8), row => {
          return map(range(8), col => {
            const color = getColor(row, col);
            const label = getLabel(row, col);
            return html`<div class="square ${color}">${label}</div>`
          });
        })}
      </div>
    `;
  }

  static styles = css`
    .chessboard {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      max-width: max(50%, 400px);
    }
    .square {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0.2rem;
    }
    .square:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
    .white {
      background-color: rgb(251, 226, 169);
      color: black;
    }
    .black {
      background-color: rgb(136, 101, 59);
      color: white;
    }
  `;
}
