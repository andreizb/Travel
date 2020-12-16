import {
    LitElement, html, css
} from 'lit-element';

import './navigation.js';

class AppHeader extends LitElement {
    static get styles() {
        return css`
                #header-title {
                    padding-top: 100px;
                    font-family: serif;
                    font-size: 3cm;
                    color: whitesmoke;
                }
                
                #header-subtitle {
                    padding-bottom: 100px;
                    margin-top: -5%;
                    font-family: serif;
                    font-size: xx-large;
                    color: whitesmoke;
                }

                .header-div {
                    margin-top: -75.5px;
                    background-image: url(../images/banner.png);
                    background-size: cover;
                    background-repeat: no-repeat;
                    width: 100%;
                    text-align: center;
                }

                :host {
                    grid-area: my-header;
                }
            `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
                <navigation-element color="white"></navigation-element>
                <div class="header-div">
                    <h1 id="header-title">Welcome to Travazy</h1>
                    <h3 id="header-subtitle">Your journey starts here</h3>
                </div>
                <div style="height: 80px; background-color: #17231f; margin-top: -32px;"></div>
            `;
    }

    // connectedCallback() {
    //     super.connectedCallback();

    //     const iAmYoda = new Promise((resolve, reject) => {
    //         const person = 'Yoda';
    //         if (person === 'Yoda') {
    //             resolve('I am Yoda');
    //         } else {
    //             reject(`I am ${ person }`);
    //         }
    //     })

    //     const promise2 = new Promise((resolve, reject) => {
    //         setTimeout(reject, 700, 'ok')
    //     });

    //     const promise3 = new Promise((resolve, reject) => {
    //         setTimeout(reject, 500, 'super ok')
    //     });

    //     // iAmYoda.then(response => console.log(response))
    //     //        .catch(error => console.log(error))
    //     //        .finally(() => console.log('Finally something happened'));

    //     // any, race, all
    //     Promise.race([iAmYoda, promise2, promise3])
    //             .then((response) => console.log(response))
    //             .catch((error) => console.log(error));

    //     this.getPosts();
    //     this.getPosts2();
    // }

    // getPosts() {
    //     // const axios = window.axios;

    //     // axios.get('https://jsonplaceholder.typicode.com/posts')
    //     //      .then(response => console.log(response))
    //     //      .catch(error => console.log(error));

    //     // axios.post('https://jsonplaceholder.typicode.com/posts', {
    //     //     title: 'foo',
    //     //     body: 'bar',
    //     //     userId: 1,
    //     // },
    //     // {
    //     //     headers: {
    //     //         'content-type': 'multipart/form-data',
    //     //         Authorization: 'Bearer ceva-token',
    //     //     }
    //     // }).then(response => console.log(response));

    //     // const request = axios.create({
    //     //     baseURL: 'https://jsonplaceholder.typicode.com/',
    //     //     timeout: 1000,
    //     //     headers: {
    //     //         Authorization: 'Bearer ceva-token',
    //     //     }
    //     // });

    //     // request.get('posts').then(response => console.log(response));

    //     // fetch('https://jsonplaceholder.typicode.com/posts').then(response => { 
    //     //     response.json()
    //     // }).then((data) => console.log(data));

    //     // const body = {
    //     //     title: 'foo',
    //     //     body: 'bar',
    //     //     userId: 1,            
    //     // }

    //     // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'content-type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify(body),
    //     // }).then(response => response.json()).then(response => console.log(response));
    // }

    // async getPosts2() {
    //     // const axios = window.axios;
    //     // try {
    //     //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //     //     console.log(response);            
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }

    //     // console.log('la sfarsitul metodei');
    // }
}

customElements.define('app-header', AppHeader);
