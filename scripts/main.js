const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/plate-golem.jpg') {
        myImage.setAttribute('src', 'images/angry-golem.jpg')
    } else {
        myImage.setAttribute('src', 'images/plate-golem.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Golems are cool, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Golems are cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  }  