// Burger

const BURGER_BTN = document.querySelector("#menu-outline");
const CLOSE_BTN = document.querySelector('#close-button');
const BURGER = document.querySelector('#burger');
const ELEMENTS_BURGER = document.querySelector('.burger-list');

function toggleMenu() {
  BURGER.classList.toggle('active');
}

BURGER_BTN.addEventListener('click', toggleMenu);
CLOSE_BTN.addEventListener('click', toggleMenu);
ELEMENTS_BURGER.addEventListener('click', toggleMenu);

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_menu = target == BURGER || BURGER.contains(target);
  const its_btnMenu = target == BURGER_BTN;
  const menu_is_active = BURGER.classList.contains('active');

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});

// Desktop Slider

const LEFT_BOX = document.querySelector('.left-box');
const RIGHT_BOX = document.querySelector('.right-box');
const SLIDER_LINE = document.querySelector('.slider-line');
const ELLIPSES = document.querySelectorAll('.el-btn');
const SLIDES = document.querySelectorAll('.img-item');
let offset = 0;

LEFT_BOX.addEventListener('click', function() {
  if (SLIDER_LINE.style.left >= '860px') {
    ELLIPSES[0].style.opacity = '50%';
    ELLIPSES[1].style.opacity = '100%';
    ELLIPSES[2].style.opacity = '50%';
  }
  else if (SLIDER_LINE.style.left >= '0px') {
    ELLIPSES[0].style.opacity = '100%';
    ELLIPSES[1].style.opacity = '50%';
    ELLIPSES[2].style.opacity = '50%';
  }
  offset = offset - 860;
  if (offset < 0) {
    offset = 860;
  }
  SLIDER_LINE.style.left = offset + 'px';
});

RIGHT_BOX.addEventListener('click', function() {
  if (SLIDER_LINE.style.left === '-860px') {
    ELLIPSES[0].style.opacity = '50%';
    ELLIPSES[1].style.opacity = '100%';
    ELLIPSES[2].style.opacity = '50%';
  }
  else if (SLIDER_LINE.style.left === '0px') {
    ELLIPSES[0].style.opacity = '50%';
    ELLIPSES[1].style.opacity = '50%';
    ELLIPSES[2].style.opacity = '100%';
  }
  offset = offset + 860;
  if (offset > 1440) {
    offset = 0;
  }
  SLIDER_LINE.style.left = -offset + 'px';
});

// Mobile slider

let mobItems = document.querySelectorAll('.m-item');
let mobEllipses = document.querySelectorAll('.m-btn');
let mCurrentItem = 0;

let isEnabled = true;

function changeMobCurItem(n) {
  mCurrentItem = (n + mobItems.length) % mobItems.length;
}

function mHideItem(direction) {
  isEnabled = false;
  mobItems[mCurrentItem].classList.add(direction);
  mobItems[mCurrentItem].addEventListener('animationend', function() {
    this.classList.remove('m-img-active', direction);
  });
}

function mShowItem(direction) {
  mobItems[mCurrentItem].classList.add('m-next', direction);
  mobItems[mCurrentItem].addEventListener('animationend', function() {
    this.classList.remove('m-next', direction);
    this.classList.add('m-img-active');
    isEnabled = true;
  });
}

function mPreviousItem(n) {
  mHideItem('to-right');
  changeMobCurItem(mCurrentItem - 1);
  mShowItem('from-left');
}

function mNextItem(n) {
  mHideItem('to-left');
  changeMobCurItem(mCurrentItem + 1);
  mShowItem('from-right');
}

function mChangeOpasityLeft() {
  if (mobItems[0].classList.contains('m-img-active')) {
    mobEllipses[0].style.opacity = '50%';
    mobEllipses[1].style.opacity = '50%';
    mobEllipses[2].style.opacity = '100%';
  }
  else if (mobItems[1].classList.contains('m-img-active')) {
    mobEllipses[0].style.opacity = '100%';
    mobEllipses[1].style.opacity = '50%';
    mobEllipses[2].style.opacity = '50%';
  }
  else if (mobItems[2].classList.contains('m-img-active')) {
    mobEllipses[0].style.opacity = '50%';
    mobEllipses[1].style.opacity = '100%';
    mobEllipses[2].style.opacity = '50%';
  }
}

function mChangeOpasityRight() {
  if (mobItems[0].classList.contains('m-img-active')) {
    mobEllipses[0].style.opacity = '50%';
    mobEllipses[1].style.opacity = '100%';
    mobEllipses[2].style.opacity = '50%';
  }
  else if (mobItems[1].classList.contains('m-img-active')) {
    mobEllipses[0].style.opacity = '50%';
    mobEllipses[1].style.opacity = '50%';
    mobEllipses[2].style.opacity = '100%';
  }
  else if (mobItems[2].classList.contains('m-img-active')) {
    mobEllipses[0].style.opacity = '100%';
    mobEllipses[1].style.opacity = '50%';
    mobEllipses[2].style.opacity = '50%';
  }
}

