var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';
let TodoList = class TodoList extends LitElement {
    constructor() {
        super(...arguments);
        this.list = ['hello', 'world'];
    }
    render() {
        return html `<div>
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
    renderList() {
        return this.list.map((item) => html `<li>${item}</li>`);
    }
    addItem(e) {
        this.list.push('hello');
    }
};
TodoList.styles = css `
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
__decorate([
    property()
], TodoList.prototype, "list", void 0);
__decorate([
    eventOptions({})
], TodoList.prototype, "addItem", null);
TodoList = __decorate([
    customElement('todo-list')
], TodoList);
export { TodoList };
//# sourceMappingURL=todo-list.js.map