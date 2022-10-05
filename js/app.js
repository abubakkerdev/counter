
let counter     = document.querySelectorAll(".counter");
let arr         = Array.from(counter);
let all_number  = [];
let all_time    = [];
let globalTime  = 10;

arr.map((el) => {
  if (el.hasAttribute("data-fastORslow") && el.dataset.fastorslow !== '') {
    if (Number(el.dataset.fastorslow) >= 5) {
      globalTime = Number(el.dataset.fastorslow);
    }
  }
  all_number.push(Number(el.dataset.number));
});

let maxNumber = Math.max(...all_number);
let time      = maxNumber * globalTime;

all_number.map((el) => {
  let cal = time / el;
  all_time.push(Math.ceil(cal));
});

arr.map((el, index) => {
  let count = 0;
  function counterUp() {
    count++;
    el.innerHTML = count;
    if (count == el.dataset.number) {
      clearInterval(stop);
    }
  }
  let stop = setInterval(counterUp, all_time[index]);
});
