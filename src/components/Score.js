let score = 0;

const scoreDOM = document.getElementById("score");
const currentScoreDOM = document.getElementById("current-score");
const finalScoreDOM = document.getElementById("final-score");

export const ScoreManager = {
  reset() {
    score = 0;
    this.updateDOM();
  },

  getScore() {
    return score;
  },

  increment() {
    score++;
    this.updateDOM();
  },

  set(newScore) {
    score = newScore;
    this.updateDOM();
  },

  updateDOM() {
    if (scoreDOM) scoreDOM.innerText = score;
    if (currentScoreDOM) currentScoreDOM.innerText = score;
    if (finalScoreDOM) finalScoreDOM.innerText = score;
  },
};
