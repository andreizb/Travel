class Navigation extends HTMLElement {
    constructor() {
        super();

        const _nav = document.createElement('nav');
        const _style = document.createElement('style');

        _nav.innerHTML =
            `
                <div>
                    <picture style="margin-left: 30px;">
                        <img src="images/travazy.png" alt="travazy-logo" class='logo-image'>
                    </picture>
                </div>
                <div style="width: 100px;"></div>
                <div style="margin-right: 30px;">
                    <ul class="nav-list">
                        <li>
                            <a href="index.html">HOME</a>
                        </li>
                        <li>
                            <a href="destinations.html">DESTINATIONS</a>
                        </li>
                        <li>
                            <a href="#google_translate_element">LANGUAGE</a>
                        </li>
                    </ul>
                </div>
            `;

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(_nav);
        this._shadowRoot.appendChild(_style);
    }

    static get observedAttributes() {
        return ['color'];
    }

    updateStyle(element) {
        console.log('merge');
        const style = element.shadowRoot.querySelector('style');
        style.innerHTML =
            `
                nav {
                    display: flex;
                    justify-content: space-between;
                    text-align: center;
                    position: sticky;
                    background-color: #17231f;
                }

                .nav-list {
                    list-style: none;
                    display: flex;
                    margin-right: -20px;
                }
                
                .nav-list li {
                    border: solid;
                    border-radius: 1em;
                    border-width: 1.8px;
                    border-style: solid;
                    border-image: 
                    linear-gradient(
                        to bottom, 
                        goldenrod, 
                        #17231f
                    ) 1 100%;
                }
                
                .nav-list li:first-child {
                    border-left: none;
                }
                
                .nav-list li:last-child {
                    border-right: none;
                }
                
                .nav-list li a {
                    color: inherit;
                    font-family: serif;
                    display: inline-block;
                    min-width: 70px;
                    padding: 10px 15px;
                    text-decoration: none;
                    font-weight: bold;
                }
                
                .nav-list li a:hover {
                    color: goldenrod;
                    text-decoration-line: underline;
                }

                .logo-image {
                    width: 150px;
                }

                :host {
                    color: ${element.getAttribute('color')};
                }
            `;
    }

    connectedCallback() {
        console.log('hello from connected callback');
    }

    disconnectedCallback() {
        console.log('hello from disconnected callback');
    }

    adoptedCallback() {
        console.log('hello from adopted callback');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log('changed color', name, oldVal, newVal);
        this.updateStyle(this);
    }
}

export default customElements.define('navigation-element', Navigation);
