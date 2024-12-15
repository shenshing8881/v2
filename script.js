document.addEventListener('DOMContentLoaded', () => {
    const tasks = ['task1', 'task2', 'task3', 'reward'];

    tasks.forEach((taskId, index) => {
        const task = document.getElementById(taskId);
        task.addEventListener('click', function() {
            setTimeout(function() {
                task.classList.remove('show');
                if (index + 1 < tasks.length) {
                    document.getElementById(tasks[index + 1]).classList.add('show');
                }
            }, 10000); // Delay each task change by 10 seconds
        });
    });
    document.getElementById('task1').classList.add('show');
});