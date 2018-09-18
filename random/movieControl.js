function movieControl(elapsed, fullTime, action, actionTime) {
  elapsed = elapsed.split(':').map(x => Number(x));
  fullTime = fullTime.split(':').map(x => Number(x));
  fullTimeSecs = fullTime[2] + fullTime[1] * 60 + fullTime[0] * 3600;
  elapsedSecs = elapsed[2] + elapsed[1] * 60 + elapsed[0] * 3600;
  // If reporting progress, convert time to seconds to find percentage
  // Instructions did not specify how specific the percentage should be so I rounded it to the nearest percent
  if (action === 'Report Progress') {
    return Math.round((elapsedSecs / fullTimeSecs) * 100);
  }
  if (typeof actionTime === 'string') {
    actionTime = actionTime.split(':').map(x => Number(x));
    actionTime = actionTime[2] + actionTime[1] * 60 + actionTime[0] * 3600;
    if (action === 'Rewind') {
      elapsedSecs -= actionTime;
      if (elapsedSecs <= 0) return `00:00:00`;
    } else {
      elapsedSecs += actionTime;
      if (elapsedSecs > fullTimeSecs) return 'Movie Finished';
    }
    return convertSecsToClock(elapsedSecs);
  } else {
    if (action === 'Rewind') {
      elapsedSecs = (actionTime / 100) * elapsedSecs;
      if (elapsedSecs <= 0) return `00:00:00`;
    } else if (action === 'Fast Forward') {
      elapsedSecs += (fullTimeSecs - elapsedSecs) * (actionTime / 100);
      if (elapsedSecs > fullTimeSecs) return 'Movie Finished';
    }
    return convertSecsToClock(elapsedSecs);
  }
}

function convertSecsToClock(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds % 3600) / 60);
  let ss = (seconds % 3600) % 60;
  if (hh < 10) {
    if (hh === 0) hh = '00';
    else hh = `0${hh}`;
  }
  if (mm < 10) {
    if (mm === 0) mm = '00';
    else mm = `0${mm}`;
  }
  if (ss < 10) {
    if (ss === 0) ss = '00';
    else ss = `0${ss}`;
  }
  return `${hh}:${mm}:${ss}`;
}

// const test = convertSecsToClock(1200);
const test = movieControl('01:00:00', '03:00:00', 'Rewind', 50);
console.log(test);
