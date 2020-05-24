
const team = {
  _players: [{
    firstName: 'John',
    lastName: 'Smith',
    age: 12,
  },
  {
    firstName: 'Kevin',
    lastName: 'James',
    age: 10,
  },
  {
    firstName: 'Carl',
    lastName: 'Crisafulli',
    age: 15,
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Cowboys',
    teamPoints: 54,
    opponentPoints: 13
  },
  {
    opponent: 'Ravens',
    teamPoints: 11,
    opponentPoints: 33
  }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    let player = {firstName, lastName, age};
    this._players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) {
    let game = {opponent, teamPoints, opponentPoints};
    this._games.push(game);
  }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Texans', 32, 34);

console.log(team)