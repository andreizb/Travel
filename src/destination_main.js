import {
    LitElement, html
} from 'lit-element';

class MainDestination extends LitElement {
    render() {
        return html`
            <h2>Hi from Destination</h2>
        `;
    }
}

export default customElements.define('main-destination', MainDestination);
