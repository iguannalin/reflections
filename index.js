let text = "Anna Y Lin is a Cantonese-American artist who is currently pursuing a masters at NYU's ITP. She studied psychology and, initially, art--which led her to a love of computer science. She's worked in multiple fields as a UX engineer in the Bay Area and Boston, and now works on projects that investigates via introspection our relationship to technology and the digital world through art.";

window.addEventListener("load", () => {
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  let timer = 100;
  text.split(" ").forEach((word, windex) => {
    let spaced = word.split("")
    spaced.push(" ");
    spaced.forEach((letter) => {
      setTimeout(async () => {
        right.innerHTML += letter;
      }, timer += 50);
    });
  })
});