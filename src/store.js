import { reactive } from 'vue'
import { CONSTANTS } from './constants';

export const store = reactive({
  theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : CONSTANTS.themeLight,
  switchTheme() {
    if(this.theme === CONSTANTS.themeLight){
        this.theme = CONSTANTS.themeDark;
        localStorage.setItem('theme', CONSTANTS.themeDark);
    }
    else {
        this.theme = CONSTANTS.themeLight;
        localStorage.setItem('theme', CONSTANTS.themeLight);
    }
  },
  isDark() {
    return this.theme === CONSTANTS.themeDark ? true : false;
  }
})