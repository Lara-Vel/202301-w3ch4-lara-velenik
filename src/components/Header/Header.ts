import Component from '../Component.js';

export default class Header extends Component {
  #textTitle: string;

  constructor(
    textTitle: string,
    parentElement: HTMLElement | null,
    cssClases: string = '',
  ) {
    super(parentElement, 'header', cssClases);
    this.#textTitle = textTitle;
  }

  render(): void {
    super.render();
    this.element.innerText = `
  <h1>${this.#textTitle}</h1>
  `;
  }
}
