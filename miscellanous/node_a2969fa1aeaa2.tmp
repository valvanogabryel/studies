class Players {
    constructor(playerName, rank) {
        this.playerName = playerName;
        this.rank = rank;
    }
}

const blanke = new Players('guapo', 'c3');
const swag = new Players('dan', 'c3');
const ranks = ['c1', 'c2', 'c3', 'gc'];
let isGrandChampion = () => {
    if (blanke.rank != ranks[3] && swag.rank != ranks[3]) {
        return false
    } else {
        return true
    }
}

while (isGrandChampion() == false) {
    console.log('Melhore...');
}

isGrandChampion()