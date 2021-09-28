import { App } from 'vue';
import Snotify from './components/Snotify.vue';
import { SnotifyService } from './SnotifyService';
import {SnotifyDefaults} from './interfaces';
import './styles/material.scss';

export default {
	install: (app: App, options: SnotifyDefaults = {}) => {
		const service =  new SnotifyService();
    service.setDefaults(options);
		app.config.globalProperties.$snotify = service;
		app.component('vue-snotify', Snotify)
	}
}

// export { SnotifyDefaults } from './interfaces/SnotifyDefaults.interface';
// export {SnotifyToastConfig} from './interfaces/SnotifyToastConfig.interface';
// export {SnotifyStyles} from './interfaces/SnotifyStyles.interface';
// export {SnotifyNotifications} from './interfaces/SnotifyNotifications.interface';
// export {SnotifyGlobalConfig} from './interfaces/SnotifyGlobalConfig.interface';
// export {SnotifyButton} from './interfaces/SnotifyButton.interface';
// export {SnotifyAnimate} from './interfaces/SnotifyAnimate.interface';
// export {Snotify} from './interfaces/Snotify.interface';
// export {SnotifyPosition} from './enums/SnotifyPosition.enum';
// export {SnotifyStyle} from './enums/SnotifyStyle.enum';
// export {SnotifyType} from './types/snotify.type';
// export {SnotifyEvent} from './types/event.type';
// export {SnotifyToast} from './models/toast.model';