import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class ArticlePost extends LitElement {
    static get styles() {
        return css
            `
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
            article_id: { type: Number }
        }
    }

    render() {
        return this.getHtmlContent(this.article_id);
    }

    getHtmlContent(key) {
        switch (key) {
            case 0:
                return html
                    `
                        <img src="https://www.conicaltravel.com/wp-content/uploads/2020/03/4.-Myanmar-Conical-Travel-1911x695.jpg" alt="article-image" class="article-image">
                        <div class="article-text-content">
                            <header>
                                <h2 class="article-title">
                                    A great article
                                </h2>
                                <h3 class="article-subtitle">
                                    Decent article subtitle
                                </h3>
                            </header>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper consectetur orci. In hac habitasse platea dictumst. <span class="my-span">sit amet turpis in ex convallis feugiat</span> id at justo. Morbi vulputate feugiat libero ut laoreet. Suspendisse potenti. Praesent condimentum nibh sed eros rhoncus molestie. Nullam imperdiet erat aliquet porta blandit. Vestibulum varius eget ex sit amet vehicula. Aliquam vel bibendum sapien. Nullam pellentesque sed urna vel imperdiet. Nunc ac ex luctus, semper neque id, viverra magna. Nam lacus massa, laoreet eu mauris eget, volutpat fringilla quam. Nulla condimentum, enim eget auctor tincidunt, quam lorem tincidunt elit, sit amet eleifend leo nunc ac ipsum. Suspendisse ullamcorper odio eu ante convallis maximus.
                                </p>
                                <p>
                                    Vestibulum sapien odio, egestas non nisi ac, pretium fringilla quam. Donec et commodo velit. Aliquam consequat, nibh ut accumsan malesuada, metus ipsum sagittis nulla, eget elementum nunc leo hendrerit mauris. Pellentesque mattis ac libero a luctus. Nunc sem neque, lacinia eget odio vitae, posuere pharetra nibh. Morbi quis magna vehicula, mollis quam non, vulputate lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id condimentum augue, at maximus metus. Vestibulum leo arcu, gravida ut ipsum sit amet, dignissim pellentesque enim. Sed posuere maximus sagittis. Vivamus a lacinia justo, sed efficitur elit. Donec dignissim ultrices fermentum. Morbi et egestas lacus, vel auctor magna. Integer ac urna et tortor consequat placerat. Phasellus a consequat nibh, eu posuere arcu.
                                </p>
                                <p>
                                    Nunc laoreet a mi at efficitur. Fusce et condimentum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras dui leo, tincidunt in varius egestas, cursus vel nibh. Vestibulum et nibh non metus congue ornare. Fusce tincidunt sem ac ex vestibulum, vitae placerat lectus tincidunt. Fusce ut luctus diam, eu dapibus urna. Etiam bibendum est vitae ex efficitur pellentesque. Phasellus luctus dolor vel tempor volutpat. Nunc luctus mollis massa aliquet sagittis. Sed condimentum, risus et tempus blandit, mi leo dignissim nibh, non fermentum tortor magna nec diam. Sed luctus lacus sed ipsum consequat pharetra.
                                </p>
                            </div>
                        </div>
                    `;
            case 1:
                return html
                    `
                        <img src="https://alvindein.com/wp-content/uploads/2020/04/best-time-book-travel-holidays.jpg" alt="article-image" class="article-image">
                        <div class="article-text-content">
                            <header>
                                <h2 class="article-title">
                                    Interesting article
                                </h2>
                                <h3 class="article-subtitle">
                                    Very interesting subtitle
                                </h3>
                            </header>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus justo. Duis non est eu nulla commodo malesuada a et urna. In eget tincidunt metus. Curabitur finibus, lorem vitae venenatis aliquet, tortor erat rutrum ligula, ut pulvinar ligula sem sed tortor. Mauris at velit eros. Donec sed semper diam, sit amet congue nulla. Nulla elit ante, accumsan sit amet nisi nec, porta maximus odio. Donec tincidunt nibh augue, at suscipit ex ultrices eu.
                                </p>
                                <p>
                                    <span class="my-span">Quisque a volutpat diam, id volutpat ex. Maecenas erat enim, faucibus eu neque at, posuere pellentesque nibh. Fusce est augue, venenatis eu consectetur sed, dictum facilisis purus. Quisque elementum consequat aliquam. Duis id tellus nibh. Suspendisse potenti. Ut vel finibus erat. Praesent a suscipit nulla, a varius nibh. Fusce luctus, dolor id blandit efficitur, dui leo pharetra sem, ac molestie nisl massa et arcu. Morbi vitae ornare nisl. Proin posuere egestas nulla. Nullam sit amet gravida augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris et massa at elit pretium tempus id et arcu. Praesent ullamcorper fringilla enim, a posuere purus efficitur vitae.</span>
                                </p>
                                <p>
                                    Integer sagittis erat nec imperdiet auctor. <span class="my-span">Nulla id erat et lectus porttitor euismod in in diam. Nulla bibendum ullamcorper tincidunt.</span> Morbi rutrum dictum interdum. Morbi et sagittis ligula. Praesent bibendum, lacus a egestas congue, nisl orci dictum ex, ut dignissim ligula augue non risus. In tristique dui dui, id gravida diam congue a. Cras feugiat sit amet arcu in finibus. Quisque dictum, enim id maximus posuere, felis tellus volutpat quam, quis feugiat tortor nibh at quam. Maecenas ornare, tellus eu tempus viverra, massa nibh facilisis massa, ac efficitur enim sapien eget orci. Maecenas sed faucibus libero. Duis viverra non quam ut ullamcorper.
                                </p>
                            </div>
                        </div>                    
                    `;
            case 2:
                return html
                    `
                        <img src="https://media.timeout.com/images/105672700/image.jpg" alt="article-image" class="article-image">
                        <div class="article-text-content">
                            <header>
                                <h2 class="article-title">
                                    Amazing article
                                </h2>
                                <h3 class="article-subtitle">
                                    The most original subtitle
                                </h3>
                            </header>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare tincidunt nisl et varius. Sed nibh lacus, tristique et finibus eget, volutpat sit amet justo. Duis condimentum molestie nisl rutrum tempus. Maecenas et placerat nibh, vitae tempor nunc. Proin sed aliquet eros. Nam nec mi leo. Mauris sagittis convallis commodo. Praesent commodo justo non sem consequat, sit amet pretium nunc ullamcorper. Nunc placerat nibh felis, vel maximus ante efficitur rutrum. Fusce blandit risus a lacinia gravida.
                                </p>
                                <p>
                                    Nulla facilisi. Quisque vel libero in felis elementum finibus et auctor orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Vestibulum ac libero pulvinar, efficitur eros nec, mattis enim. Ut scelerisque, ante sed maximus pellentesque, urna nibh consectetur magna, eu vestibulum sapien elit et mauris. Aliquam posuere mauris sit amet nunc placerat volutpat. Phasellus ultricies erat velit, sit amet rutrum lacus commodo at. Suspendisse efficitur venenatis velit, ac feugiat augue feugiat quis. Proin aliquet arcu augue, sit amet iaculis arcu tincidunt sit amet. Suspendisse dictum velit ac sodales sodales.
                                </p>
                                <p>
                                    Aliquam lectus turpis, gravida ut sem a, ultrices sodales ipsum. Phasellus sodales nec felis at sagittis. Pellentesque at lobortis orci. Mauris commodo lectus in nunc tristique, sed porta dolor egestas. Phasellus nec cursus lectus. Aenean porttitor libero vel dolor interdum, non iaculis magna commodo. Vestibulum iaculis porttitor lacinia. Vivamus in turpis risus. Maecenas sollicitudin placerat lacus eget porta. Duis blandit non odio ut interdum. Phasellus fringilla nunc a eros convallis tristique. Sed suscipit tempus lorem fermentum scelerisque.
                                </p>
                            </div>
                        </div>
                    `;
            default:
                return html``;
        }
    }
}

export default customElements.define("article-post", ArticlePost);