document.querySelector('#left-arrow').addEventListener('click', function() {
if (isEnabled) {
  mPreviousItem(mCurrentItem);
}
  mChangeOpasityLeft();
});

document.querySelector('#right-arrow').addEventListener('click', function() {
if (isEnabled) {
  mNextItem(mCurrentItem);
}
  mChangeOpasityRight();
});



// Login pop up

const LOGIN_BTN = document.querySelector('#login-button');
const ACCOUNT_BTN = document.querySelector('#account-btn')
const LOGIN_POP_UP = document.querySelector('.login-pop-up');
const M_LOGIN_POP_UP = document.querySelector('.m-login-pop-up');

function toggleLogin() {
  LOGIN_POP_UP.classList.toggle('active-login');
}

LOGIN_BTN.addEventListener('click', toggleLogin);

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_login = target == LOGIN_POP_UP || LOGIN_POP_UP.contains(target);
  const its_btnLogin = target == LOGIN_BTN;
  const login_is_active = LOGIN_POP_UP.classList.contains('active-login');

  if (!its_login && !its_btnLogin && login_is_active) {
    toggleLogin();
  }
});

function toggleMobileLogin() {
  M_LOGIN_POP_UP.classList.toggle('m-active-login');
}

ACCOUNT_BTN.addEventListener('click', toggleMobileLogin);

const IMG_BACK = document.querySelector('#gradient-for-review');
const HEADER = document.querySelector('.mobile-header');
const STORIES = document.querySelector('.stories');

function removePopUp() {
  if (M_LOGIN_POP_UP.classList.contains('m-active-login')) {
    toggleMobileLogin();
  }
}
IMG_BACK.addEventListener('click', removePopUp);
HEADER.addEventListener('click', removePopUp);
STORIES.addEventListener('click', removePopUp);

// Login inputs

const SIGN_IN = document.getElementById('sign-in');
const M_SIGN_IN = document.getElementById('m-sign-in');

function alertUserInfo() {
  let INPUT_EMAIL = document.querySelector('#input-email').value;
  let INPUT_PASS = document.querySelector('#input-password').value;

  alert(`User email: ${INPUT_EMAIL}\nUser password: ${INPUT_PASS}`);
}

SIGN_IN.addEventListener('click', alertUserInfo);

function mobAlertUserInfo() {
  let M_INPUT_EMAIL = document.querySelector('#m-input-email').value;
  let M_INPUT_PASS = document.querySelector('#m-input-password').value;

  alert(`User email: ${M_INPUT_EMAIL}\nUser password: ${M_INPUT_PASS}`);
}

M_SIGN_IN.addEventListener('click', mobAlertUserInfo);

// Login register

const REGISTER_BTN = document.getElementById('reg-link');
const M_REGISTER_BTN = document.getElementById('m-reg-link');

function register() {
  document.querySelector('.login-pop-up').style.height = '436px';
  document.querySelector('.login-header').innerHTML = 'Create account';
  document.querySelector('#sign-in-fb').style.display = 'none';
  document.querySelector('#sign-in-google').style.display = 'none';
  document.querySelector('.login-border').style.display = 'none';
  document.querySelector('.forgot-pass').style.display = 'none';
  document.querySelector('#sign-in').style.margin = '0 0 26px 0';
  document.querySelector('#sign-in').innerHTML = 'Sign Up';
  document.querySelector('#reg-span').innerHTML = 'Already have an account?';
  document.querySelector('#reg-link').innerHTML = 'Log in';
}

function mRegister() {
  document.querySelector('.m-login-pop-up').style.height = '436px';
  document.querySelector('.m-login-header').innerHTML = 'Create account';
  document.querySelector('#m-sign-in-fb').style.display = 'none';
  document.querySelector('#m-sign-in-google').style.display = 'none';
  document.querySelector('.m-login-border').style.display = 'none';
  document.querySelector('.m-forgot-pass').style.display = 'none';
  document.querySelector('#m-sign-in').style.margin = '0 0 26px 0';
  document.querySelector('#m-sign-in').innerHTML = 'Sign Up';
  document.querySelector('#m-reg-span').innerHTML = 'Already have an account?';
  document.querySelector('#m-reg-link').innerHTML = 'Log in';
}

REGISTER_BTN.addEventListener('click', register);
M_REGISTER_BTN.addEventListener('click', mRegister);
