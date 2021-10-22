import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IPost, IRequestPosts } from "./types";

@customElement('ig-tabla')
export class IGTabla extends LitElement {

    @property({type: Number})
    max: number = 10;

    @property({attribute: false})
    posts: Array<IPost> = [];

    override connectedCallback() {
        super.connectedCallback();
        console.log("connectedCallback");

    }

    override disconnectedCallback() {
        super.disconnectedCallback();
        console.log("disconnectedCallback");
    }


    constructor(){
        super();
        addEventListener('ig-request-posts-event', ((e: IRequestPosts) => {
            console.log("listener ig-request-posts-event");
            
            this.posts = e.detail;
        }) as EventListener)
    }

    override render() {

        const rows = this.posts.slice(0, this.max).map(post =>html`
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
            </tr>
        `);

        return html`
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }
}

export default IGTabla;

declare global {
    interface HTMLElementTagNameMap {
        'ig-tabla': IGTabla;
    }
}
