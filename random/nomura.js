function maxTwoDigitInteger(A) {
  A = A.filter(x => {
    return x > 9 && x < 100;
  });
  return Math.max([...A]);
}

// function sortShortestDistance(A) {
//     const sorted = mergeSort(A)
//     const distances = []
//     for (let i = 1; i < sorted.length; i++) {
//         const difference = Math.abs(sorted[i] - sorted[i-1])
//         distances.push(difference)
//     }
//     return Math.min(...distances)
// }

// function split(arr) {
//     const middle = Math.floor(arr.length/2)
//     return [arr.slice(0,middle), arr.slice(middle)]
// }

// function merge(arr) {
//     const newArr = []
//     let left = 0;
//     let right = 0;
//     while (left < arr[0].length && right < arr[1].length) {
//         if (arr[0][left] <= arr[1][right]) {
//             newArr.push(arr[0][left])
//             left++
//         } else {
//             newArr.push(arr[1][right])
//             right++
//         }
//     }
//     return [...newArr, ...arr[0].slice(left), ...arr[1].slice(right)]
// }

// function mergeSort(arr) {
//     if (arr.length <=1) return arr
//     else {
//         let splitted = split(arr)
//         let left = splitted[0]
//         let right = splitted[1]
//         return merge([mergeSort(left), mergeSort(right)])
//     }
// }

function calculatePhoneBill(S) {
  S = S.split('\n').map(entry => {
    let [duration, number] = entry.split(',');
    duration = calculateDuration(duration);
    number = convertToString(number);
    return [number, duration];
  });
  const promotionNum = findPromotionNum(S);
  S = S.filter(entry => entry[0] !== promotionNum).reduce(
    (acc, pV) => acc + calculatePrice(pV[1]),
    0
  );
  return S;
}
function calculateDuration(time) {
  const [hh, mm, ss] = time.split(':').map(x => Number(x));
  return hh * 60 * 60 + mm * 60 + ss;
}

function convertToString(number) {
  return number.replace(/-/g, '');
}

function calculatePrice(num) {
  if (num < 300) return num * 3;
  else return Math.ceil(num / 60) * 150;
}

function findLongestTotalCalls(arr) {
  return arr.reduce((entries, singleLog) => {
    const [number, duration] = singleLog;
    if (entries[number]) {
      entries[number] += duration;
    } else {
      entries[number] = duration;
    }
    return entries;
  }, {});
}

function findPromotionNum(arr) {
  const addedLogs = findLongestTotalCalls(arr);
  let logs = [];
  for (let num in addedLogs) {
    logs.push([num, addedLogs[num]]);
  }
  logs = logs.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1;
    } else {
      return 1;
    }
  });
  return logs[0][0];
}
