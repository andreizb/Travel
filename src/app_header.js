import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import './navigation.js';

class AppHeader extends LitElement {
    static get styles() {
        return css
            `
                #header-title {
                    padding-top: 100px;
                    font-family: serif;
                    font-size: 3cm;
                    color: whitesmoke;
                }
                
                #header-subtitle {
                    padding-bottom: 100px;
                    margin-top: -5%;
                    font-family: serif;
                    font-size: xx-large;
                    color: whitesmoke;
                }

                .header-div {
                    margin-top: -75.5px;
                    background-image: url(../images/banner.png);
                    background-size: cover;
                    background-repeat: no-repeat;
                    width: 100%;
                    text-align: center;
                }

                :host {
                    grid-area: my-header;
                }
            `;
    }

    constructor() {
        super();
    }

    render() {
        return html
            `
                <navigation-element color="white"></navigation-element>
                <div class="header-div">
                    <h1 id="header-title">Welcome to Travazy</h1>
                    <h3 id="header-subtitle">Your journey starts here</h3>
                </div>
                <div style="height: 80px; background-color: #17231f; margin-top: -32px;"></div>
            `;
    }
}

customElements.define('app-header', AppHeader);
