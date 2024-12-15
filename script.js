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

        // Initially hide all tasks
        task.style.display = 'none';

        // Show first task
        if (index === 0) {
            task.style.display = 'block';
            task.classList.add('show');
        }

        task.querySelector('a').addEventListener('click', function() {
            // Hide the current task after interaction
            task.style.display = 'none';
            task.classList.remove('show');

            // Show the next task after a delay
            if (index + 1 < tasks.length) {
                setTimeout(() => {
                    document.getElementById(tasks[index + 1]).style.display = 'block';
                    document.getElementById(tasks[index + 1]).classList.add('show');
                }, 1000); // 1 second delay before showing next task
            } else {
                // If it's the last task, show reward after a delay
                setTimeout(() => {
                    reward.style.display = 'block';
                    reward.classList.add('show');
                }, 1000); // 1 second delay before showing reward
            }
        });
    });

    // Initially hide reward
    reward.style.display = 'none';
});

function completeTask() {
  // Assuming you have a div with class 'task' for each task
  var task = document.querySelector('.task');
  task.style.display = 'none'; // Hide the task

  // Create and append heart elements
  for(var i = 0; i < 10; i++) {
    var heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    // You might want to position the heart at the task's location
    heart.style.top = task.offsetTop + 'px';
    heart.style.left = task.offsetLeft + 'px';
  }

  // Show the next task or a message
  var nextTask = document.querySelector('.next-task');
  nextTask.style.display = 'block'; // Show the next task
}

