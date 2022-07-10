let phrases = [
  { text: 'Генератор Аркадьева-Маркса', image: 'generator.jpg' },
  { text: 'Горбовская ГЭС', image: 'gorgas.jpg' },
  { text: 'Пионерский лагерь «Сказка»', image: 'camp.jpg' },
  { text: 'Планетарий в санатории «Солнечное»', image: 'planetarium.jpg' },
  { text: 'Ткварчели, Абхазия', image: 'town.jpg' },
  { text: 'ЗИЛ', image: 'zil.jpg' },
  { text: 'Хэлсиен Холл', image: 'halsien.jpg' },
  { text: 'Стaнция Пcырцхa, Абхaзия', image: 'psyrckha.jpg' },
  { text: 'Башня-ресторан, Грузия, Анаклия.', image: 'anaklia.jpg' },
  { text: 'Усадьба Демидовых', image: 'demidov.jpg' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
for (let i = 0; i <= 2; i = i + 1) {
smoothly(phrase, 'textContent', phrases[i].text);
smoothly(image, 'src', phrases[i].image);
}
