import { Story, Meta } from '@storybook/web-components';
import {IGContador, IGContadorProps, componentName } from '../ig-contador/ig-contador';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: 'SAB/Depósito cancelación',
  } as Meta;
  class SbComponent extends IGContador {
    constructor() {
        super();
    }
    
    connectedCallback() {
        // @ts-ignore
        // this._saveInstanceProperties();
        super.connectedCallback();
    }
}

const sbComponentName = `${componentName}-sb`
customElements.get(sbComponentName) || customElements.define(sbComponentName, SbComponent);
  // More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
  const Template: Story<Partial<IGContadorProps>> = (args) => Object.assign(new SbComponent(), args);

  
  export const Contador = Template.bind({});
  // More on args: https://storybook.js.org/docs/web-components/writing-stories/args
  Contador.args = {
      name: "Marbin args"
  };



