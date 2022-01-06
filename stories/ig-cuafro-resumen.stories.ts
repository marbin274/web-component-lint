import { Story, Meta } from '@storybook/web-components';
import {IGCuadroResumen, componentName } from '../ig-cuadro-resumen/ig-cuadro-resumen';
import {IProps } from '../ig-cuadro-resumen/types';

export default {
    title: 'Depósito cancelación/Cuadro resumen',
    argTypes: {
      variante: { control: {type: "select", options: ['Por defecto', 'azul', 'verde']}},
    }
  } as Meta;
  class SbComponent extends IGCuadroResumen {
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

  
  export const rendimientoAlVencimiento = Template.bind({});
  rendimientoAlVencimiento.args = {
      titulo: "Rendimiento al vencimiento",
      variante: "verde",
      data: [
        { atributo: "Plazo contratado", valor: "90 días" },
        { atributo: "Tasa de interés", valor: "0.2%" },
        { atributo: "Fecha de vencimiento", valor: "19 de Abri. 2021" },
        { atributo: "Interés esperado", valor: "$200.00" },
    ]
  };

  export const cancelacionAnticipada = Template.bind({});
  cancelacionAnticipada.args = {
      titulo: "Cancelación Anticipada",
      variante: "azul",
      data: [
        { atributo: "Periodo transcurrido", valor: "90 días" },
        { atributo: "Tasa de interés a la fecha", valor: "0.2%" },
        { atributo: "Fecha de cancelación", valor: "19 de Abri. 2021" },
        { atributo: "Interés a pagar", valor: "$200.00*" },
    ]
  };



