document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const contributions = JSON.parse(calendar.getAttribute('data-contributions'));

    for (let i = 0; i < 365; i++) {
        const day = document.createElement('div');
        day.className = 'day';

        const contribution = contributions[i] || 0;
        if (contribution > 0) {
            day.classList.add(`contributed-${Math.min(contribution, 4)}`);
        }

        calendar.appendChild(day);
    }
});
