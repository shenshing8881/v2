document.addEventListener('DOMContentLoaded', () => {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random();
        heart.innerText = '❤️';
        document.getElementById('hearts').appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }

    setInterval(createHeart, 300);

    const tasks = ['task1', 'task2', 'task3'];
    const reward = document.getElementById('reward');

    tasks.forEach((taskId, index) => {
        const task = document.getElementById(taskId);

        
        task.style.display = 'none';

      
        if (index === 0) {
            task.style.display = 'block';
            task.classList.add('show');
        }

        task.querySelector('a').addEventListener('click', function() {
            
            task.style.display = 'none';
            task.classList.remove('show');
            if (index + 1 < tasks.length) {
                setTimeout(() => {
                    document.getElementById(tasks[index + 1]).style.display = 'block';
                    document.getElementById(tasks[index + 1]).classList.add('show');
                }, 1000);
            } else {
               
                setTimeout(() => {
                    reward.style.display = 'block';
                    reward.classList.add('show');
                }, 1000);
            }
        });
    });

    
    reward.style.display = 'none';
});

function completeTask() {
  var task = document.querySelector('.task');
  task.style.display = 'none';
  for(var i = 0; i < 10; i++) {
    var heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    
    heart.style.top = task.offsetTop + 'px';
    heart.style.left = task.offsetLeft + 'px';
  }

  var nextTask = document.querySelector('.next-task');
  nextTask.style.display = 'block';
}

