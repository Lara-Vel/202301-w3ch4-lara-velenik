import Component from '../Component.js';

export default class Header extends Component {
  #textTitle: string;

  constructor(
    textTitle: string,
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'header', cssClasses);
    this.#textTitle = textTitle;
  }

  render(): void {
    super.render();
    this.element.innerText = `
  <h1>${this.#textTitle}</h1>
  `;
  }
}
