import {LitElement, html, css} from 'lit';
import {customElement, eventOptions, property} from 'lit/decorators.js';

@customElement('todo-list')
export class TodoList extends LitElement {
  static override styles = css`
    :host {
      border: 1px solid red;
      padding: 4px;
      display: block;
    }

    :host button {
      border-radius: 8px;
      outline: none;
      background: white;
      border: 1px solid grey;
      cursor: pointer;
      transition: 0.05s all ease-in;
      &:hover {
        background: grey;
      }
    }
  `;

  @property()
  list: string[] = ['hello', 'world'];

  override render() {
    return html`<div>
      <form @submit=${this.addItem}>
        <label for="item">Add Task</label>
        <input type="text" name="item" />
        <button type="submit">Add</button>
      </form>
      <h3>You have ${this.list.length} items to complete.</h3>
      <ul>
        ${this.renderList()}
      </ul>
    </div>`;
  }

  private renderList() {
    return this.list.map((item) => html`<li>${item}</li>`);
  }

  @eventOptions({})
  private addItem(e: Event) {
    this.list.push('hello');
  }
}
