function movieControl(elapsed, fullTime, action, actionTime) {
  elapsed = elapsed.split(':').map(x => Number(x));
  fullTime = fullTime.split(':').map(x => Number(x));
  // If reporting progress, convert time to seconds to find percentage
  if (action === 'Report Progress') {
    fullTime = fullTime[2] + fullTime[1] * 60 + fullTime[0] * 3600;
    elapsed = elapsed[2] + elapsed[1] * 60 + elapsed[0] * 3600;
    return (elapsed / fullTime) * 100;
  }
}
