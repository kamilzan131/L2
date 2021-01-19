let modal = document.getElementsByClassName('overlay');
let btn = document.getElementsByClassName('my-btn');
let spClose = document.getElementsByClassName('closex');


btn[0].onclick = function () {
  for (let j = 0; j < modal.length; j++) {
    modal[j].style.display = "block";

    
  }
};


spClose[0].onclick = function () {
  modal[0].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
};