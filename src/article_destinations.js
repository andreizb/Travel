import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./article_destination.js"

class ArticleDestinations extends LitElement {
    static get styles() {
        return css
            `
                .content-section-heading {
                    text-align: center;
                    font-family: "Playfair Display";
                    padding-bottom: 50px;
                    text-shadow: 1px 1px 2px var(--shadow);
                    font-size: 30px;
                }

                :host {
                    display: flex;
                    flex-direction: column;
                }
            `;
    }

    static get properties() {
        return {
            title: { type: String },
            destinations: { type: Array }
        }
    }

    constructor() {
        super();

        this.title = 'Amazing destinations incoming';
        this.destinations = ['istanbul', 'paris', 'madrid', 'santorini',
                                            'budapest', 'rio-de-janeiro'];
    }

    render() {
        return html
            `
                <h2 class="content-section-heading">
                    ${ this.title }
                </h2>
                ${
                    this.destinations.map((destination_id) => {
                        return html
                        `
                            <article-destination id="${ destination_id }" .destination_id=${ destination_id }></article-destination>
                        `;
                    })
                }
            `;
    }
}

customElements.define('article-destinations', ArticleDestinations);
