(function () {
    const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.1,
            duration: 1.2,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            normalizeWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        },
    });

    window.addEventListener('scrollEvent', (e) => {
        const { target, way, from } = e.detail;
        console.log(`target: ${target}`, `way: ${way}`, `from: ${from}`);

        if( way == 'enter') {
            target.classList.add('pEnterView');
            return;
        } else {            
            target.classList.remove('pEnterView');
        }

    });

})();