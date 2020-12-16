import {
    LitElement, html, css
} from 'lit-element'

class ArticlePost extends LitElement {
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
                
                .article-image {
                    width: 400px;
                    object-fit: cover;
                    padding: 10px;
                    flex: 4;
                }
                
                .article-text-content {
                    padding: 10px;
                    flex: 2;
                }
                
                .my-span {
                    background-color: gray;
                    font-weight: bold;
                }

                :host {
                    display: flex;
                }
            `;
    }

    static get properties() {
        return {
            title: { type: String },
            subtitle: { type: String },
            firstParagraph: { type: String },
            secondParagraph: { type: String },
            thirdParagraph: { type: String },
            imageUrl: { type: String }
        }
    }

    render() {
        return this.getHtmlContent();
    }

    getHtmlContent() {
        return html`
                <img src=${ this.imageUrl } alt="article-image" class="article-image">
                <div class="article-text-content">
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
                        <p>
                            ${ this.thirdParagraph }
                        </p>
                    </div>
                </div>
            `;
    }
}

export default customElements.define("article-post", ArticlePost);
