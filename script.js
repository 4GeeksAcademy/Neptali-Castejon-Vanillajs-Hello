function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateExcuse() {
  const first = "A ";
  const adj = [
    "two headed ",
    "nuclear ",
    "angry ",
    "lonely ",
    "crazy ",
    "glowing ",
    "smelly ",
    "slow ",
    "old ",
  ];
  const noun = [
    "jogger ",
    "racoon ",
    "dog ",
    "merchant ",
    "driver ",
    "comedian ",
    "pinecone ",
  ];
  const action = [
    "took my ",
    "threw my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my ",
  ];
  const possession = [
    "toe ",
    "car ",
    "watch ",
    "shoe ",
    "wallet ",
    "shirt ",
    "keys ",
    "computer ",
    "phone ",
    "sandwich ",
  ];
  const where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in front of the office",
    "near the mall",
    "near the toilet",
    "at the bus station",
  ];

  const excuse = `${first}${getRandomElement(adj)}${getRandomElement(
    noun
  )}${getRandomElement(action)}${getRandomElement(
    possession
  )}${getRandomElement(where)}`;
  return excuse;
}

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
