import gsap from 'gsap';

export const preLoaderAnim = () => {
    const tl = gsap.timeline({
        onComplete: () => {
            const preloader = document.querySelector('.text-container') as HTMLElement;
            if (preloader) {
                preloader.style.display = 'none';
            }
        }
    });

    tl.fromTo('.text-container span', {
        opacity: 0,
        y: 50,
        scale: 0.5,
        rotation: -45,
    }, {
        opacity: 1,
        y: 0,
        delay: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.4,
        ease: "power4.out",
    });
};
