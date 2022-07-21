import {ref} from 'vue';

export default function useMediaQuery (breakpoint){

    const mediaQuery = window.matchMedia(breakpoint);

    const matches = ref(mediaQuery.matches ? true : false);

    function handleScreenChange(e){
        if(e.matches){
            matches.value = true;
        }
        else {
            matches.value = false;
        }
    }

    mediaQuery.addEventListener('change', handleScreenChange);

    return matches;
    
}