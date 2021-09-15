import "./style.css"
import { LitElement,html, render, TemplateResult} from "lit"
import { customElement, property, state  } from "lit/decorators.js"
import "@vaadin/vaadin-text-field"
import "@vaadin/vaadin-button"
import "@vaadin/vaadin-ordered-layout/vaadin-vertical-layout"
import "@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout"
import "@vaadin/vaadin-grid/vaadin-grid"
import "@vaadin/vaadin-form-layout/vaadin-form-layout"

const app = document.querySelector<HTMLDivElement>("#app")!
// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
render(html`
  <demo-view></demo-view>
`, app)
//From [LitElement basics tutorial with TypeScript (Vaadin Fusion client-side views), 2020 video](https://youtu.be/1jn-NR4jiPk)
@customElement("demo-view")
class DemoView extends LitElement {
  @property() name = "Anna"
  @state() people = [{name:"Juli"}]
  override render():TemplateResult {
    return html`
    <vaadin-vertical-layout>
      <h1>Hello ${this.name}</h1>
      <vaadin-form-layout>
        <vaadin-text-field label="Name" value=${this.name} @input=${this.onNameChange}></vaadin-text-field>
      </vaadin-form-layout>
      <vaadin-horizontal-layout theme="spacing" style="justify-content: flex-end;">
        <vaadin-button theme="primary" @click=${this.onAddButtonClick}>Add</vaadin-button>
        <!-- vaadin-button theme="secondary">Cancel</vaadin-button -->
      </vaadin-horizontal-layout>
      <h1>People</h1> 
      <!-- ul>
        ${this.people.map(p=>html`
          <li>${p.name}</li>
        `)}
      </ul -->
      <vaadin-grid .items=${this.people}>
        <!-- ${Object.keys(this.people[0])[0]} -->
        <vaadin-grid-column text-align="start" path="name" header="Name"></vaadin-grid-column>
      </vaadin-grid>
    </vaadin-vertical-layout>
    `
  }
  //No need to bind the method name when added as event listener, lit-html does behind the scene
  onNameChange(e:Event):void {
    this.name = (e.target as HTMLInputElement).value
  } 
  onAddButtonClick():void {
    this.people = [...this.people,{name:this.name}]
    this.name = ""
  }
}
declare global { interface HTMLElementTagNameMap { "demo-view": DemoView}}