// generate9Letters to be called in Letters component
// parameter letterOrder should be a 9-letter string composed of 'C's or 'V's, ex. 'CCVCCVCCV' or 'VVVCCCCCC'

function generate9Letters(letterOrder: string) {
  // const actualVowelDistribution: object = {
  //   A: 15,
  //   E: 21,
  //   I: 13,
  //   O: 13,
  //   U: 5,
  // };

  let vowels: string = 'AAAEEEEIIIOOOUAAAEEEEIIIOOOU';
  let consonants: string = 'BBCCCDDDDDDFFGGGHHJKLLLLLMMMMNNNNNNNNPPPPQRRRRRRRRRSSSSSSSSSTTTTTTTTTVWXYZ'

  let nineLetters = '';

  // function to generate random index of the above two strings, like drawing a random card from deck
  const randomIndex = (vowelOrConsonant: string) => Math.floor(Math.random() * vowelOrConsonant.length);

  //iterate over letterOrder argument
  for (const char of letterOrder) {
    if (char === 'C') {
      //random index must be recalculated with each new char
      const idx = randomIndex(consonants);
      nineLetters += consonants[idx];
      // consonants string must have recently-added letter removed so as to not affect letter frequency
      consonants = consonants.substring(0, idx) + consonants.substring(idx + 1);
    } else {
      const idx = randomIndex(vowels);
      nineLetters += vowels[idx];
      vowels = vowels.substring(0, idx) + vowels.substring(idx + 1);
    }
  }

  return nineLetters;
}

export default generate9Letters;
