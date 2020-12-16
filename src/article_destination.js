import {
    LitElement, html, css
} from 'lit-element'

class ArticleDestination extends LitElement {
    static get styles() {
        return css`
                .article-title {
                    margin-bottom: -15px;
                    color: #d04764;
                    font-family: "Playfair Display";
                    font-style: normal;
                    font-variant: normal;
                    font-size: 36px;
                    font-weight: bold;
                    line-height: 48px;
                    text-shadow: 1px 0 0 #fff;
                }
                
                .article-subtitle {
                    font-weight: normal;
                    color: grey;
                }

                .images {
                    width: 100px;
                    padding: 10px;
                    flex: 1;
                    object-fit: cover;
                }

                .destinations-text-content {
                    flex: 5;
                    padding: 10px;
                }

                .my-span {
                    background-color: gray;
                    font-weight: bold;
                }

                :host {
                    display: flex;
                    padding-bottom: 30px;
                }
            `;
    }

    static get properties() {
        return {
            title: { type: String },
            subtitle: { type: String },
            firstParagraph: { type: String },
            secondParagraph: { type: String },
            imageUrl: { type: String },
            moreUrl: { type: String }
        }
    }

    render() {
        return this.getHtmlContent();
    }

    getHtmlContent() {
        return html`
                <img src=${ this.imageUrl }
                alt="${ this.title.toLowerCase() }" class="images">
                <div class="destinations-text-content">
                    <header>
                        <h2 class="article-title">
                            ${ this.title }
                        </h2>
                        <h3 class="article-subtitle">
                            ${ this.subtitle }
                        </h3>
                    </header>
                    <div>
                        <p>
                            ${ this.firstParagraph }
                        </p>
                        <p>
                            ${ this.secondParagraph }
                        </p>
                    </div>
                    <div>
                        <a href=${ this.moreUrl } target="_blank">Read more about Istanbul here...</a>
                    </div>
                </div>
            `;
    }
}

export default customElements.define("article-destination", ArticleDestination);
