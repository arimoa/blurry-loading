let percentageEl = document.getElementById("percentage");
let bgEl = document.getElementById("container");
let value = 0;
let blurValue;
let percentageValue;
bgEl.style.filter = `blur(${blurValue}px)`;

function loadingFun() {
  value++;
  blurValue = Math.floor((100 - value) / 20);
  bgEl.style.filter = `blur(${blurValue}px)`;
  percentageValue = 100 - value;
  percentageEl.style.opacity = `${percentageValue}%`;
  percentageEl.innerHTML = `${value}%`;
  if (value < 100) {
    setTimeout(loadingFun, 40);
  }
}
loadingFun();
