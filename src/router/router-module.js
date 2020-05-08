import { Router } from './router.js';
import { RouterLink } from './routerLink.js';

const RouterModule = {
    init() {
        Router.init();
        customElements.define('router-link', RouterLink);
    }
};

export {
    RouterModule,
    Router,
    RouterLink
};
