var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/home/andrew/Downloads/websites projects/test-site-first-webpage/images-folder-about-me/my-image-2') {
      myImage.setAttribute ('src','/home/andrew/Downloads/websites projects/test-site-first-webpage/images-folder-about-me/my-image-2.jpg');
    } else {
      myImage.setAttribute ('src','/home/andrew/Downloads/websites projects/test-site-first-webpage/images-folder-about-me/my-image-2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Nice to meet you " + myName + ', let me tell you a bit about myself';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Nice to meet you " + storedName + ', let me tell you a bit about myself';
  }
  myButton.onclick = function() {
    setUserName();
  }

  