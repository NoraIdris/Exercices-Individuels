// Define available colors and generate the secret code
const COLORS = ["blue", "red", "yellow", "green", "purple", "orange", "black", "white"];
const secretCode = generateSecretCode(COLORS, 4);

// Function to generate a secret code of a specified length
function generateSecretCode(colors, length) {
    let code = [];
    for (let i = 0; i < length; i++) {
        code.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    return code;
}

// Function to validate the player's guess
function isValidGuess(guess) {
    return guess.every(color => COLORS.includes(color));
}

// Function to get feedback (well placed and wrong placed)
function getFeedback(guess, secretCode) {
    let wellPlaced = 0;
    let wrongPlaced = 0;
    let tempSecret = [...secretCode];

    // Check for well-placed colors
    guess.forEach((color, index) => {
        if (color === secretCode[index]) {
            wellPlaced++;
            tempSecret[index] = null;  // Mark as matched
        }
    });

    // Check for wrong-placed colors
    guess.forEach((color, index) => {
        if (color !== secretCode[index] && tempSecret.includes(color)) {
            wrongPlaced++;
            tempSecret[tempSecret.indexOf(color)] = null;  // Mark as matched
        }
    });

    return { wellPlaced, wrongPlaced };
}

// Function to handle form submission and process the guess
document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect the player's guess
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;
    const color4 = document.getElementById('color4').value;
    const guess = [color1, color2, color3, color4];

    // Validate the guess
    if (!isValidGuess(guess)) {
        document.getElementById('feedback').textContent = "Invalid guess! Please select valid colors.";
        return;
    }

    // Check if the guess is correct
    const { wellPlaced, wrongPlaced } = getFeedback(guess, secretCode);

    // Provide feedback to the player
    if (wellPlaced === secretCode.length) {
        document.getElementById('feedback').textContent = "Congratulations! You've guessed the correct combination!";
    } else {
        document.getElementById('feedback').textContent = `Well placed: ${wellPlaced}, Wrong placed: ${wrongPlaced}`;
    }
});

