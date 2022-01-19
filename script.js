let styles = document.getElementsByName('style');
let styleLink = document.getElementById('stylelink');

styles.forEach((style) => {
    style.addEventListener('change', () => {
        styleLink.className = style.id.toString();
    })
})