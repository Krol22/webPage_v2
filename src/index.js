import { Router, RouterModule } from './router/router-module.js';

import { HeaderComponent } from './layout/header-component.js';
import { NavigationComponent } from './layout/navigation-component.js';
import { FooterComponent } from './layout/footer-component.js';

import { AboutComponent } from './main/about-component.js';
import { StatusComponent } from './main/status-component.js';
import { ContactComponent } from './main/contact-component.js';
import { SettingsComponent } from './main/settings-component.js';

import { LoadingComponent } from './loading/loading-component.js';

import { SoundService } from './sound/sound.service.js';

require('../styles/main.scss');

RouterModule.init();

Router.addPath('/', 
    {
        text: '<status-component></status-component>'
    }
);
Router.addPath('/about-me', 
    {
        text: '<about-me-component></about-me-component>'
    }
);
Router.addPath('/contact', 
    {
        text: '<contact-component></contact-component>'
    }
);
Router.addPath('/settings',
    {
        text: '<settings-component></settings-component>'
    }
);

Router.goTo('/');

SoundService.init();

customElements.define('header-component', HeaderComponent);
customElements.define('settings-component', SettingsComponent);
customElements.define('footer-component', FooterComponent);
customElements.define('about-me-component', AboutComponent);
customElements.define('status-component', StatusComponent);
customElements.define('contact-component', ContactComponent);
customElements.define('loading-component', LoadingComponent);
customElements.define('navigation-component', NavigationComponent);
