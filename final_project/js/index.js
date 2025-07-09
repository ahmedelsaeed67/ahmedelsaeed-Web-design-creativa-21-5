function count(startCount, endCount, speed, countId) {
  var start = startCount;
  var counts = setInterval(updated, speed);

  function updated() {
    var count = document.getElementById(countId);
    count.innerHTML = ++start;
    if (start === endCount) {
      clearInterval(counts);
    }
  }
}
count(0, 8000, 0.00000001, "counter1");
count(0, 810, 50, "counter2");
count(0, 2000, 1, "counter3");
count(0, 20, 150, "counter4");

function animateCounter(startValue, endValue, duration, elementId) {
  const element = document.getElementById(elementId);
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); 
    const value = Math.floor(startValue + (endValue - startValue) * progress);
    element.innerHTML = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const duration = 2000; 

animateCounter(0, 8000, duration, "counter1");
animateCounter(0, 810, duration, "counter2");
animateCounter(0, 2000, duration, "counter3");
animateCounter(0, 20, duration, "counter4");












