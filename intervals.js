
function getMostVisited(n, sprints) {
  if ( !Array.isArray(sprints) || typeof n !== 'number' || sprints.length < 2 || n < 2 )
    throw "Invalid Arguments";

  let position_visited = new Map();

  for ( let i = 1; i <= n; i++ ) {
    position_visited.set(i, 0); // initialize visits
  }

  for ( let i = 0; i < sprints.length - 1; i++ ) {
    let start = sprints[i] < sprints[i+1] ? sprints[i] : sprints[i+1];
    let end = sprints[i] < sprints[i+1] ? sprints[i+1] : sprints[i];

    for ( let j = start; j <= end; j++ ) {
      let visited = position_visited.get(j);
      position_visited.set(j, visited + 1)
    }
  }

  console.log(position_visited);

  let positions = Array.from(position_visited.keys());

  // sort positions by number of visited
  positions.sort( (a, b) => {
    let sort = position_visited.get(a) - position_visited.get(b);
    return sort === 0 ? b - a : sort;
  });

  return positions.pop();
}

getMostVisited( 5, [ 2, 4, 1, 3] );
