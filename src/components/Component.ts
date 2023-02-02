export default class Component {
  protected element: HTMLElement;
  #parentElement: HTMLElement | null;

  constructor(
    parentElement: HTMLElement | null,
    tag: string,
    cssClasses: string = '',
  ) {
    this.element = document.createElement(tag);
    this.#parentElement = parentElement;
    this.element.className = cssClasses;
  }

  render() {
    this.#parentElement?.appendChild(this.element);
  }

  doAction(listener: () => void) {
    this.element.addEventListener('click', listener);
  }
}
