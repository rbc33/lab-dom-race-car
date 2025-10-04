window.onload = function () {
	const startButton = document.getElementById('start-button')
	const restartButton = document.getElementById('restart-button')
	restartButton.addEventListener('click', function () {
		// Call the restartGame function when the button is clicked
		restartGame()
	})

	// The function that reloads the page to start a new game
	function restartGame() {
		location.reload()
	}
	let game

	startButton.addEventListener('click', () => {
		startGame()
	})

	function startGame() {
		game = new Game()
		game.start()
		console.log('Game started') // Para verificar que la función se está ejecutando
	}

	// Function that handles keydown event
	function handleKeydown(event) {
		const key = event.key
		const possibleKeystrokes = [
			'ArrowLeft',
			'ArrowUp',
			'ArrowRight',
			'ArrowDown',
		]

		// Check if the pressed key is in the possibleKeystrokes array
		if (possibleKeystrokes.includes(key)) {
			event.preventDefault()

			// Update player's directionX and directionY based on the key pressed
			switch (key) {
				case 'ArrowLeft':
					game.player.directionX = -1
					break
				case 'ArrowUp':
					game.player.directionY = -1
					break
				case 'ArrowRight':
					game.player.directionX = 1
					break
				case 'ArrowDown':
					game.player.directionY = 1
					break
			}
		}
	}

	// Add the handleKeydown function as an event listener for the keydown event
	window.addEventListener('keydown', handleKeydown)
}
