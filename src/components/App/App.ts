import Component from '../Component.js';
import Header from '../Header/Header.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null, cssClasses: string = '') {
    super(parentElement, 'div', cssClasses);
    this.#children = [new Header('Series', this.element)];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
