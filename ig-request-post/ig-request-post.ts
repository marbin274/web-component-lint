import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { IPost } from "./types";


@customElement('ig-request-post')
export class IGRequestPost extends LitElement {


    __getData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => (response.json() as Promise<IPost[]>))
            .then(data => {
                this.dispatchEvent(new CustomEvent('ig-request-posts-event', {
                    detail: data, bubbles: true, composed: true
                }));
            })
    }


    override firstUpdated() {
        console.log('firstUpdated');
        
        this.__getData();
    }

}

export default IGRequestPost;

declare global {
    interface HTMLElementTagNameMap {
        'ig-request-post': IGRequestPost;
    }
}
