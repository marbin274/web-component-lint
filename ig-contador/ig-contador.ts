 import {LitElement, html, css} from 'lit';
 import {
   customElement, 
   property,
  } from 'lit/decorators.js';
  
   export const componentName = 'ig-contador';
export interface IGContadorProps {
  name: string
}
@customElement(componentName)
 export class IGContador extends LitElement {
   
   static override styles = css`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
 
   /**
    * The name to say "Hello" to.
    */
   @property()
   name = 'World';
 
   /**
    * The number of times the button has been clicked.
    */
   @property({type: Number})
   count = 0;

   override render() {     
     return html`
       <h1>${this.sayHello(this.name)}!</h1>
       <button @click=${this._onClick} part="button">
         Click Count: ${this.count}
       </button>
       <slot></slot>
     `;
   }
 
   private _onClick() {
     this.count++;
     this.dispatchEvent(new CustomEvent('count-changed'));
   }
 
   /**
    * Formats a greeting
    * @param name The name to say "Hello" to
    */
   sayHello(name: string): string {
     return `Hello, ${name}`;
   }
 }

 export default IGContador;

 declare global {
   interface HTMLElementTagNameMap {
     'ig-contador': IGContador;
   }
 }
 