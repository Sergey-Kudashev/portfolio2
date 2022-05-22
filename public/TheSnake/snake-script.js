let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let grid = 16;
let tutorial = 1;
let difficulty = 4;
let count = 0; 
let score = 0;
let bestScore = 0;
let snake = {
    x: 16,
    y: 16,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
}

let berry = {
    x: 160,
    y: 160
}

let rock = {
    x: 0,
    y: 0
}

function hardGame() {
    if (difficulty === 3) {
        rock.x = randomInt(0, 16) * grid
        rock.y = randomInt(0, 20) * grid
    } else {
        rock.x = -50
        rock.y = -50
    }
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min))
}

function restartGame() {
    snake.x = 16,
    snake.y = 16,
    snake.dx = grid,
    snake.dy = 0,
    snake.cells = [],
    snake.maxCells = 4

    berry.x = randomInt(0 , 16) * grid
    berry.y = randomInt(0 , 20) * grid

    if (score > bestScore) {
        bestScore = score
        document.querySelector('.best-score-number').innerHTML = bestScore
        score = 0
        document.querySelector('.score-number').innerHTML = score
    } else {score = 0
        document.querySelector('.score-number').innerHTML = score}

        hardGame()
}

function loop() {
    requestAnimationFrame(loop);

    if ( ++count < difficulty) {
        return
    }

    count = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    snake.x += snake.dx;
    snake.y += snake.dy;

    if (snake.x >= canvas.width) {
        snake.x = 0
    } else if (snake.x < 0) {
        snake.x = canvas.width
    }

    if (snake.y >= canvas.height) {
        snake.y = 0
    } else if (snake.y < 0) {
        snake.y = canvas.height
    }

    snake.cells.unshift({x: snake.x, y: snake.y})
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop()
    } 

    ctx.fillStyle = 'red'
    ctx.fillRect(berry.x, berry.y, grid, grid)

    if (difficulty === 3) {
        ctx.fillStyle = 'black'
    ctx.fillRect(rock.x, rock.y, grid, grid)
    }

    ctx.fillStyle = 'green'
    snake.cells.forEach(function(cell, index) {
        ctx.fillRect(cell.x, cell.y, grid, grid)

        if (cell.x === berry.x && cell.y === berry.y) {
            snake.maxCells++
            score++
            berry.x = randomInt(0 , 16) * grid
            berry.y = randomInt(0 , 20) * grid

            document.querySelector('.score-number').innerHTML = score
            hardGame()
        }

        if (cell.x === rock.x && cell.y === rock.y) {
            restartGame()
        }

        

        for (let i = index + 1; i < snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                restartGame()
            }
        }
    })
    
}

const easyBtn = document.querySelector('.easy-diff')
const normalBtn = document.querySelector('.normal-diff')
const hardBtn = document.querySelector('.hard-diff')

easyBtn.addEventListener('click', () => {
    difficulty = 6
    if (normalBtn.classList.contains("active-button") || (hardBtn.classList.contains("active-button"))) {
        normalBtn.classList.remove('active-button')
        hardBtn.classList.remove('active-button')
    }
    if (easyBtn.classList.contains('active-button')) {
        return
    } else {
        easyBtn.classList.toggle('active-button')
        restartGame()
    }
})

normalBtn.addEventListener('click', () => {
    difficulty = 4
    if (easyBtn.classList.contains("active-button") || (hardBtn.classList.contains("active-button"))) {
        easyBtn.classList.remove('active-button')
        hardBtn.classList.remove('active-button')
    }
    if (normalBtn.classList.contains('active-button')) {
        return
    } else {
        normalBtn.classList.toggle('active-button')
        restartGame()
    }
})

hardBtn.addEventListener('click', () => {
    difficulty = 3
    if (easyBtn.classList.contains("active-button") || (normalBtn.classList.contains("active-button"))) {
        easyBtn.classList.remove('active-button')
        normalBtn.classList.remove('active-button')
    }
    if (hardBtn.classList.contains('active-button')) {
        return
    } else {
        hardBtn.classList.toggle('active-button')
        restartGame()
    }
})


document.addEventListener('keydown', function (e) {
    if (e.which === 37 && snake.dx === 0) {
      snake.dx = -grid;
      snake.dy = 0;
    }
    else if (e.which === 38 && snake.dy === 0) {
      snake.dy = -grid;
      snake.dx = 0;
    }
    else if (e.which === 39 && snake.dx === 0) {
      snake.dx = grid;
      snake.dy = 0;
    }
    else if (e.which === 40 && snake.dy === 0) {
      snake.dy = grid;
      snake.dx = 0;
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tutorial').classList.add('invisible')
  })

  normalBtn.classList.toggle('active-button')
  requestAnimationFrame(loop)