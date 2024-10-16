let progressBars = document.querySelectorAll('.circular-progress'); 

function updateProgressBar(progressBar, endValue, color) {
  let progressStartValue = 0;
  let speed = 20;

  let progressInterval = setInterval(() => {
    progressStartValue++;

    progressBar.querySelector('.progress-value').textContent = `${progressStartValue}%`;

    progressBar.style.background = `conic-gradient(${color} ${progressStartValue * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue === endValue) {
      clearInterval(progressInterval);
    }
  }, speed);
}

for (let i = 0; i < progressBars.length; i++) {
  let progressBar = progressBars[i];
  let endValue; 
  let color; 
  switch (i) {
    case 0:
      endValue = 90;
      color = '#7d2ae8';
      break;
    case 1:
      endValue = 75;
      color = '#f0984b'; 
      break;
    case 2:
      endValue = 55;
      color = '#4caf50'; 
      break;
    case 3:
      endValue = 30;
      color = '#f44336'; 
      break;
    default:
      console.warn(`Unexpected progress bar index: ${i}`);
      break;
  }

  updateProgressBar(progressBar, endValue, color);
}