document.addEventListener('DOMContentLoaded', function() {
    // ... (existing hamburger menu JS) ...

    const filterBtns = document.querySelectorAll('.filter-btn');
    const caItems = document.querySelectorAll('.ca-item');

    filterBtns.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filter = button.dataset.filter;

            caItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex'; // Show all
                } else if (filter === 'today') {
                    const today = new Date().toISOString().slice(0, 10);
                    if (item.dataset.date === today) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                } else if (item.dataset.category === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
