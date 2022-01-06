import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IData, varianteType } from "./types";

export const componentName = 'ig-cuadro-resumen';

@customElement(componentName)
export class IGCuadroResumen extends LitElement {   

    static override styles: CSSResultGroup = css`
        .cuadro-resumen{           
            background: #FFFFFF;
            border: 1.5px solid #D6DBEC;
            border-radius: 4px;
            width: calc(50% - 10px);
            padding: 5px;
        }
        .cuadro-resumen.azul {
            box-shadow: 0 -6px 0 #233e99;
            border-color: #233e99;
        }
        .cuadro-resumen.verde {
            box-shadow: 0 -6px 0 #00875a;
            border-color: #00875a;
        }
        .cuadro-resumen__titulo{
            text-align: center;
            font-size: 1.25rem;
            margin: 1rem 0rem;
            font-weight: bold;
        }
        .cuadro-resumen.verde .cuadro-resumen__titulo{
            color: #00875a;
        }
        .cuadro-resumen.azul .cuadro-resumen__titulo{
            color: #233e99;
        }

        .cuadro-resumen__fila{            
            font-size: 1rem;
        }
        .cuadro-resumen__fila-atributo{
            text-align: left;
            color: #464748;
            font-weight: normal;
        }
        .cuadro-resumen__fila-valor{
            text-align: right;
        }
        .cuadro-resumen.verde .cuadro-resumen__fila-valor{
            color: #00875a;
        }
        .cuadro-resumen.azul .cuadro-resumen__fila-valor{
            color: #233e99;
        }
    `;

    @property()
    titulo: string = '';

    @property()
    variante: varianteType = 'azul';

    @property({attribute: false})
    data: Array<IData> = [];
    constructor(){
        super();
    }
    // protected override createRenderRoot(): Element | ShadowRoot {
    //     return this;
    // }

    // static override shadowRootOptions: ShadowRootInit = {...LitElement.shadowRootOptions, delegatesFocus: true, mode: 'closed'};

    override render() {

        const filas = this.data.map(post =>html`
            <tr class="cuadro-resumen__fila">
                <th class="cuadro-resumen__fila-atributo"><p>${post.atributo}</p></th>
                <td class="cuadro-resumen__fila-valor"><span>${post.valor}</span></td>
            </tr>
        `);

        return html`
            <table class="cuadro-resumen ${this.variante}">
                <thead>
                    <tr>
                        <td colspan="2"><p class="cuadro-resumen__titulo">${this.titulo}</p></td>
                    </tr>
                </thead>
                <tbody>
                    ${filas}
                </tbody>
            </table>
        `;
    }

}

export default IGCuadroResumen;

declare global {
    interface HTMLElementTagNameMap {
        'ig-cuadro-resumen': IGCuadroResumen;
    }
}
