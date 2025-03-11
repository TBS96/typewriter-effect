const messageBox = document.getElementById('message');
const text = 'Hello! I am a JavaScript Developer.';
let index = 0;
let isDeleting = false;

const typingEffect = () => {
    if (!isDeleting && index <= text.length) {
        messageBox.textContent = text.substring(0, index);
        index++;
        // console.log(index, isDeleting, text.substring(0, index));
    }
    else if (isDeleting && index >= 0) {
        messageBox.textContent = text.substring(0, index);
        index--;
        // console.log(index, isDeleting, text.substring(0, index));
    }

    if (index > text.length) {
        isDeleting = true;
    }
    else if (index < 0) {
        isDeleting = false;
    }

    setTimeout(typingEffect, 100);
};

typingEffect();