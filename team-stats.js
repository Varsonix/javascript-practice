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
  }
};
