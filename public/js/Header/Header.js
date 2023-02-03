var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Header_textTitle;
import Component from '../Component.js';
export default class Header extends Component {
    constructor(textTitle, parentElement, cssClasses = '') {
        super(parentElement, 'header', cssClasses); // Estas propiedades se heredan, pero en este caso solo está heredando el tag ya que los otros 2 hacen referencia al mismo declarado
        _Header_textTitle.set(this, void 0);
        __classPrivateFieldSet(this, _Header_textTitle, textTitle, "f");
    }
    render() {
        super.render();
        this.element.innerText = `
  <h1>${__classPrivateFieldGet(this, _Header_textTitle, "f")}</h1>
  `;
    }
}
_Header_textTitle = new WeakMap();
