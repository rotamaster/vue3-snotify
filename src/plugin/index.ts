import { App } from 'vue';
import Snotify from './components/Snotify.vue';
import { SnotifyService } from './SnotifyService';
import {SnotifyDefaults} from './interfaces'
export default {
	install: (app: App, options: SnotifyDefaults = {}) => {
		const service =  new SnotifyService();
    service.setDefaults(options);
		app.config.globalProperties.$snotify = service;
		app.component('vue-snotify', Snotify)
	}
}