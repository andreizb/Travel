import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./todo.js"

class TODOS extends LitElement {
    static get styles() {
        return css
            `

            `;
    }
    
    static get properties() {
        return {
            todos: { type: Array },
            title: { type: String }
        }
    }

    constructor() {
        super();

        this.title = 'Titlu'
        this.todos = [
            {
                title: 'TODO 1',
                done: true
            },
            {
                title: 'TODO 2',
                done: false
            }
        ];
    }
    
    render() {
        return html
            `
                <h2>${ this.title }</h2>
                <ul style="list-style-type:none;">
                    ${this.todos.map((todo) => {
                        return html`
                            <my-todo .title="${ todo.title }" .done=${ todo.done }></my-todo>`;
                    })}
                </ul>
            `;
    }
}

customElements.define('my-todos', TODOS);
