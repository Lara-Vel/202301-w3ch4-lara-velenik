import App from './App/App';

const appContainer = document.querySelector<HTMLElement>('.container');
const app = new App(appContainer);
app.render();
