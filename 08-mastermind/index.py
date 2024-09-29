import random

# Les couleurs possibles
COLORS = ["blue", "red", "yellow", "green", "purple", "orange", "black", "white"]

# Fonction pour valider la proposition du joueur
def is_valid_guess(guess, valid_colors):
    """
    Vérifie si la proposition est composée uniquement des couleurs valides.
    """
    return all(color in valid_colors for color in guess) and len(guess) == len(secret_code)

# Fonction pour vérifier si la combinaison proposée est correcte
def is_correct_guess(guess, secret_code):
    """
    Vérifie si la combinaison proposée est la même que la combinaison secrète.
    """
    return guess == secret_code

# Fonction pour obtenir des indices (nombre de pions bien placés et de bonnes couleurs mal placées)
def get_feedback(guess, secret_code):
    """
    Retourne le nombre de pions bien placés et le nombre de bonnes couleurs mal placées.
    """
    well_placed = sum([1 for i in range(len(guess)) if guess[i] == secret_code[i]])
    wrong_placed = sum([min(guess.count(color), secret_code.count(color)) for color in set(guess)]) - well_placed
    return well_placed, wrong_placed

# Fonction pour gérer la partie
def play_game(secret_code, max_attempts=12):
    """
    Gère le déroulement de la partie.
    """
    attempts = 0
    while attempts < max_attempts:
        guess = input(f"Essai {attempts + 1}/{max_attempts} : Entrez votre combinaison (ex: blue red) : ").lower().split()
        
        if not is_valid_guess(guess, COLORS):
            print("Combinaison invalide ! Veuillez choisir parmi les couleurs suivantes : blue, red, yellow, green, purple, orange, black, white.")
            continue
        
        if is_correct_guess(guess, secret_code):
            print("Félicitations ! Vous avez trouvé la bonne combinaison.")
            return True
        
        well_placed, wrong_placed = get_feedback(guess, secret_code)
        print(f"Bien placés: {well_placed}, Mal placés: {wrong_placed}")
        attempts += 1
    
    print("Désolé, vous n'avez pas trouvé la combinaison. La bonne réponse était:", secret_code)
    return False

# Fonction pour générer une combinaison secrète aléatoire
def generate_secret_code(valid_colors, length=4):
    """
    Génère une combinaison secrète aléatoire.
    """
    return [random.choice(valid_colors) for _ in range(length)]

# Générer une combinaison secrète et exécuter le jeu
secret_code = generate_secret_code(COLORS)
play_game(secret_code)
