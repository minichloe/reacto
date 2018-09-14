function convertTo24(amPmString) {
  let [hh, ss] = amPmString.split(':');
  if (ss[2] === 'A') {
    if (hh == '12') hh = '00';
    return hh.length === 1
      ? `0${hh}:${ss.slice(0, 2)}`
      : hh + ':' + ss.slice(0, 2);
  } else {
    hh = Number(hh) + 12;
    return hh < 24 ? hh + ':' + ss.slice(0, 2) : `12:${ss.slice(0, 2)}`;
  }
}

const test = convertTo24('3:35PM');
console.log(test);
