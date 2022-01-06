import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IData } from "./types";

export const componentName = 'ig-cuent-item';

@customElement(componentName)
export class IGCuentaItem extends LitElement {   

    static override styles: CSSResultGroup = css`
    a {
        display: block;
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        text-decoration: none;
    }
    .border_dash {
        border-left: 5pt solid #C4C4C4 !important;
    }
    .border_dash:hover {
    border-left: 5pt solid #233E99 !important;
    background: #E4F3FF;
}
    .content-resumen-patrimonio3 {
    padding: 15px 15px 15px 40px;
    position: relative;
    height: 80px;
    border-bottom: solid #DCDCDE 1pt;
    /* border-left: 4px solid #233E99; */
    /* box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 20%); */
    z-index: 1;
}
.k_titulo_3 {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 10px;
    color: #233E99;
}
.right_inteligo {
    float: right;
    text-align: right;
}
.inteligo_h5 {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    align-items: center;
    text-align: right;
    color: #233E99;
}

.clear-fix {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}

    `;

    @property({attribute: false})
    items: Array<IData> = [];
    constructor(){
        super();
    }

    itemRender = (item: IData) => {
        return html`
        <a href="${item.url}" target="_blank" class="border_dash" id="click_misinversiones">
            <div class="content-resumen-patrimonio3">
                <div class="k_titulo_3">${item.titulo}</div>
                <div class="right_inteligo">
                    <span class="inteligo_h5">${item.divisa.simbolo} ${item.valor}</span>
                </div>
                <div class="flecha_20"></div>
                <div class="clear-fix"></div>
            </div>
        </a>
                `;
    }

    override render() {
        return html`
            ${this.items.map(item => this.itemRender(item))}
        `;
    }

}

export default IGCuentaItem;

declare global {
    interface HTMLElementTagNameMap {
        'ig-cuent-item': IGCuentaItem;
    }
}
