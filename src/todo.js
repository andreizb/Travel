import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class TODO extends LitElement {
    static get styles() {
        return css
            `
                .todo-checked {
                    color: red;
                    text-decoration: line-through;
                }
            `;
    }

    static get properties() {
        return {
            title: { type: String },
            done: { type: Boolean }
        }
    }

    render() {
        return html
            `
                <div class="${this.done ? "todo-checked" : ""}">
                    ${ this.title }
                    <input type="checkbox" ?checked=${ this.done } @click=${ (event) => this.handleChecked(event) }>
                </div>
            `;
    }

    handleChecked(event) {
        console.log(event);
    }
}

export default customElements.define("my-todo", TODO)
