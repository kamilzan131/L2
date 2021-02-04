let modal = document.getElementsByClassName('overlay');
let btn = document.querySelectorAll('.my-btn');
let spClose = document.getElementsByClassName('closex');

btn.forEach((_btn) => {
  _btn.addEventListener('click', () => {
    for (let j = 0; j < modal.length; j++) {
      let a = _btn.getAttributeNode("name");
      let b = modal[j].getAttributeNode("name");
      
      if (a.value === b.value) {
        modal[j].style.display = "block";
        console.log("true");
      }
      
    }
  });
});



spClose[0].onclick = function () {
  modal[0].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
};




const date = new Date();
const days = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let day = days[date.getMonth()];
const dateLine = document.querySelector('.glazing-calc__offer-data');
console.log(day);
console.log(dateLine);


dateLine.innerHTML = `Только сегодня ${date.getDate()} ${day}`;