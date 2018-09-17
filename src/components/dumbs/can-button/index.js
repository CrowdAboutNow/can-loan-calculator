
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

export default class CanButton extends PolymerElement {
  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }
}

window.customElements.define('can-button', CanButton);
