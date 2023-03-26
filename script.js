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

//

// const form = document.getElementById("myForm");
// const captchaImg = document.getElementById("captchaImg");
// const captchaText = generateCaptchaText();

// // Generate random text for captcha
// function generateCaptchaText() {
//   let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let captcha = "";
//   for (let i = 0; i < 6; i++) {
//     captcha += chars[Math.floor(Math.random() * chars.length)];
//   }
//   return captcha;
// }

// // Update captcha image with new text
// function updateCaptcha() {
//   captchaText = generateCaptchaText();
//   captchaImg.src = https://dummyimage.com/150x50/000/fff&text=${captchaText};
// }

// // Check if captcha value is correct
// function checkCaptcha() {
//   return document.getElementById("captcha").value === captchaText;
// }

// // Add event listener to form submission
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   if (checkCaptcha()) {
//     // Captcha is correct, submit form
//     form.submit();
//   } else {
//     // Captcha is incorrect, update captcha and display error message
//     updateCaptcha();
//     alert("Incorrect Captcha. Please try again.");
//   }
// });

// // Update captcha when image is clicked
// captchaImg.addEventListener("click", updateCaptcha);
