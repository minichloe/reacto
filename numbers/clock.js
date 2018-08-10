// function addMinutes(time, min) {
//   let [hh, mm] = time.split(':').map(x => Number(x));
//   const minutesToBeAdded = min <= 60 ? min : min % 60;
//   let hoursToBeAdded = Math.floor(min / 60);
//   mm += minutesToBeAdded;
//   if (mm === 60) {
//     hoursToBeAdded++;
//     mm = 0;
//   } else if (mm > 60) {
//     mm = mm % 60;
//     hoursToBeAdded++;
//   }
//   hh += hoursToBeAdded;
//   if (hh === 0) hh = 12;
//   if (hh > 12) hh = hh % 12;
//   const result = `${hh}:${mm > 9 ? mm : `0${mm}`}`;
//   console.log(result);
// }

function addMinutes(time, min) {
  let [hh, mm] = time.split(':').map(x => Number(x));
  const allTime = hh * 60 + mm + min;
  mm = allTime % 60;
  hh = ((Math.floor(allTime / 60) - 1) % 12) + 1;
  // hh = hh > 12 ? hh % 12 : hh;
  const result = `${hh}:${mm > 9 ? mm : `0${mm}`}`;
  console.log(result);
}

addMinutes('1:59', 240); // 5:59
addMinutes(`11:59`, 1); // 12:00
addMinutes(`1:23`, 456789); // 6:32
addMinutes(`12:30`, 39); // 1:09
