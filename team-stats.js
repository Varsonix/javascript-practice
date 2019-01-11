const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Jordan',
      lastName: 'Gibbard',
      age: 29
    },
    {
      firstName: 'Cory',
      lastName: 'Karras',
      age: 29
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Rocket-Surgeons',
      teamPoints: 100,
      opponentPoints: 23
    },
    {
      opponent: 'Spacies',
      teamPoints: 7,
      opponentPoints: 93
    }
  ],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  
  addPlayers: function(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    
    this.players.push(player);
  },
  
  addGame: function(oponnentName, teamPoints, oTeamPoints) {
    let game = {
      opponnent: oponnentName,
      teamPoints: teamPoints,
      opponnentPoints: oTeamPoints
    }
    
    this.games.push(game);
  }
  
};

team.addPlayers('Steph', 'Curry', 28);
team.addPlayers('Lisa', 'Leslie', 44);
team.addPlayers('Bugs', 'Bunny', 76);
team.addGame('Tornadoes', 35, 55);
team.addGame('Potatoes', 33, 99);
team.addGame('Newbloods', 99, 1);
console.log(team.players);
console.log(team.games);
