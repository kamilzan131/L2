let modal = document.getElementsByClassName('overlay');
let btn = document.getElementsByClassName('my-btn');
let spClose = document.getElementsByClassName('closex');



for (let index = 0; index < btn.length; index++) {
  btn[index].onclick = function () {
    modal[0].style.display = "block";
  };
  
}

spClose[0].onclick = function () {
  modal[0].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
};