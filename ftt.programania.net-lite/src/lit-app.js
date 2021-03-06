import css from './mystyles.scss';
import {html, LitElement} from 'lit-element';
import {Router} from '@vaadin/router';
import notFoundComponent from './components/not-found.js';
import fttNavBar from './components/nav-bar.js';
import fttFooter from './components/ftt-footer.js';
import portadaComponent from './components/portada.js';
import asistentesComponent from './components/asistentes.js';
import horarioComponent from './components/horario.js';
import sectionTitle from './components/ftt-section-title.js';

[
  sectionTitle,
  fttFooter,
  portadaComponent,
  asistentesComponent,
  horarioComponent,
  notFoundComponent,
  fttNavBar
].forEach(component => {
  customElements.define(component.name, component.element);
});

customElements.define('lit-app', class extends LitElement {

    firstUpdated() {
      const router = new Router(this.shadowRoot.querySelector('#outlet'));
      router.setRoutes([
        {path: '/', component: portadaComponent.name},
        {path: '/horario', component: horarioComponent.name},
        {path: '/:year/asistentes', component: asistentesComponent.name},
        {path: '(.*)', component: notFoundComponent.name}
      ]);
    }

    render() {
      // language=HTML
      return html`
        
        <style>
          ${css}
        </style>
        
        <ftt-nav-bar></ftt-nav-bar>
        
        <div id="outlet"></div>
        
        <ftt-footer></ftt-footer>

      `;
    }
  }
);