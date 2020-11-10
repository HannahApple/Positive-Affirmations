// Written Diary
let history = []

function displayHistory(){
    var ul = document.getElementById("written-diary-ul");

    // remove old child nodes 
    while (ul.hasChildNodes()) {  
        ul.removeChild(ul.firstChild);
    }
    // Write new child nodes 
    for(i=0; i < history.length; i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(history[i]));
        ul.appendChild(li);
    }
}

function updateHistory(){
    var textArea = document.getElementById("extra")
    history.push(textArea.value)
    displayHistory();
    textArea.value = ""
}

// Affirmation generator

let affirmations = ["I can do this!", "I got this!", "Nothing can stop me!", "I am the architect of my life; I build its foundation and choose its contents.", "Today, I am brimming with energy and overflowing with joy.", "My body is healthy; my mind is brilliant; my soul is tranquil.", "I am superior to negative thoughts and low actions.", "I have been given endless talents which I begin to utilize today.", "I forgive those who have harmed me in my past and peacefully detach from them.", "A river of compassion washes away my anger and replaces it with love.", "I am guided in my every step by Spirit who leads me towards what I must know and do.", "My relationship with myself is becoming stronger, deeper, and more stable each day.", "I possess the qualities needed to be extremely successful.", "My comfort zone is growing, expanding, and thriving.", "Creative energy surges through me and leads me to new and brilliant ideas.", "Happiness is a choice. I base my happiness on my own accomplishments and the blessings I've been given.", "My ability to conquer my challenges is limitless; my potential to succeed is infinite.", "I deserve to be employed and paid well for my time, efforts, and ideas. Each day, I am closer to finding the perfect job for me.", "I am courageous and I stand up for myself.", "My thoughts are filled with positivity and my life is plentiful with prosperity.", "Today, I abandon my old habits and take up new, more positive ones.", "Many people look up to me and recognize my worth; I am admired.", "I am blessed with an incredible family and wonderful friends.", "I acknowledge my own self-worth; my confidence is soaring.", "Everything that is happening now is happening for my ultimate good.", "I am a powerhouse; I am indestructible.", "Though these times are difficult, they are only a short phase of life.", "My future is an ideal projection of what I envision now.", "My efforts are being supported by the universe; my dreams manifest into reality before my eyes.", "I radiate beauty, charm, and grace.", "I am conquering my illness; I am defeating it steadily each day.", "My obstacles are moving out of my way; my path is carved towards greatness.", "I wake up today with strength in my heart and clarity in my mind.", "My fears of tomorrow are simply melting away.", "I am at peace with all that has happened, is happening, and will happen.", "My nature is Divine; I am a spiritual being.", "My life is just beginning.", "I create a safe and secure space for myself wherever I am.", "I give myself permission to do what is right for me.", "I am confident in my abilities", "I am proud of myself", "I allow myself to be who I am without judgment."]
function generateAffirmation(){
    let randomAffGen = Math.floor(Math.random() * Math.floor(affirmations.length));
    affirmations[randomAffGen]
    var affirmationText = document.getElementById("random-affirmation");
    affirmationText.innerText = affirmations[randomAffGen]
}

//Happy picture generator
let randomImages = [
  "https://wallpapercave.com/wp/RFIhgVw.jpg", 
  "https://i1.wp.com/beachmeter.com/wp-content/uploads/2017/06/Serene_Beaches-Anse-Source-D-Argent-seychelles_shutterstock_301332077f.jpg?fit=1070%2C443&ssl=1", 
  //"https://wallpaperaccess.com/full/913663.jpg", 
  "https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg", 
  "https://www.sierraclub.org/sites/www.sierraclub.org/files/styles/sierra_full_page_width/public/2019-11-OpeningShot-ph1-WB.jpg?itok=Kn62Ljo6"
]
function getRandomImage() { 
    let randomImgGen = Math.floor(Math.random() * Math.floor(randomImages.length));
    
    var randomImg = document.getElementById("random-img");
    randomImg.innerHTML = '<img src="'+randomImages[randomImgGen]+'" />' 
}

//written diary submission
document.addEventListener("DOMContentLoaded", function(){
    var input = document.getElementById("wd");
    input.onclick = updateHistory
    console.log('setting onclick', input.onclick)
    displayHistory();



    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }


    // Set up random button
    var random = document.getElementById("random");
    random.onclick = generateAffirmation

    const randomImageButton = document.getElementById("random-img-button")
    randomImageButton.onclick = getRandomImage
});

