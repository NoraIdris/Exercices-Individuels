// Étape 1 : Organisation de dossiers

// Crée un dossier exercices_individuels/ dans le dossier ADA que tu as déjà dû créer lors de la rentrée.
// Dans ce dossier exercices_individuels/, crée un dossier bonjour_javascript/.
// Dans ce dossier bonjour_javascript/, crée un fichier script.js.

// Étape 2 : Premier code

let message= 'Bonjour!'
// console.log(message)

let firstname = 'Beyonce'
console.log(firstname)


message = 'Bonjour ' + firstname + ' !';
console.log(message)

// Étape 3 : Dans une fonction

//Crée une fonction sayHello() et place le code que tu as écrit précédemment à l'intérieur de cette fonction.

function sayHello() {
  let message = 'Bonjour !';
  let firstname = 'Beyonce';
  message = 'Bonjour ' + firstname + ' !';
  console.log(message);
}

//(Optionnel) Étape 4 : Un second paramètre
function sayHello(firstname, hour) {
    let greeting = hour >= 18 ? 'Bonsoir' : 'Bonjour';
    let message = greeting + ' ' + firstname + ' !';
    console.log(message);
  }

 // Teste ta fonction avec les appels suivants :
 
  sayHello('Beyonce', 11);
  sayHello('Beyonce', 18); 
  sayHello('Beyonce', 17);   




  
