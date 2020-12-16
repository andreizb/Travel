import {
    LitElement, html, css
} from 'lit-element'

import axios from 'axios';

import "./article_destination.js"

class ArticleDestinations extends LitElement {
    static get styles() {
        return css`
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
        this.destinations = [];
    }

    render() {
        return html`
                <h2 class="content-section-heading">
                    ${ this.title }
                </h2>
                ${
                    this.destinations.map((destination) => {
                        let x = destination.title.toLowerCase().replaceAll(' ', '-');
                        return html`
                            <article-destination id="${ x }"
                                .title="${ destination.title }"
                                .subtitle="${ destination.subtitle }"
                                .firstParagraph="${ destination["first-paragraph"] }"
                                .secondParagraph="${ destination["second-paragraph"] }"
                                .imageUrl="${ destination["image-url"] }"
                                .moreUrl="${ destination["more-info-url"] }"
                            ></article-destination>
                        `;
                    })
                }
            `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.getPosts();
    }

    getPosts() {
        axios.get('https://devschool-2020.firebaseio.com/andrei-zbarcea/destinations.json')
             .then(response => {
                this.destinations = response["data"]["-MOBzr7ft5ztSW-SWQak"]["destinations"]
        });
    }
}

customElements.define('article-destinations', ArticleDestinations);
