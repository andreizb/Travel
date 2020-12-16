import {
    LitElement, html, css
} from 'lit-element';

import axios from 'axios';

import './article_post.js';

class ArticlePosts extends LitElement {
    static get styles() {
        return css`
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
            articles: { type: Array }
        }
    }

    constructor() {
        super();

        this.title = 'Blog posts';
        this.articles = [];
    }

    render() {
        return html`
                <h2 class="content-section-heading">
                    ${ this.title }
                </h2>
                ${ 
                    this.articles.map((article) => {
                        return html`
                            <article-post id=${ article.article_id }
                                .title="${ article.title }",
                                .subtitle="${ article.subtitle }",
                                .firstParagraph="${ article["first-paragraph"] }"
                                .secondParagraph="${ article["second-paragraph"] }"
                                .thirdParagraph="${ article["third-paragraph"] }"
                                .imageUrl="${ article["image-url"] }"
                            ></article-post>
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
        axios.get('https://devschool-2020.firebaseio.com/andrei-zbarcea/articles.json')
             .then(response => {
                this.articles = response["data"]["-MODPVL31sPA2M7Gq5HY"]["articles"]
        });
    }
}

customElements.define('article-posts', ArticlePosts);
