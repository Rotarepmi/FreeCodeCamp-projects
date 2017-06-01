var sec,
    currMin,
    currSec,
    count,
    startBtn,
    stopBtn,
    activityIndicator,
    breakSub,
    breakAdd,
    sessionSub,
    sessionAdd,
    sessionEl,
    breakEl,
    timeEl,
    tomato,
    tomatoPos,
    initialSec,
    background;

timeEl = document.getElementById('time');
sessionEl = document.getElementById('session');
breakEl = document.getElementById('break');
tomato = document.querySelector('.tomato-background');

var times = {
  sessionTime: parseInt(sessionEl.innerHTML),
  breakTime: parseInt(breakEl.innerHTML)
};

initialSec = 60 * times.sessionTime;    //initial values
background = '#af1616';
sec = initialSec;
tomatoPos = 100;
activityIndicator = 'session';

function count() {
  currMin = Math.floor(sec / 60);
  currSec = sec % 60;
  
  currSec < 10 ? currSec = "0" + currSec : currSec;

  if (sec === 0 && activityIndicator == 'session') {
    activityIndicator = 'break';
    initialSec = 60 * times.breakTime;
    sec = initialSec;
    tomatoPos = 101;
    background = '#345e11';
  } else if (sec === 0 && activityIndicator == 'break') {
    activityIndicator = "session";
    initialSec = 60 * times.sessionTime;
    sec = initialSec;
    tomatoPos = 101;
    background = '#af1616';
  }

  sec--;
  tomatoPos = (sec/initialSec) * 100;
  
  document.getElementById('activity').innerHTML = activityIndicator;
  timeEl.innerHTML = currMin + ':' + currSec;
  tomato.setAttribute('style', 'top:'+tomatoPos+'%; background:'+background+';');
}

function startCount() {
  myCount = setInterval(count, 1000);
  startBtn.setAttribute('disabled', true);
  sessionSub.setAttribute('disabled', true);
  sessionAdd.setAttribute('disabled', true);
  breakSub.setAttribute('disabled', true);
  breakAdd.setAttribute('disabled', true);
}

function stopCount() {
  clearInterval(myCount);
  startBtn.removeAttribute('disabled');
  sessionSub.removeAttribute('disabled');
  sessionAdd.removeAttribute('disabled');
  breakSub.removeAttribute('disabled');
  breakAdd.removeAttribute('disabled');
}

function resetCount() {
  if(activityIndicator == 'session'){
    timeEl.innerHTML = times.sessionTime + ':00';
    initialSec = 60 * times.sessionTime;
    sec = initialSec;
    tomatoPos = 100;
  } else if(activityIndicator == 'break'){
    timeEl.innerHTML = times.breakTime + ':00';
    initialSec = 60 * times.breakTime;
    sec = initialSec;
    tomatoPos = 100;
  }
}

startBtn = document.getElementById('start');
startBtn.addEventListener('click', startCount);

stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', stopCount);

breakSub = document.getElementById('subtract-break');
breakSub.addEventListener('click', function() {
  times.breakTime > 1 ? times.breakTime-- : times.breakTime = 1;
  breakEl.innerHTML = times.breakTime;
  resetCount();
});

breakAdd = document.getElementById('add-break');
breakAdd.addEventListener('click', function() {
  times.breakTime++;
  breakEl.innerHTML = times.breakTime;
  resetCount();
});

sessionSub = document.getElementById('subtract-session');
sessionSub.addEventListener('click', function() {
  times.sessionTime > 1 ? times.sessionTime-- : times.sessionTime = 1;
  sessionEl.innerHTML = times.sessionTime;
  resetCount();
});

sessionAdd = document.getElementById('add-session');
sessionAdd.addEventListener('click', function() {
  times.sessionTime++;
  sessionEl.innerHTML = times.sessionTime;
  resetCount();
});