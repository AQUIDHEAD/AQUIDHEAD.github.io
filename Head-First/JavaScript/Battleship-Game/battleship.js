var randomLoc = Math.random() * 5;

var location_1 = randomLoc;
var location_2 = location_1 + 1;
var location_3 = location_2 + 1;

//var location_1 = 3;
//var location_2 = 4;
//var location_3 = 5;

var location = [location_1,location_2,location_3];

var guess;
var hits = 0;
var guesses = 0;
var hacker_command;

var isSunk = false;

while(isSunk == false) {
    guess = prompt("Ready, Aim, Fire!! (select a number from 0-6) protip: dont mess up ;)");
    if (guess == 150809) {
        alert("Opening internal terminal...");
        hacker_command = prompt("Enter Command");
        if (hacker_command == "terminate") {
            alert("Terminating");
            isSunk = true;
        }
    }
    if (guess < 0 || guess > 6) {
        alert("Please enter valid cell number!!");
    } else {
        guesses++;  
    }

    //for (var i = location.length - 1; i >= 0; i--) {
    //    if (guess == location[i]) { 
    //        hits++;
    //        alert("HIT!! HOW'D YOU DO THAT!!");
    //        location.splice(i, 1);
    //    } else {
    //        alert("MISSED!! (protip: aim a little better next time)"); 
    //    }
    //}

    if (guess == location_1 || guess == location_2 || guess == location_3) {
    
        hits++;
        alert("HIT!! HOW'D YOU DO THAT!!");
    }else {
        alert("MISSED!! (protip: aim a little better next time)");  
    }
    if (hits == 3) {
        isSunk = true;
        alert("ILL BE BACK FOR REVENGE!!!");
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your accuracy was " + (3/guesses);

alert(stats);

