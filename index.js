var location1, location2, location3;
location1 = 3;
location2 = 4;
location3 = 5;

var guess;

var hits = 0;

var guesses = 0;

var isSunk = false;


while (isSunk == false) {
    guess = prompt("Gotów, cel, pal! (podaj liczbę z zakresu 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Proszę podać prawidłowy numer komórki");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Trafiony")
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                console.log("Zatopiłeś okręt");
            }
        } else {
            alert("Pudło")
        }


    }
}
var stats = "Potrzebowałeś " + guesses + " prób, by zatopić okręt " + "czyli Twoja efektywność wynosi: " + (3 / guesses) + ".";
alert(stats);