import {
    LitElement, html, css
} from 'lit-element';

class AppFooter extends LitElement {
    static get styles() {
        return css`
                :root {
                    --background:  #17231f;
                }

                #footer-text {
                    font-family: monospace;
                    color: white;
                    margin-top: 0%;
                }

                .logo-image {
                    width: 150px;
                }

                :host {
                    background-color: var(--background);
                    text-align: center;
                    margin: 0;
                    position: relative;
                    grid-area: my-footer;
                }
            `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
                <div>
                    <picture>
                        <img src="images/travazy.png" alt="travazy-logo" class='logo-image'>
                    </picture>
                    <p id="footer-text">
                        Copyright &copy; {Dev}School 2020. All rights reserved.
                    </p>
                </div>
            `;
    }
}

customElements.define('app-footer', AppFooter);
