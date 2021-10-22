import { LitElement, html} from "lit";
import { customElement } from "lit/decorators.js";


@customElement('ig-test')
export class IGTest extends LitElement{

    override render() {
        return html`
          <h1>Hola mundo! </h1>
        `;
      }
}

export default IGTest;

declare global {
    interface HTMLElementTagNameMap {
      'ig-test': IGTest;
    }
  }
