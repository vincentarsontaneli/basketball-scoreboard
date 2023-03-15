
let team1ScoreEl = document.getElementById("team-1-score")
let team2ScoreEl = document.getElementById("team-2-score")
let team1Score = 0
let team2Score = 0


function team1Add1() {
    team1Score += 1
    team1ScoreEl.textContent = team1Score
}

function team1Add2() {
    team1Score += 2
    team1ScoreEl.textContent = team1Score
}

function team1Add3() {
    team1Score += 3
    team1ScoreEl.textContent = team1Score
}

function team2Add1() {
    team2Score += 1
    team2ScoreEl.textContent = team2Score
}

function team2Add2() {
    team2Score += 2
    team2ScoreEl.textContent = team2Score}

function team2Add3() {
    team2Score += 3
    team2ScoreEl.textContent = team2Score}