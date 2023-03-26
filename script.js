'use strict';
const icon = document.getElementById('icon');
const body = document.body;

// #-----------------------------For Dark Mode

icon.addEventListener('click', darkMode);

function darkMode() {
  body.classList.toggle('dark_theme');
  if (body.classList.contains('dark_theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.add('fa-moon');
    icon.classList.remove('fa-sun');
  }
}

// #-----------------------------------For Captcha

const captchaValue = document.getElementById('captchaValue');

let allValue = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

let val1 = allValue[Math.floor(Math.random() * allValue.length)];
let val2 = allValue[Math.floor(Math.random() * allValue.length)];
let val3 = allValue[Math.floor(Math.random() * allValue.length)];
let val4 = allValue[Math.floor(Math.random() * allValue.length)];
let val5 = allValue[Math.floor(Math.random() * allValue.length)];
let val6 = allValue[Math.floor(Math.random() * allValue.length)];

let value = val1 + val2 + val3 + val4 + val5 + val6; 

captchaValue.innerHTML = value;

