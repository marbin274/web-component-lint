import { Story, Meta } from '@storybook/web-components';
import {IGLoader, componentName } from '../ig-loader/ig-loader';
import { IProps } from '../ig-loader/types';

export default {
    title: 'Loader',
    // argTypes: {
    //   variante: { control: {type: "select", options: ['Por defecto', 'azul', 'verde']}},
    // }
  } as Meta;
  class SbComponent extends IGLoader {
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

  
  export const loader = Template.bind({});
  loader.args = {
    textoLoading: "Cargando componente",
  };




