const weight = [60, 40, 55, 75, 64];
const team1 = [];
const team2 = [];

for (let i = 0; i < weight.length; i++) {
  if (i % 2 === 0) {
    team1.push(weight[i]);
  } else {
    team2.push(weight[i]);
  }
}

function alternatingSums(team) {
  let sum = 0;
  for (let i = 0; i < team.length; i++) {
    sum = sum + team[i];
  }
  return sum;
}

const totalWeight = [];
totalWeight.push(alternatingSums(team1));
totalWeight.push(alternatingSums(team2));
console.log(totalWeight);