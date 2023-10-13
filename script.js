let score = JSON.parse(localStorage.getItem('rezultati')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };



  function luajLojen(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'gershere') {
      if (computerMove === 'gur') {
        result = 'Ti Humbe.';
      } else if (computerMove === 'leter') {
        result = 'Ti Fitove.';
      } else if (computerMove === 'gershere') {
        result = 'Barazim.';
      }

    } else if (playerMove === 'leter') {
      if (computerMove === 'gur') {
        result = 'Ti Fitove.';
      } else if (computerMove === 'leter') {
        result = 'Barazim.';
      } else if (computerMove === 'gershere') {
        result = 'Ti Humbe.';
      }
      
    } else if (playerMove === 'gur') {
      if (computerMove === 'gur') {
        result = 'Barazim.';
      } else if (computerMove === 'leter') {
        result = 'Ti Humbe.';
      } else if (computerMove === 'gershere') {
        result = 'Ti Fitove.';
      }
    }

    if (result === 'Ti Fitove.') {
      score.wins += 1;
    } else if (result === 'Ti Humbe.') {
      score.losses += 1;
    } else if (result === 'Barazim.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`Ti zgjodhe ${playerMove}. Kompjuteri zgjodhi ${computerMove}. ${result}
Fitoret: ${score.wins}, Humbjet: ${score.losses}, Barazimet: ${score.ties}`);
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'gur';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'leter';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'gershere';
    }

    return computerMove;
  }