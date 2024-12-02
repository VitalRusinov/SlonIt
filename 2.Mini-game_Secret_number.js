function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game () {
  const rangeMin = 1;
  const rangeMax = 100;
  const hiddenNumber = getRandomNumber(rangeMin, rangeMax);
  function findNumber (min, max, num) {
    const assumption = Math.floor((min + max) / 2);
    console.log(`Пробую число ${assumption}.`)
    if (assumption === num) {
      console.log('Угадал!');
      return;
    } else if (assumption < num) {
      console.log('Больше.');
      findNumber(assumption, max, num);
    } else if (assumption > num) {
      console.log('Меньше.');
      findNumber(min, assumption, num);
    }
  }
  findNumber(rangeMin, rangeMax, hiddenNumber);  
}

game();