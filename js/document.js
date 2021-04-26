"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%'; 
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Some text');
div.classList.add('black');

// wrapper.appendChild(div);

// document.body.append(div);

// document.querySelector('.wrapper').append(div);
wrapper.append(div);
// wrapper.prepend(div);

// wrapper.insertBefore(div, hearts[0]);
// wrapper.removeChild(hearts[1]);

// circles[0].after(div);

// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello world";

div.insertAdjacentHTML('afterend','<h2>Hello</h2>');