import { reactive } from 'vue'
import { CONSTANTS } from './constants';

export const themeStore = reactive({
  theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : CONSTANTS.theme.themeLight,
  switchTheme() {
    if(this.theme === CONSTANTS.theme.themeLight){
        this.theme = CONSTANTS.theme.themeDark;
        localStorage.setItem('theme', CONSTANTS.theme.themeDark);
    }
    else {
        this.theme = CONSTANTS.theme.themeLight;
        localStorage.setItem('theme', CONSTANTS.theme.themeLight);
    }
  },
  isDark() {
    return this.theme === CONSTANTS.theme.themeDark ? true : false;
  }
})