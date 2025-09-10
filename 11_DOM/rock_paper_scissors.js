const choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll("button");

const score = JSON.parse(localStorage.getItem('messaage')) || {
    win_count: 0,
    loss_count: 0,
    total_games: 0,
    win_percent: 0
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "Reset Score") {
            score.win_count = 0;
            score.loss_count = 0;
            score.total_games = 0;
            score.win_percent = 0;
            localStorage.setItem('messaage', JSON.stringify(score));
            alert(`✅ Score Reset!
Wins: ${score.win_count}
Losses: ${score.loss_count}
Total Games: ${score.total_games}
Win Percentage: ${score.win_percent.toFixed(2)}%`);
            return;
        }

        const userChoice = button.textContent;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = "";

        if (userChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result = "🎉 You win!";
            score.win_count += 1;
        } else {
            result = "😢 You lose!";
            score.loss_count += 1;
        }

        score.total_games += 1;
        score.win_percent = (score.win_count / score.total_games) * 100;
        localStorage.setItem('messaage', JSON.stringify(score));

        alert(`👉 You chose: ${userChoice}
🤖 Computer chose: ${computerChoice}
📊 ${result}
Total Games: ${score.total_games}   
Wins Count: ${score.win_count}
Losses Count: ${score.loss_count}               
Win Percentage: ${score.win_percent.toFixed(2)}%`);
    });
});