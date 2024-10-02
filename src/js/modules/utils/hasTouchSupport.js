function hasTouchSupport() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    // if ( hasTouchSupport ( )) { 
    //     console.log ( " Обнаружено мобильное устройство" ) ; } 
    // else { 
    //     console.log ( " Обнаружено настольное устройство" ) ; 
    // }

export default hasTouchSupport;