function movieControl(elapsed, fullTime, action, actionTime) {
  // Use helper function to convert time into seconds for easy calculation
  elapsed = convertTimeToSecs(elapsed);
  fullTime = convertTimeToSecs(fullTime);
  // If reporting progress, convert time to seconds to find percentage
  // Instructions did not specify how specific the percentage should be so I rounded it to the nearest percent
  if (action === 'Report Progress') {
    return Math.round((elapsed / fullTime) * 100);
  }
  // Convert 4th argument if it is a string to seconds
  if (typeof actionTime === 'string') {
    actionTime = convertTimeToSecs(actionTime);
    if (action === 'Rewind') {
      elapsed -= actionTime;
    } else {
      elapsed += actionTime;
    }
  } else {
    if (action === 'Rewind') {
      elapsed = (actionTime / 100) * elapsed;
    } else {
      elapsed += (fullTime - elapsed) * (actionTime / 100);
    }
  }
  // Check edge cases
  if (elapsed <= 0) return `00:00:00`;
  if (elapsed > fullTime) return 'Movie Finished';
  // Return time converted back to clock format
  return convertSecsToClock(elapsed);
}

function convertTimeToSecs(time) {
  time = time.split(':').map(x => Number(x));
  time = time[2] + time[1] * 60 + time[0] * 3600;
  return time;
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

const test = movieControl('02:00:00', '03:00:00', 'Rewind', '00:20:00');
console.log(test);
