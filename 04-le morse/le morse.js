 // 1-morse code mapping

const latinToMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..'
};

const morseToLatin = {
    '-': "T", '--': "M", '---': "O", '--.': "G", '--.-': "Q", '--..': "Z", '-.': "N", '-.-': "K", '-.--': "Y", '-.-.': "C", '-..': "D", '-..-': "X", '-...': "B", '.': "E", '.-': "A", '.--': "W", '.---': "J", '.--.': "P", '.-.': "R", '.-..': "L", '..': "I", '..-': "U", '..-.': "F", '...': "S", '...-': "V", '....': "H"
};

// 2-text to morse code
function getLatinCharacterList(text) {
    return text
        .toUpperCase()
        .split('')
        .map(char => latinToMorse[char] || char)
        .join(' ')
}

// 3-morse code to text    ( work  on  make morse code to text)
/* function translateLatinCharacter(code){
    return code.split (' ').map(code=>{
       for(let char in morseToLatin){
   // It maps each character to its Morse code equivalent using latinToMorse[char].
  // If a character doesn't have a Morse code equivalent (e.g., punctuation), it remains unchanged.
        if (morseToLatin[char]===code)
          return char 
       }
       return code
   }).join (' ')
} */

function translateLatinCharacter(code) {
     // It maps each character to its Morse code equivalent using latinToMorse[char].
  // If a character doesn't have a Morse code equivalent (e.g., punctuation), it remains unchanged.
    return code.split(' ').map(char => morseToLatin[char] || char).join('');
}


//4-testing
const inputText = 'loptop'
console.log(inputText)

const morseCode = getLatinCharacterList(inputText)
console.log(`Text to Morse: ${morseCode}`)

const decodeText = translateLatinCharacter(morseCode)
console.log(`Morse To Latin : ${decodeText}`)

 
