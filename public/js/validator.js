const checkLength = function checkLength(fieldID, msgId, maxLength, mLength) {
  let minLength = mLength;
  if (typeof minLength === 'undefined') {
    minLength = 1;
  }

  return function error() {
    const fid = document.getElementById(fieldID);
    const mid = document.getElementById(msgId);
    const errMsg = `Must be between ${minLength} and ${maxLength} characters long`;
    if (fid.value.length < minLength || fid.value.length > maxLength) {
      mid.innerHTML = errMsg;
    } else {
      mid.innerHTML = 'OK';
    }
  };
};
checkLength();

const typeLimit = function typeLimit() {
  const msgEl = document.getElementById('msgLength');
  const countTyped = document.getElementById('comment').value.length;
  const countLimit = 500;
  const countLeft = countLimit - countTyped;
  if (countLeft > 0) {
    msgEl.innerHTML = `You have ${countLeft} characters left to type`;
  } else {
    const comment = document.getElementById('comment');
    msgEl.innerHTML = 'You have reach your limit';
    comment.value = comment.value.substr(0, countLimit - 1);
  }
};
typeLimit();

const transCheck = function transCheck() {
  const childInput = Array.from(document.querySelectorAll('#trainGroup input'));

  const strMsg1 = childInput.some(input => input.checked)
    ? ''
    : 'you forgot to select a transportation.';

  document.getElementById('catch1').innerHTML = strMsg1;
};
transCheck();

const groupCheck = function groupCheck() {
  const childInput = Array.from(document.querySelectorAll('#genderGroup input'));

  const strMsg = childInput.some(input => input.checked)
    ? ''
    : 'you forgot to select a gender.';

  document.getElementById('catch').innerHTML = strMsg;
};
groupCheck();

window.onload = function validate() {
  document.getElementById('fname').onkeyup = checkLength('fname', 'fnameE', 30);
  document.getElementById('lname').onkeyup = checkLength('lname', 'lnameE', 20, 1);
  document.getElementById('pname').onkeyup = checkLength('pname', 'pnameE', 25, 8);
  document.getElementById('comment').addEventListener('input', typeLimit);
  document.getElementById('genderGroup').addEventListener('change', groupCheck);
  document.getElementById('trainGroup').addEventListener('change', transCheck);
};
