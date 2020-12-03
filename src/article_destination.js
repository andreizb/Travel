import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class ArticleDestination extends LitElement {
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
            destination_id: { type: String }
        }
    }

    render() {
        return this.getHtmlContent(this.destination_id);
    }

    getHtmlContent(key) {
        switch (key) {
            case 'istanbul':
                return html
                    `
                        <img src="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2018/10/26171002/shutterstock_291252509-870x400.jpg"
                        alt="istanbul" class="images">
                        <div class="destinations-text-content">
                            <header>
                                <h2 class="article-title">
                                    Istanbul
                                </h2>
                                <h3 class="article-subtitle">
                                    Turkey
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
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Istanbul" target="_blank">Read more about Istanbul here...</a>
                            </div>
                        </div>
                    `;
            case 'paris':
                return html
                    `
                        <img src="https://brabbu.com/blog/wp-content/uploads/2019/07/HERO_UltimateParis_Heroshutterstock_112137761.jpg"
                        alt="paris" class="images">
                        <div class="destinations-text-content">                              
                            <header>
                                <h2 class="article-title">
                                    Paris
                                </h2>
                                <h3 class="article-subtitle">
                                    France
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
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Paris" target="_blank">Read more about Paris here...</a>
                            </div>
                        </div>
                    `;
            case 'madrid':
                return html
                    `
                        <img src="https://img.static-af.com/images/meta/IDname/CITY-MAD-1?aspect_ratio=2:1&max_width=1920"
                        alt="madrid" class="images">
                        <div class="destinations-text-content">
                            <header>
                                <h2 class="article-title">
                                    Madrid
                                </h2>
                                <h3 class="article-subtitle">
                                    Spain
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
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Madrid" target="_blank">Read more about Madrid here...</a>
                            </div>
                        </div>
                    `;
            case 'santorini':
                return html
                    `
                        <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/897c1fab01ff5ebb3a4b370d52efac89f6c83f37/big-c6fe29388e86817077d33f3bdbba7ed8.jpg"
                        alt="santorini" class="images">
                        <div class="destinations-text-content">
                            <header>
                                <h2 class="article-title">
                                    Santorini
                                </h2>
                                <h3 class="article-subtitle">
                                    Greece
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
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Santorini" target="_blank">Read more about Santorini here...</a>
                            </div>
                        </div>
                    `;
            case 'budapest':
                return html
                    `
                        <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa42066f2-15c8-11e9-8239-c0a124428b01.jpg?crop=5832%2C3280%2C0%2C304&resize=1180"
                        alt="budapest" class="images">
                        <div class="destinations-text-content">
                        <header>
                                <h2 class="article-title">
                                    Budapest
                                </h2>
                                <h3 class="article-subtitle">
                                    Hungary
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
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Budapest" target="_blank">Read more about Budapest here...</a>
                            </div>
                        </div>
                    `;
            case 'rio-de-janeiro':
                return html
                    `
                        <img src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/South%20America/Brazil/Rio%20de%20Janeiro/rio-christ-guide-lead.jpg?imwidth=450"
                        alt="rio-de-janeiro" class="images">
                        <div class="destinations-text-content">
                            <header>
                                <h2 class="article-title">
                                    Rio de Janeiro
                                </h2>
                                <h3 class="article-subtitle">
                                    Brazil
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
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Rio_de_Janeiro" target="_blank">Read more about Rio de Janeiro here...</a>
                            </div>
                        </div>
                    `;           
            default:
                return html``;
        }
    }
}

export default customElements.define("article-destination", ArticleDestination);
