var myHeading1 = document.querySelector('h1');//object
myHeading1.textContent = 'ITS A MEME';

let number = 0;
let string = 'string';
let boolean = true;
let array = [0, 1, 'bob', true];
if(boolean === true);
else if(boolean !== true);
//alert('send something');

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/meme.jpg') {
      myImage.setAttribute ('src','images/meme_c.jpeg');
    } else {
      myImage.setAttribute ('src','images/meme.jpg');
    }
}
