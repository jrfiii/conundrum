function shuffle(word: string): string {
  const letterArray = word.split('');

  for (let i = letterArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letterArray[i], letterArray[j]] = [letterArray[j], letterArray[i]];
  }

  return letterArray.join('');
}

export default shuffle;
