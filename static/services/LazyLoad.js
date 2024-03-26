export default class LazyLoad {
    static initLazyLoad(className) {
        const lazy = document.querySelectorAll(`.${className}`);
        console.log(lazy);
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1]
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                console.log(entry);
                entry.target.style.opacity = entry.intersectionRatio;
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                }
            });
        }, options);

        lazy.forEach(elem => {
            observer.observe(elem);
        });
    }
}
