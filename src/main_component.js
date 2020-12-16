import {
    html, css, LitElement
} from 'lit-element'

import './app_header.js';
import './app_footer.js';
import './article_posts.js';

class MainComponent extends LitElement {
    static get styles() {
        return css`
            :host {
                --background:  #17231f;
                --shadow:  #082b34;
            }

            #google_translate_element {
                padding-top: 30px;
                padding-bottom: 15px;
                text-align: center;
                grid-area: my-translator;
                background: var(--background);
            }
            
            .grid-container {
                display: grid;
                grid-template-areas: 'my-header'
                                    'my-main'
                                    'my-translator'
                                    'my-footer';
            }
            
            .my-main {
                grid-area: my-main;
                display: flex;
            }
            
            .my-border {
                width: 300px;
                background-color: var(--background);
            }
            
            .my-border-radius {
                border-radius: 10px;
                box-shadow: 0 0 0 .6em var(--background);
                overflow: hidden;
                margin: 0;
                perspective: 1px;
            }
            
            .sections-div {
                border-image-slice: 1;
                padding-top: 30px;
                padding-bottom: 30px;
                padding-left: 50px;
                padding-right: 50px;
            }
            
            .my-section {
                text-align: center;
                margin-bottom: 50px;
                padding: 1rem;
                color: white;
                background-color: gainsboro;
                border-width: 4px;
                border-style: solid;
                border-image:
                linear-gradient(
                    to top, 
                    rgb(204, 0, 255), 
                    rgb(80, 46, 80)
                ) 1 100%;
                font-size: larger;
            }
            
            .my-section h2 {
                color: black;
                font-family: "Playfair Display";
                font-style: normal;
                font-variant: normal;
                font-size: 60px;
                font-weight: bold;
                line-height: 48px;
                text-align: center;
                text-shadow: 1px 1px 2px var(--shadow);
            }
            
            .destinations-list {
                font-family: sans-serif;
                text-decoration: none;
                font-weight: bold;
            }
            
            .destinations-list li {
                margin-top: 20px;
                margin-left: -55px;
                text-decoration: none;
                list-style: none;
            }
            
            .destinations-list li a, a:visited, a:hover, a:active {
                text-decoration: none;
                color: blue;
                cursor: pointer;
            }        
        `;
    }

    render() {
        return html`
            <div class="grid-container">
                <app-header class="my-header"></app-header>
                <main class="my-main">
                    <div class="my-border"></div>
                    <div class="my-border-radius">
                        <div class="sections-div">
                            <section class="my-section">
                                <h2>
                                    About Travazy
                                </h2>
                                <p style="color: rgb(48, 30, 30)">
                                    <span class="my-span">Nunc laoreet a mi at efficitur. Fusce et condimentum purus.</span> Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras dui leo, tincidunt in varius egestas, cursus vel nibh. Vestibulum et nibh non metus congue ornare. Fusce tincidunt sem ac ex vestibulum, vitae placerat lectus tincidunt. Fusce ut luctus diam, eu dapibus urna. Etiam bibendum est vitae ex efficitur pellentesque. Phasellus luctus dolor vel tempor volutpat. Nunc luctus mollis massa aliquet sagittis. Sed condimentum, risus et tempus blandit, mi leo dignissim nibh, non fermentum tortor magna nec diam. Sed luctus lacus sed ipsum consequat pharetra.
                                </p>
                            </section>
                            <article-posts></article-posts>
                        </div>
                    </div>
                    <div class="my-border"></div>
                </main>
                <div id="google_translate_element">
                    <script type="text/javascript">  
                        function googleTranslateElementInit() {  
                            new google.translate.TranslateElement( 
                                {pageLanguage: 'en'},  
                                'google_translate_element' 
                            );  
                        }
                    </script>
                    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>  
                </div>
                <app-footer class="my-footer"></app-footer>
            </div>            
        `;
    }
}

export default customElements.define('main-component', MainComponent);
