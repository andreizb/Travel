import {Router} from '@vaadin/router';

import "./main_component.js"
import "./destinations_component.js"
import "./destination_main.js"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  { path: '/', component: 'main-component' },
  { path: '/home', component: 'main-component' },
  { path: '/destinations', component: 'destinations-component' },
  { path: '/destinations/(.*)', component: 'main-destination' }
]);
