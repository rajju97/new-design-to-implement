// console.log('Hello!');

const btn = document.getElementById('modalButton');
console.log(btn);
const modal = document.getElementById('modal');
console.log(modal);

const tablemodal = document.getElementById('fade_in');

// btn.onclick = function () {
//   modal.style.display = 'block';
// };
btn.onclick = function () {
  tablemodal.style.display = 'block';
};

window.onclick = function (event) {
  if (event.target == tablemodal) {
    tablemodal.style.display = 'none';
  }
};
