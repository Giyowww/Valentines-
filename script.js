// script.js

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            // Hide the name Mikhaela Joyce Lazarte
            document.getElementById('name').style.display = 'none';
            displayCatHeart();
            startHearts(); // Start the heart animation [NEW]
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
        
        // Add "Yey love u baby" message
        var loveMessage = document.createElement('div');
        loveMessage.innerText = 'Yey love u baby';
        loveMessage.style.fontFamily = "'Sacramento', cursive";
        loveMessage.style.fontSize = "48px";
        loveMessage.style.marginTop = "20px";
        loveMessage.style.color = "#FB607F";
        document.getElementById('container').appendChild(loveMessage);
    };
}

// Function to create a single falling heart
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    
    // Remove heart after animation ends
    setTimeout(() => { heart.remove(); }, 5000);
}

// Function to start the heart shower
function startHearts() {
    setInterval(createHeart, 300);
}

displayCat();
