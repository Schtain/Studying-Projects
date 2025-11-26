let footballTeam = { team: "Ordo Flammae", year: 1347, headCoach: "Severian Mortis Auctor", players: [{ name: "Lucius Pyrebrand", position: "forward", isCaptain: true }, { name: "Gregor Blackmantle", position: "midfielder", isCaptain: false }, { name: "Elias Thornscribe", position: "defender", isCaptain: false }, { name: "Father Octavian Ashveil", position: "goalkeeper", isCaptain: false }, { name: "Marek Ironquill", position: "defender", isCaptain: false }, { name: "Silas Emberchase", position: "midfielder", isCaptain: false }] };

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const selectPlayers = document.getElementById("players");
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;
const container = document.getElementById("player-cards");

function choosePlayersCards(playerPosition) {
    let players = playerPosition === "all" ? footballTeam.players : footballTeam.players.filter(p => p.position === playerPosition);

    container.innerHTML = "";
    players.forEach(player => {
        const card = document.createElement("div");
        card.classList.add("player-card");

        const name = document.createElement("h2");
        name.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;

        const position = document.createElement("p");
        position.textContent = `Position: ${player.position}`;

        card.appendChild(name);
        card.appendChild(position);

        container.appendChild(card);
    })
};

choosePlayersCards("all");

selectPlayers.addEventListener("change", () => choosePlayersCards(selectPlayers.value))