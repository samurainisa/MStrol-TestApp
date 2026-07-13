import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

createApp(App).mount('#app')

