const body = document.body;
const stageElement = document.createElement('div');
const playerElement = document.createElement('div');
let enemyElement;
const button = document.querySelector('#restart-button');
let jumping = false;
let playerAlive = true;
let landingPageRemove = document.querySelector('.landing-page');
let counter = 0;

const playerPosition = {
  x: 2,
  y:3
};

const enemyPosition = {
  x: 13,
  y:3
};

const renderStage = () => {
  let parentContainer = document.querySelector('.parent-container');
  stageElement.classList.add('stage');
  parentContainer.appendChild(stageElement);
  body.appendChild(parentContainer);
};
renderStage();

const renderPlayer = () => {
  playerElement.classList.add('player');
  stageElement.appendChild(playerElement);
};
renderPlayer();

const playerLocation = () => {
  playerElement.style.top = (playerPosition.y * 100).toString() + 'px';
  playerElement.style.left = (playerPosition.x * 100).toString() + 'px';
};
playerLocation();

const enemyLocation = () => {
    enemyElement.style.top = (enemyPosition.y * 100).toString() + 'px';
    enemyElement.style.left = (enemyPosition.x * 100).toString() + 'px';
};

const renderEnemy = () => {
    enemyElement = document.createElement('div');
    enemyElement.classList.add('enemy');
    stageElement.appendChild(enemyElement);
    enemyLocation();
    counter ++
    if(counter === 10) {
      alert('congrats you won!')
      renderStage()
    }
};

setTimeout(renderEnemy, 5000);

const removePlayer = () => {
  playerElement.remove();
  alert(`Rest in Pepperoni, you lose`);
  playerAlive = false;
}

const killPlayer = (villian, hero) => {
  if (villian.x === hero.x && villian.y === hero.y) {
    setTimeout(removePlayer, 200);
    landingPageRemove.remove();
  }
};

const moveEnemyLogic = () => {
  if (playerAlive) {
    enemyPosition.x--;
    enemyElement.style.left = (enemyPosition.x * 100).toString() + 'px';
  }
  if (jumping === false) {
    killPlayer(enemyPosition, playerPosition)
  }
  mapEdge(enemyPosition);
};

const movingFunction = setInterval(moveEnemyLogic, 160);

const mapEdge = (enemies) => {
  if (enemies.x <= -1 || enemies.x > 14) {
    enemyElement.remove();
    enemyPosition.x = 13;
    enemyPosition.y = 3;
    renderEnemy();
  }
};

const drop = () => {
  jumping = false;
  playerElement.style.top = (playerPosition.y + 3 * 99).toString() + 'px';
};

const jump = () => {
  jumping = true;
  playerElement.style.top = (playerPosition.y + 1 * 190).toString() + 'px';
  setTimeout(drop, 500);
};

body.addEventListener("keydown", event => {
  if([38].includes(event.keyCode)) {
    let key = event.keyCode;
    event.preventDefault();
    switch (key) {
      case 38:
        jump();
        break;
      default:
    }
  }
});

button.addEventListener("click", () =>{
  location.reload();
});
