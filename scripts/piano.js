/**
 * Purpose: The script that performs all the functionality for the piano
 *
 */

//Declaring the id/keys of the piano
let pianoNotes = ['a', 'w' , 's', 'e', 'd', 'f', 't' ,'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';'];

/**
 * createAudio is a helper method that will create an audio of a note passed in. This note must exist
 * as a file in the notes directory.
 * @param note
 * @returns {HTMLAudioElement}
 */
function createAudio(note) {
    return new Audio("./notes/" + note + ".wav");
}


// This loop goes through the pianoNotes array to collect all the keys.
for (let i = 0; i < pianoNotes.length; i++) {
    // The array holds the names of the notes file name as well as their ids. Store it.
    let elemID = pianoNotes[i];

    //Use the stored elemID to create an audio
    let audio = createAudio(elemID);

    //Once an audio is created, a function is created for when the user clicks on a key via mouse
    document.getElementById(elemID).onclick = function () {
        audio.currentTime = 0; // Reset the audio to the beginning, this makes it so that there is no delay in sound
        audio.play();

    };

    //Listens to if a user presses a key on their keyboard
    document.addEventListener('keypress', function (event) {
        //Change the key pressed to lower case so that it can be compared
        let key = event.key.toLowerCase();

        //if the key pressed exists on the piano
        if (key === elemID) {
            audio.currentTime = 0; // Reset the audio to the beginning

            // if the key was a black key
            if(document.getElementById(elemID).classList.contains("black"))
            {
                //change its colour #62627e (grayish purple) to highlight to the user it's been pressed.
                document.getElementById(elemID).style.backgroundColor= "#62627e";
            }
            // else the key must be white
            else{
                //change its colour to #c9c9ee (light purple) highlight to the user it's been pressed.
                document.getElementById(elemID).style.backgroundColor= "#c9c9ee";
            }

            audio.play();

            setTimeout(function () {
                //Change the colour of the key back to its original colour 300 milliseconds in the future.
                document.getElementById(elemID).style.backgroundColor = "";
            }, 300);
        }
    });
}

// When the button with the id of "maryBtn" is pressed it performs the following anon function.
// It should play a couple seconds of the song "Mary Had a Little Lamb"
document.getElementById("maryBtn").onclick= function(){
    //Disable all buttons that play song inorder to avoid the user spamming the buttons
    document.getElementById("maryBtn").disabled=true;
    document.getElementById("canadaBtn").disabled=true;

    // The first note it d, so it shall be created
    let audio = createAudio('d');
    // the background of the key is changed to indicate it has been played
    document.getElementById("d").style.backgroundColor= "#c9c9ee";
    audio.play();

    // In the future the following event will take place
    setTimeout(function () {
        // the previous key is not highlighted anymore since it has finished playing
        document.getElementById("d").style.backgroundColor= "";
        // the next note is highlighted and played
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 500);

    // This proccess repeats for the rest of the song

    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("a").style.backgroundColor= "#c9c9ee";
        audio = createAudio('a');
        audio.play();
    }, 1000);

    setTimeout(function () {
        document.getElementById("a").style.backgroundColor= "";
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 1500);


    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("d").style.backgroundColor= "#c9c9ee";
        audio = createAudio('d');
        audio.play();
    }, 2000);

    setTimeout(function () {
        audio = createAudio('d');
        audio.play();
    }, 2500);

    setTimeout(function () {
        audio = createAudio('d');
        audio.play();
    }, 3000);

    setTimeout(function () {
        document.getElementById("d").style.backgroundColor= "";
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 4000);

    setTimeout(function () {
        audio = createAudio('s');
        audio.play();
    }, 4500);

    setTimeout(function () {
        audio = createAudio('s');
        audio.play();
    }, 5000);
    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("d").style.backgroundColor= "#c9c9ee";
        audio = createAudio('d');
        audio.play();
    }, 6000);

    setTimeout(function () {
        document.getElementById("d").style.backgroundColor= "";
        document.getElementById("g").style.backgroundColor= "#c9c9ee";
        audio = createAudio('g');
        audio.play();
    }, 6500);

    setTimeout(function () {
        audio = createAudio('g');
        audio.play();
    }, 7000);

    setTimeout(function () {
        document.getElementById("g").style.backgroundColor= "";
        document.getElementById("d").style.backgroundColor= "#c9c9ee";
        audio = createAudio('d');
        audio.play();
    }, 8000);

    setTimeout(function () {
        document.getElementById("d").style.backgroundColor= "";
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 8500);

    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("a").style.backgroundColor= "#c9c9ee";
        audio = createAudio('a');
        audio.play();
    }, 9000);

    setTimeout(function () {
        document.getElementById("a").style.backgroundColor= "";
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 9500);


    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("d").style.backgroundColor= "#c9c9ee";
        audio = createAudio('d');
        audio.play();
    }, 10000);

    setTimeout(function () {
        audio = createAudio('d');
        audio.play();
    }, 10500);

    setTimeout(function () {
        audio = createAudio('d');
        audio.play();
    }, 11000);

    setTimeout(function () {
        document.getElementById("d").style.backgroundColor= "";
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 12000);

    setTimeout(function () {
        audio = createAudio('s');
        audio.play();
    }, 12500);

    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("d").style.backgroundColor= "#c9c9ee";
        audio = createAudio('d');
        audio.play();
    }, 13000);

    setTimeout(function () {
        document.getElementById("d").style.backgroundColor= "";
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 13500);

    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("a").style.backgroundColor= "#c9c9ee";
        audio = createAudio('a');
        audio.play();
    }, 14000);

    setTimeout(function () {
        document.getElementById("a").style.backgroundColor= "";
        document.getElementById("maryBtn").disabled=false;
        document.getElementById("canadaBtn").disabled=false;
    }, 14500);


}

