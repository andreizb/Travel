import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./todo.js"

class TODOS extends LitElement {
    static get styles() {
        return css`
                #submitButton {
                    margin-left: 47px;
                    margin-top: 10px;
                    display: block;
                }
            `;
    }
    
    static get properties() {
        return {
            id: { type: Number },
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
        return html`
                <h2>${ this.title }</h2>
                <form @submit="${ this.handleAddedTodo }">
                    <input name="newTodo" id="newTodo" type="text" placeholder="new todo">
                    <input id="submitButton" type="submit" value="Add TODO">
                </form>
                <ul style="list-style-type:none;">
                    ${this.todos.map((todo, index) => {
                        return html`
                            <my-todo .id="${ index }" .title="${ todo.title }" .done=${ todo.done }
                                    @checkboxClickEvent="${ this.handleCheckboxClickEvent }"
                                    @todoUpdateTitle="${ this.handleTodoUpdateTitle }">
                            </my-todo>`;
                    })}
                </ul>
            `;
    }

    handleCheckboxClickEvent(event) {
        const id = event.detail.id;
        const done = event.detail.done;

        let newTodos = [...this.todos];
        newTodos[id].done = done;
        this.todos = newTodos;
    }

    handleAddedTodo(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        this.todos = [...this.todos, {
            title: formData.get("newTodo"),
            done: false
        }];
    }

    handleTodoUpdateTitle(event) {
        const title = event.detail.title;
        const id = event.detail.id;

        let newTodos = [...this.todos];
        newTodos[id].title = title;
        this.todos = newTodos;
    }
}

customElements.define('my-todos', TODOS);
