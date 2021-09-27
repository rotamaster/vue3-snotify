import {SnotifyPosition, SnotifyStyle} from './enums';

/**
 * Snotify default configuration object
 * @type {SnotifyDefaults}
 */
export const ToastDefaults = {
  global: {
    newOnTop: true,
    maxOnScreen: 8,
    maxAtPosition: 8,
    oneAtTime: false,
    preventDuplicates: false
  },
  toast: {
    timeout: 2000,
    showProgressBar: true,
    type: SnotifyStyle.simple,
    closeOnClick: true,
    pauseOnHover: true,
    titleMaxLength: 16,
    bodyMaxLength: 150,
    backdrop: -1,
    icon: undefined,
    animation: {enter: 'fadeIn', exit: 'fadeOut', time: 400},
    html: undefined,
    position: SnotifyPosition.rightBottom,
  },
  type: {
    [SnotifyStyle.prompt]: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        {text: 'Ok', bold: true},
        {text: 'Cancel', bold: false},
      ],
      placeholder: 'Enter answer here...',
      type: SnotifyStyle.prompt,
    },
    [SnotifyStyle.confirm]: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        {text: 'Ok', bold: true},
        {text: 'Cancel', bold: false},
      ],
      type: SnotifyStyle.confirm,
    },
    [SnotifyStyle.simple]: {
      type: SnotifyStyle.simple
    },
    [SnotifyStyle.success]: {
      type: SnotifyStyle.success
    },
    [SnotifyStyle.error]: {
      type: SnotifyStyle.error
    },
    [SnotifyStyle.warning]: {
      type: SnotifyStyle.warning
    },
    [SnotifyStyle.info]: {
      type: SnotifyStyle.info
    },
    [SnotifyStyle.async]: {
      pauseOnHover: false,
      closeOnClick: false,
      timeout: 0,
      showProgressBar: false,
      type: SnotifyStyle.async
    }
  }
};
