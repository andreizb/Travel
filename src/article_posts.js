import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import './article_post.js';

class ArticlePosts extends LitElement {
    static get styles() {
        return css
            `
                .content-section-heading {
                    text-align: center;
                    font-family: "Playfair Display";
                    padding-bottom: 50px;
                    text-shadow: 1px 1px 2px #082b34;
                    font-size: 30px;
                }

                :host {
                    display: flex;
                    flex-direction: column;
                }

                :host > :nth-of-type(even) {
                    flex-direction: row-reverse;
                }
            `;
    }

    static get properties() {
        return {
            title: { type: String },
            articles: { type: Number }
        }
    }

    constructor() {
        super();

        this.title = 'Blog posts';
        this.articles = 3;
    }

    render() {
        return html
            `
                <h2 class="content-section-heading">
                    ${ this.title }
                </h2>
                ${ 
                    [...Array(this.articles).keys()].map((article_id) => {
                        return html
                        `
                            <article-post .article_id=${ article_id }></article-post>
                        `;
                    })
                }
            `;
    }
}

customElements.define('article-posts', ArticlePosts);
