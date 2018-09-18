
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';
import '../../dumbs/can-button';
import 'caas-loan-calculator';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import { } from '@polymer/polymer/lib/elements/dom-repeat.js';
import { initGCharts } from 'google-chart-polymer-3/google-chart';
initGCharts(() => { })

export default class CanApp extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String
      },
      appVersion: {
        type: String,
        value: process.env.appVersion
      },
      ENV: {
        type: String,
        value: process.env.NODE_ENV
      },
      updateReady: {
        type: Boolean,
        value: false
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor() {
    super();

    document.addEventListener('updateReady', () => {
      this.updateReady = true;
    });
  }

  startTour() {
    window.location.replace('https://github.com/PolymerX/polymer-skeleton');
  }

  reload() {
    window.location.reload();
  }
}

window.customElements.define('can-app', CanApp);
