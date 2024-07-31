window.addEventListener('scroll', () => {
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -(window.pageYOffset * speed);
        layer.style.transform = `translateY(${yPos}px)`;
    });
});
