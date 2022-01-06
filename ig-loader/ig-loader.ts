import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

export const componentName = 'ig-loader';

@customElement(componentName)
export class IGLoader extends LitElement {   

    static override styles: CSSResultGroup = css`
    .preloader-spinner {
  width: 108px;
  height: 108px;
  position: relative;
  margin: 0 auto;
}
.preloader-spinner .preloader-spinner-square {
   position: absolute;
   width: 108px;
   height: 108px;
   box-shadow: rgba(255, 255, 255, 0.2) 0 0 0 8px inset;
   overflow: hidden;
}
.preloader-spinner .preloader-spinner-square::after {
  content: "";
  position: absolute;
  background: white;
  width: 108px;
  height: 108px;
  top: 100px;
  left: -100px;
  animation: preloaderSpinnerSquare 1200ms infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

@keyframes preloaderSpinnerSquare {
  0% {
    top: 100px;
    left: -100px;
  }
  25% {
    top: -100px;
    left: -100px;
  }
  50% {
    top: -100px;
    left: 100px;
  }
  75% {
    top: 100px;
    left: 100px;
  }
  100% {
    top: 100px;
    left: -100px;
  }
}

.texto_loading{
	color: white;
	font-family: Arial;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 0.2em;
	margin-top: 20px;
	display: block;
}
        .loading-interno{
            width: 108px;
            height: 150px;
            margin: 40px auto;
        }
        .loading-interno .preloader-spinner .preloader-spinner-square{
            box-shadow: rgba(0, 0,0, 0.07) 0 0 0 8px inset;
        }
        .loading-interno .preloader-spinner .preloader-spinner-square::after{
            background: #B2BAD9;
        }
        .loading-interno .texto_loading{
            color: #B2BAD9;
        }
    `;

    @property()
    textoLoading: string = 'Cargando...';
    constructor(){
        super();
    }

    override render() {
        return html`
            <div id="loader">
                <div class="loading-interno">
                    <div class="preloader-spinner">
                        <span class="preloader-spinner-square"></span>
                    </div>
                    <span class="texto_loading">${this.textoLoading}</span>
                </div>
            </div>
        `;
    }

}

export default IGLoader;

declare global {
    interface HTMLElementTagNameMap {
        'ig-loader': IGLoader;
    }
}
