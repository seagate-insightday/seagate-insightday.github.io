import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import '@fontsource-variable/unbounded';
import '@fontsource/poppins/latin.css';

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
