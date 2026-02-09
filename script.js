// script.js

// 1. Define your images here [NEW]
const myPhotos = [
    'cat-heart.gif', // Keep the original gif as the first one
    'photo1.jpg',    // Add your own photo filenames here
    'photo2.jpg',
    'photo3.jpg'
];

let currentPhotoIndex = 0;

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            document.getElementById('name').style.display = 'none'; //
            displayCatHeart();
            startHearts(); 
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    }
}

// ... (keep flashRainbowColors, displayCat, createHeart, and startHearts as they were)

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    const imageContainer = document.getElementById('image-container');
    const slideshowImg = new Image();
    
    // Set initial image
    slideshowImg.src = myPhotos[0];
    slideshowImg.alt = 'Valentine Slideshow';
    
    slideshowImg.onload = function() {
        imageContainer.appendChild(slideshowImg);
        document.getElementById('options').style.display = 'none';
        
        // Add "Yey love u baby" with Fade-In [NEW]
        var loveMessage = document.createElement('div');
        loveMessage.innerText = 'Yey love u baby';
        loveMessage.className = 'fade-in'; // Apply the CSS class
        loveMessage.style.fontFamily = "'Sacramento', cursive";
        loveMessage.style.fontSize = "48px";
        loveMessage.style.marginTop = "20px";
        loveMessage.style.color = "#FB607F";
        document.getElementById('container').appendChild(loveMessage);
        
        // Start the slideshow if you have more than one photo
        if (myPhotos.length > 1) {
            startSlideshow(slideshowImg);
        }
    };
}

// Function to rotate images [NEW]
function startSlideshow(imgElement) {
    setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % myPhotos.length;
        imgElement.style.opacity = 0; // Fade out current
        
        setTimeout(() => {
            imgElement.src = myPhotos[currentPhotoIndex];
            imgElement.style.opacity = 1; // Fade in new
        }, 500); // Half-second transition
    }, 3000); // Changes every 3 seconds
}

// Keep the rest of your original functions below...
