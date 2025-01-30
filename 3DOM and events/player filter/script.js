const playersArr = [
    { team: "Manchester City", player: "Erling Haaland", position: "Striker", salary: 3750000 },
    { team: "Manchester City", player: "Kevin De Bruyne", position: "Midfielder", salary: 4000000 },
    { team: "Manchester City", player: "Jack Grealish", position: "Winger", salary: 1200000 },
    { team: "Manchester City", player: "Rodri", position: "Midfielder", salary: 1500000 },
    { team: "Manchester City", player: "Rúben Dias", position: "Defender", salary: 1700000 },
    { team: "Paris Saint-Germain", player: "Gianluigi Donnarumma", position: "Goalkeeper", salary: 1500000 },
    { team: "Paris Saint-Germain", player: "Achraf Hakimi", position: "Defender", salary: 1000000 },
    { team: "Paris Saint-Germain", player: "Marco Verratti", position: "Midfielder", salary: 1200000 },
    { team: "Paris Saint-Germain", player: "Randal Kolo Muani", position: "Striker", salary: 1500000 },
    { team: "Paris Saint-Germain", player: "Vitinha", position: "Midfielder", salary: 1000000 },
    { team: "Barcelona", player: "Robert Lewandowski", position: "Striker", salary: 1700000 },
    { team: "Barcelona", player: "Pedri", position: "Midfielder", salary: 1000000 },
    { team: "Barcelona", player: "Frenkie de Jong", position: "Midfielder", salary: 1200000 },
    { team: "Barcelona", player: "Jules Koundé", position: "Defender", salary: 1100000 },
    { team: "Barcelona", player: "João Félix", position: "Winger", salary: 1200000 },
    { team: "Real Madrid", player: "Vinícius Júnior", position: "Winger", salary: 1800000 },
    { team: "Real Madrid", player: "Rodrygo", position: "Winger", salary: 1300000 },
    { team: "Real Madrid", player: "Luka Modrić", position: "Midfielder", salary: 1400000 },
    { team: "Real Madrid", player: "Thibaut Courtois", position: "Goalkeeper", salary: 1500000 },
    { team: "Real Madrid", player: "Antonio Rüdiger", position: "Defender", salary: 1300000 },  
    { team: "Liverpool", player: "Mohamed Salah", position: "Forward", salary: 2200000 },
    { team: "Liverpool", player: "Darwin Núñez", position: "Striker", salary: 1500000 },
    { team: "Liverpool", player: "Virgil van Dijk", position: "Defender", salary: 1700000 },
    { team: "Liverpool", player: "Trent Alexander-Arnold", position: "Defender", salary: 1600000 },
    { team: "Liverpool", player: "Alisson Becker", position: "Goalkeeper", salary: 1500000 }, 
    { team: "Chelsea", player: "Raheem Sterling", position: "Forward", salary: 1300000 },
    { team: "Chelsea", player: "Enzo Fernández", position: "Midfielder", salary: 1400000 },
    { team: "Chelsea", player: "Thiago Silva", position: "Defender", salary: 1000000 },
    { team: "Chelsea", player: "Christopher Nkunku", position: "Striker", salary: 1500000 },
    { team: "Chelsea", player: "Reece James", position: "Defender", salary: 1200000 },
    { team: "Manchester United", player: "Bruno Fernandes", position: "Midfielder", salary: 1300000 },
    { team: "Manchester United", player: "Marcus Rashford", position: "Forward", salary: 1700000 },
    { team: "Manchester United", player: "André Onana", position: "Goalkeeper", salary: 1300000 },
    { team: "Manchester United", player: "Jadon Sancho", position: "Winger", salary: 1200000 },
    { team: "Manchester United", player: "Casemiro", position: "Midfielder", salary: 1600000 },
    { team: "Bayern Munich", player: "Joshua Kimmich", position: "Midfielder", salary: 1500000 },
    { team: "Bayern Munich", player: "Leroy Sané", position: "Winger", salary: 1200000 },
    { team: "Bayern Munich", player: "Manuel Neuer", position: "Goalkeeper", salary: 1700000 },
    { team: "Bayern Munich", player: "Thomas Müller", position: "Forward", salary: 1300000 },
    { team: "Bayern Munich", player: "Kingsley Coman", position: "Winger", salary: 1100000 }
  ];
const selectContainer = document.querySelector('select');
const playerContainer = document.querySelector('.players-container');

function playerCard(playerClub){
    const players = playerClub === "all" ? playersArr : playersArr.filter(({team})=>
        team === playerClub);
    return players.map(({team, player, position, salary})=>{
        return `
        <div class="card">
        <h3>${team}</h3>
        <p><strong>Player: </strong>${player}</p>
        <p><strong>Position: </strong>${position}</p>
        <p><strong>Salary: </strong>£${salary}</p>

        </div>
        `
    }).join('');

}
selectContainer.addEventListener('change',()=>{
    // console.log(playersCard(selectContainer.value));
    playerContainer.innerHTML = playerCard(selectContainer.value);
})