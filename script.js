document.addEventListener('DOMContentLoaded', () => {
    // Function to create hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random();
        heart.innerText = '❤️';
        document.getElementById('hearts').appendChild(heart);
        setTimeout(() => heart.remove(), 4000); // Remove heart after 4 seconds
    }

    setInterval(createHeart, 300); // Create new heart every 300ms

    const tasks = ['task1', 'task2', 'task3'];
    const reward = document.getElementById('reward');

    tasks.forEach((taskId, index) => {
        const task = document.getElementById(taskId);
        const button = document.getElementById('showTask' + (index + 1));

        button.addEventListener('click', function() {
            task.classList.add('show');
            button.style.display = 'none'; // Hide button after task is shown

            if (index === tasks.length - 1) { // If it's the last task
                setTimeout(() => {
                    reward.classList.add('show');
                }, 10000); // Show reward after 10 seconds
            }
        });
    });

    // Initially hide reward
    reward.style.display = 'none';
});