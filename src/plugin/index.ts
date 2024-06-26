import { App } from 'vue';
import Snotify from './components/Snotify.vue';
import { SnotifyService } from './SnotifyService';
import {SnotifyDefaults} from './interfaces';

// Base styles
import './styles/_shared/animations.scss';
import './styles/_shared/icons.scss';
import './styles/_shared/snotify.scss';

export default {
	install: (app: App, options: SnotifyDefaults = {}) => {
		const service =  new SnotifyService();
    service.setDefaults(options);
		app.config.globalProperties.$snotify = service;
		app.component('vue-snotify', Snotify)
	}
}
export type { SnotifyDefaults } from './interfaces/SnotifyDefaults.interface';
export type {SnotifyToastConfig} from './interfaces/SnotifyToastConfig.interface';
export type {SnotifyStyles} from './interfaces/SnotifyStyles.interface';
export type {SnotifyNotifications} from './interfaces/SnotifyNotifications.interface';
export type {SnotifyGlobalConfig} from './interfaces/SnotifyGlobalConfig.interface';
export type {SnotifyButton} from './interfaces/SnotifyButton.interface';
export type {SnotifyAnimate} from './interfaces/SnotifyAnimate.interface';
export type {Snotify} from './interfaces/Snotify.interface';
export type {SnotifyPosition} from './enums/SnotifyPosition.enum';
export type {SnotifyStyle} from './enums/SnotifyStyle.enum';
export type {SnotifyType} from './types/snotify.type';
export type {SnotifyEvent} from './types/event.type';
export type {SnotifyToast} from './models/toast.model';
export type { SnotifyService };
