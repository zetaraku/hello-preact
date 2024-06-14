import * as Preact from 'preact';
import { App } from './App';

const appEl = document.getElementById('app');

if (appEl === null) throw new Error('#app not found!');

Preact.render(<App />, appEl);