// When the button with the id of "canadaBtn" is pressed it performs the following anon function.
// It should play a couple seconds of the Canadian national anthem
document.getElementById("canadaBtn").onclick= function(){
    //Disable all buttons that play song inorder to avoid the user spamming the buttons
    document.getElementById("maryBtn").disabled=true;
    document.getElementById("canadaBtn").disabled=true;

    // The first note it d, so it shall be created
    let audio = createAudio('d');
    // the background of the key is changed to indicate it has been played
    document.getElementById("d").style.backgroundColor= "#c9c9ee";
    audio.play();

    
    // In the future the following event will take place
    setTimeout(function () {
        // the previous key is not highlighted anymore since it has finished playing
        document.getElementById("d").style.backgroundColor= "";
        // the next note is highlighted and played
        document.getElementById("g").style.backgroundColor= "#c9c9ee";
        audio = createAudio('g');
        audio.play();
    }, 500);

    // This proccess repeats for the rest of the song

    setTimeout(function () {
        audio = createAudio('g');
        audio.play();
    }, 1100);


    setTimeout(function () {
        document.getElementById("g").style.backgroundColor= "";
        document.getElementById("a").style.backgroundColor= "#c9c9ee";
        audio = createAudio('a');
        audio.play();
    }, 1500);

    setTimeout(function () {
        document.getElementById("a").style.backgroundColor= "";
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 2500);

    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("d").style.backgroundColor= "#c9c9ee";
        audio = createAudio('d');
        audio.play();
    }, 3000);

    setTimeout(function () {
        document.getElementById("d").style.backgroundColor= "";
        document.getElementById("f").style.backgroundColor= "#c9c9ee";
        audio = createAudio('f');
        audio.play();
    }, 3500);

    setTimeout(function () {
        document.getElementById("f").style.backgroundColor= "";
        document.getElementById("g").style.backgroundColor= "#c9c9ee";
        audio = createAudio('g');
        audio.play();
    }, 4000);

    setTimeout(function () {
        document.getElementById("g").style.backgroundColor= "";
        document.getElementById("h").style.backgroundColor= "#c9c9ee";
        audio = createAudio('h');
        audio.play();
    }, 4500);

    setTimeout(function () {
        document.getElementById("h").style.backgroundColor= "";
        document.getElementById("s").style.backgroundColor= "#c9c9ee";
        audio = createAudio('s');
        audio.play();
    }, 5000);

    setTimeout(function () {
        document.getElementById("s").style.backgroundColor= "";
        document.getElementById("d").style.backgroundColor= "#c9c9ee";
        audio = createAudio('d');
        audio.play();
    }, 6000);

    setTimeout(function () {
        document.getElementById("d").style.backgroundColor= "";
        document.getElementById("t").style.backgroundColor= "#62627e";
        audio = createAudio('t');
        audio.play();
    }, 6500);

    setTimeout(function () {
        audio = createAudio('t');
        audio.play();
    }, 7200);

    setTimeout(function () {
        document.getElementById("t").style.backgroundColor= "";
        document.getElementById("g").style.backgroundColor= "#c9c9ee";
        audio = createAudio('g');
        audio.play();
    }, 7500);

    setTimeout(function () {
        document.getElementById("g").style.backgroundColor= "";
        document.getElementById("h").style.backgroundColor= "#c9c9ee";
        audio = createAudio('h');
        audio.play();
    }, 8500);

    setTimeout(function () {
        document.getElementById("h").style.backgroundColor= "";
        document.getElementById("j").style.backgroundColor= "#c9c9ee";
        audio = createAudio('j');
        audio.play();
    }, 9000);

    setTimeout(function () {
        audio = createAudio('j');
        audio.play();
    }, 9500);

    setTimeout(function () {
        document.getElementById("j").style.backgroundColor= "";
        document.getElementById("h").style.backgroundColor= "#c9c9ee";
        audio = createAudio('h');
        audio.play();
    }, 10000);

    setTimeout(function () {
        audio = createAudio('h');
        audio.play();
    }, 10500);

    setTimeout(function () {
        document.getElementById("h").style.backgroundColor= "";
        document.getElementById("g").style.backgroundColor= "#c9c9ee";
        audio = createAudio('g');
        audio.play();
    }, 11000);

    setTimeout(function () {
        document.getElementById("g").style.backgroundColor= "";
        document.getElementById("maryBtn").disabled=false;
        document.getElementById("canadaBtn").disabled=false;
    }, 11500);
}