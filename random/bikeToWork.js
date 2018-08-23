process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = '';
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  // now we can read/parse input
  const [num, ...data] = input.split('\n');
  let totalTrips = 0,
    totalMeters = 0;
  data.forEach(row => {
    const [name, meters, ...trips] = row.split(',');
    trips.forEach(trip => {
      totalMeters += Number(trip) * meters;
      totalTrips += Number(trip);
    });
  });
  process.stdout.write(totalTrips + '\n' + totalMeters);
});
