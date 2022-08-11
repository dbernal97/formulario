import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsUserFormCo-styles.js';
import '@bbva-web-components/bbva-web-header-multistep/bbva-web-header-multistep.js';
import '@bbva-web-components/bbva-web-progress-multistep-bar/bbva-web-progress-multistep-bar.js';
import '@bbva-web-components/bbva-web-button-multistep-back/bbva-web-button-multistep-back.js';
import '@bbva-web-components/bbva-web-form-number/bbva-web-form-number.js';
import '@bbva-web-components/bbva-web-form-amount/bbva-web-form-amount.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-divider/bbva-web-divider.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-user-form-co></cells-user-form-co>
```

##styling-doc

@customElement cells-user-form-co
*/
export class CellsUserFormCo extends LitElement {
  static get is() {
    return 'cells-user-form-co';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-user-form-co-shared-styles')
    ];
  }

  _headerSection(){
    return html`
    <div class="header">
        <div class="zone">
          <bbva-web-header-multistep block-title="Transfiere y recibe" id="header-title" closeLabel="Salir">
          </bbva-web-header-multistep>
          <bbva-web-progress-multistep-bar current="1" max="5"></bbva-web-progress-multistep-bar>
          <section>
            <bbva-web-button-multistep-back text="Anterior"></bbva-web-button-multistep-back>
          </section>
        </div>
      </div>
    `
  }

  _formSection(){
    return html`
      <div class="form-section">
        <p id="num-screen">1 de 3</p>
        <h2>Ingresa la información para tu transferencia</h2>
        <bbva-web-form-number label="Número de celular" class="form-number"></bbva-web-form-number>
        <bbva-web-form-number label="Confirma el número de celular" class="form-number"></bbva-web-form-number>
        <bbva-web-form-amount class="form-number" label="Ingresa el valor que deseas transferir" currency-code="USD" local-currency="USD" info-message="Tu saldo disponible en la cuenta es de $650.000 \n Escribe el valor sin puntos ni comas."></bbva-web-form-amount>
        <bbva-web-button-default id="form-btn">Continuar</bbva-web-button-default>
      </div>
    `
  }


  _summarySection(){
    return html`
      <div class="summary-section">
        <p class="summary-title">CUENTA DE ORIGEN</p>
        <table class="values-table">
          <tr>
            <td class="summary-title">Ahorros</td>
            <td id="number-value">$650.000</td>
          </tr>
          <tr>
            <td>*1234</td>
            <td class="info-text">Disponible</td>
          </tr>
        </table>
        <bbva-web-divider id="divider"></bbva-web-divider>
        <p class="summary-title">TIPO DE TRANSFERENCIA</p>
        <p class="info-text">A celulares</p>
      </div>
    `
  }

  // Define a template
  render() {
    return html`
      ${this._headerSection()}
      <div class="main-container">
        ${this._formSection()}
        ${this._summarySection()}
      </div>
    `;
  }
}
