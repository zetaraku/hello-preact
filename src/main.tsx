import * as Preact from 'preact';
import { App } from '@/modules/app';

const appEl = document.getElementById('app');

if (appEl === null) throw new Error('#app not found!');

Preact.render(<App />, appEl);
