

function getMostVisited(n, sprints) {
  if ( !Array.isArray(sprints) || typeof n !== 'number' || sprints.length < 2 || n < 2 )
    throw "Invalid Arguments";

  let position = new Map();

  for ( let i = 1; i <= n; i++ ) {
    position.set(i, 0); // initialize visits
  }

  for ( let i = 0; i < sprints.length - 1; i++ ) {
    let start = sprints[i] < sprints[i+1] ? sprints[i] : sprints[i+1];
    let end = sprints[i] < sprints[i+1] ? sprints[i+1] : sprints[i];

    for ( let j = start; j <= end; j++ ) {
      let visited = position.get(j);
      position.set(j, visited + 1)
    }
  }

  console.log(position);
}

getMostVisited( 5, [ 2, 4, 1, 3] );
