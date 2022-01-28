
const canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")
const player = new Player (ctx)
const background = new Background (ctx)
const obstacles = new Obstacles(ctx)

const game = new Game(ctx, player, background, obstacles)

const startButton = document.getElementById("start-button")
  startButton.onclick = () => {
    startButton.remove()
    game.start();
  };

  


