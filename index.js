let timer = 100;
let speed = 100;
let timeout;

let debounce = function(func, delay) {
  clearTimeout(timeout);
  timeout = setTimeout(func, delay);
};

function onType(e) {
  if (!e || !e.data) return;
  right.innerHTML += e.data;
  if (e.data.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)) left.innerHTML += e.data;
  else debounce(() => translate(e.target.value), 250);
}

async function translate(q) {
  let encodedQuery = encodeURI(q);
  let data;
  right.innerHTML = q;
  await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=zh-CN&q=${encodedQuery}`)
  .then((e) => e.json())
  .then((d) => { data = d[0][0][0]; });
  if (data) left.innerHTML = data;
}

window.addEventListener("load", () => {
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  let input = document.getElementById("prompt");
  input.oninput = onType;
});
