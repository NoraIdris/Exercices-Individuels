// Étape 1: Fonction isValidDate
function isValidDate(dateString) {
    const [day, month, year] = dateString.split('/')
    const numericDay = parseInt(day, 10)
    const numericMonth = parseInt(month, 10)
    const numericYear = parseInt(year, 10)

    if (isNaN(numericDay) || isNaN(numericMonth) || isNaN(numericYear)) {
        return false; // Assurez-vous que tous les éléments sont des nombres
    }

    if (numericYear < 1000 || numericYear > 9999) {
        return false; // Vérifiez la plage d'années
    }

    if (numericMonth < 1 || numericMonth > 12) {
        return false; // Vérifiez la plage de mois
    }

    const maxDays = maxDaysInMonth(numericMonth, numericYear);
    if (numericDay < 1 || numericDay > maxDays) {
        return false; // Vérifiez le nombre de jours dans le mois
    }

    return true;
}

function maxDaysInMonth(month, year) {
    const monthDays = [31, 28 + isLeapYear(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthDays[month - 1];
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0;
}


//Étape 2: Fonction isPalindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function isDatePalindrome(dateString) {
    if (!isValidDate(dateString)) {
        return false; // Si la date n'est pas valide, retourne false
    }
    // Supprimez les '/' et vérifiez si la chaîne est un palindrome
    const dateOnly = dateString.split('/').join('');
    return isPalindrome(dateOnly);
}

//Étape 3: Fonction getNextPalindromes
function getNextPalindromes(x) {
    const today = new Date();
    let count = 0;
    const palindromes = [];

    while (count < x) {
        today.setDate(today.getDate() + 1);
        const dateString = formatDate(today);
        if (isDatePalindrome(dateString)) {
            palindromes.push(dateString);
            count++;
        }
    }

    return palindromes;
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}


//Étape 4: Refactorisation de la fonction isPalindrome 
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function isDatePalindrome(dateString) {
    if (!isValidDate(dateString)) {
        return false; // Si la date n'est pas valide, retourne false
    }
    // Supprimez les '/' et vérifiez si la chaîne est un palindrome
    const dateOnly = dateString.split('/').join('');
    return isPalindrome(dateOnly);
}
