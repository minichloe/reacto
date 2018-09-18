function movieControl(elapsed, fullTime, action, actionTime) {
  elapsed = elapsed.split(':').map(x => Number(x));
  fullTime = fullTime.split(':').map(x => Number(x));
  if (typeof actionTime === 'number') {
    fullTime = fullTime[2] + fullTime[1] * 60 + fullTime[0] * 3600;
    elapsed = elapsed[2] + elapsed[1] * 60 + elapsed[0] * 3600;
    if (action === 'Rewind') {
      elapsed = (actionTime / 100) * elapsed;
      return convertSecsToClock(elapsed);
    }
  }
  // If reporting progress, convert time to seconds to find percentage
  // Instructions did not specify how specific the percentage should be so I rounded it to the nearest percent
  if (action === 'Report Progress')
    return Math.round((elapsed / fullTime) * 100);
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

const test = convertSecsToClock(1200);
// const test = movieControl('01:10:00', '02:00:00', 'Report Progress');
console.log(test);
