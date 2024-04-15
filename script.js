/*hier JS */

// JavaScript, um den ausgewählten Zustand der Punkte zu ändern
const points = document.querySelectorAll('.point');
points.forEach(point => {
    point.addEventListener('click', () => {
        point.classList.toggle('selected');
    });
});