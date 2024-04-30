document.addEventListener('visibilitychange', () =>{
    if (document.visibilityState === 'visible'){
        console.log('reproducir el video');

    }else{
        console.log('pausar el video');

    }
});