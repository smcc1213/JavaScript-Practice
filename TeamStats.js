/* TEAM STATS */

const kuJayhawks = {

    _players: [
        {firstName: 'Zach',
         lastName: 'Clemence',
         age: 18},
        {firstName: 'Dillon',
         lastName: 'Wilhite',
         age: 18},
        {firstName: 'Charlie',
         lastName: 'McCarthy',
         age: 18}
    ],

    _games: [
        {opponent: 'Miami',
         teamPoints: 76,
         opponentPoints: 50},
        {opponent: 'Villanova',
         teamPoints: 81,
         opponentPoints: 65},
        {opponent:'North Carolina',
         teamPoints: 72,
         opponentPoints: 69}
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        const newPlayer = {firstName: newFirstName,
                            lastName: newLastName,
                            age: newAge};
        this._players.push(newPlayer);
    },

    addGame(newOpponentName, newTeamPoints, newOpponentPoints) {
        const newGame = {opponent: newOpponentName,
                        teamPoints: newTeamPoints,
                        opponentPoints: newOpponentPoints};
        this._games.push(newGame);
      },
};

kuJayhawks.addPlayer('Bugs', 'Bunny', 76);
console.log(kuJayhawks._players);
kuJayhawks.addGame('Titans', 100, 98);
console.log(kuJayhawks._games);


