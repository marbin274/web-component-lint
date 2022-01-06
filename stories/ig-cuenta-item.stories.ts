import { Story, Meta } from '@storybook/web-components';
import {IGCuentaItem, componentName } from '../ig-cuenta-item/ig-cuenta-item';
import {IData, IProps } from '../ig-cuenta-item/types';

export default {
    title: 'Depósito cancelación/Cuenta items',
  } as Meta;
  class SbComponent extends IGCuentaItem {
    constructor() {
        super();
    }
    
    connectedCallback() {
        super.connectedCallback();
    }
}

const sbComponentName = `${componentName}-sb`
customElements.get(sbComponentName) || customElements.define(sbComponentName, SbComponent);
  const Template: Story<Partial<IProps>> = (args) => Object.assign(new SbComponent(), args);

  
  export const porDefecto = Template.bind({});

  const divisaDolares = {
    moneda: "dolar",
    simbolo:  "$"
};
  porDefecto.args = {
      items: [
        { titulo: "Mis inversiones", valor: "0.00", divisa: divisaDolares, url: "https://www.google.com/" },
        { titulo: "Cuenta corriente", valor: "350,020.37", divisa: divisaDolares, url: "https://www.wikipedia.org/" },
        { titulo: "Mis Depósitos", valor: "250,000.00", divisa: divisaDolares, url: "https://www.youtube.com/" },
    ]
  };



