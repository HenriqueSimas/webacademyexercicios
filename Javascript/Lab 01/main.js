const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = "O maior clube é o :insertx: . A maior torcida é do :inserty: . O melhor estádio é :insertz:. Para Bob o :insertx: é o maior clube.";
const insertx = ["Santos FC", "Amazonas FC", "Flamengo"];
const inserty = ["Santos", "Corinthians", "Amazonas"];
const insertz = ["Vila Belmiro","Maracanã","Arena da Amazonia"];
const insertxUK = ["Manchester United", "Liverpool FC", "Chelsea FC","Tottenham","Arsenal", "Manchester City"];
const insertyUK = ["Manchester", "Liverpool", "London", "Chelsea FC","Tottenham","Arsenal", "Manchester City"];
const insertzUK = ["Old Trafford", "Anfield", "Stamford Bridge","Wembley Stadium","Tottenham Hotspur Stadium","Emirates Stadium"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const isUKSelected = document.getElementById("uk").checked;
  const xArray = isUKSelected ? insertxUK : insertx;
  const yArray = isUKSelected ? insertyUK : inserty;
  const zArray = isUKSelected ? insertzUK : insertz;

  const xItem = randomValueFromArray(xArray);
  const yItem = randomValueFromArray(yArray);
  const zItem = randomValueFromArray(zArray);

  newStory = newStory.replaceAll(":insertx:", xItem).replace(":inserty:", yItem).replace(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}