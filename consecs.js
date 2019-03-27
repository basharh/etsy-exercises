
//15 -> 3
//10 -> 1

function consec(num) {
  let num_found = 0;
  let start = Math.ceil(num / 2);
  let found = [];

  for (var current = start; current > 0; current--) {
    let sequence = [current];
    let sum = current;
    for ( var i = current - 1; i >= 0; i-- ) {
      sequence.unshift(i);
      sum += i;
      if ( sum === num ) {
        num_found++;
        found.push(sequence);
        break
      } else if ( sum > num ) {
        break;
      }
    }
  }

  console.log(found);
  return num_found;
}

consec(1);
consec(10);
consec(15);
