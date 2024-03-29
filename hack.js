const greenShades = ['#9be9a8', '#40c463', '#30a14e', '#216e39'];
const calendar = document.querySelector('.ContributionCalendar');

calendar.querySelectorAll('[role="tooltip"]').forEach(tooltip => tooltip.remove());

calendar.style.cursor = 'crosshair';

calendar.querySelectorAll('.ContributionCalendar-day').forEach(square => {
    square.style.backgroundColor = '#ebedf0';

    const changeColor = () => square.style.backgroundColor = greenShades[Math.floor(Math.random() * greenShades.length)];

    square.addEventListener('mouseleave', changeColor);
});
