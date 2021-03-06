// Add image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/glide_logo.png') {
		myImage.setAttribute('src', 'images/coil_logo.svg');
	} else {
		myImage.setAttribute('src', 'images/glide_logo.png');
	}
}

// Add personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Good morning, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Good morning, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}



